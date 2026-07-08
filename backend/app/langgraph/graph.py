import json

from langgraph.graph import StateGraph, START, END

from app.langgraph.state import CRMState
from app.langgraph.agent import llm
from app.langgraph.prompts import SYSTEM_PROMPT
from app.langgraph.tools import (
    log_interaction,
    edit_interaction,
    search_hcp,
    summarize_interaction,
    recommend_next_action,
)


# --------------------------
# Intent Router
# --------------------------

def detect_intent(state: CRMState):

    message = state["message"].lower()

    if "edit" in message or "update" in message:
        state["intent"] = "edit"

    elif "search" in message or "find" in message:
        state["intent"] = "search"

    elif "summary" in message or "summarize" in message:
        state["intent"] = "summary"

    elif "recommend" in message or "suggest" in message:
        state["intent"] = "recommend"

    else:
        state["intent"] = "log"

    return state


# --------------------------
# Route
# --------------------------

def route(state: CRMState):

    return state["intent"]


# --------------------------
# LLM Extraction
# --------------------------

def extract_information(state: CRMState):

    prompt = f"""
{SYSTEM_PROMPT}

User Input:

{state["message"]}
"""

    response = llm.invoke(prompt)

    text = response.content.strip()

    if text.startswith("```"):

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

    try:

        extracted = json.loads(text)

    except Exception:

        extracted = {
            "hcpName": "",
            "interactionType": "",
            "date": "",
            "time": "",
            "attendees": "",
            "topics": "",
            "materials": "",
            "samples": "",
            "followUp": "",
            "notes": ""
        }

    state["reply"] = "Interaction processed successfully."

    state["extracted"] = extracted

    return state


# --------------------------
# Tool Nodes
# --------------------------

def log_node(state: CRMState):

    log_interaction(state)

    return extract_information(state)


def edit_node(state: CRMState):

    edit_interaction(state)

    return extract_information(state)


def search_node(state: CRMState):

    search_hcp(state)

    return extract_information(state)


def summary_node(state: CRMState):

    summarize_interaction(state)

    return extract_information(state)


def recommend_node(state: CRMState):

    recommend_next_action(state)

    return extract_information(state)


# --------------------------
# Graph
# --------------------------

builder = StateGraph(CRMState)

builder.add_node("detect_intent", detect_intent)

builder.add_node("log", log_node)

builder.add_node("edit", edit_node)

builder.add_node("search", search_node)

builder.add_node("summary", summary_node)

builder.add_node("recommend", recommend_node)

builder.add_edge(START, "detect_intent")

builder.add_conditional_edges(
    "detect_intent",
    route,
    {
        "log": "log",
        "edit": "edit",
        "search": "search",
        "summary": "summary",
        "recommend": "recommend",
    },
)

builder.add_edge("log", END)

builder.add_edge("edit", END)

builder.add_edge("search", END)

builder.add_edge("summary", END)

builder.add_edge("recommend", END)

graph = builder.compile()