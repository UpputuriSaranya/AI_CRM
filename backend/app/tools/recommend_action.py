from langchain.tools import tool

from langchain_groq import ChatGroq

from app.config.settings import GROQ_API_KEY

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=GROQ_API_KEY
)


@tool
def recommend_action(summary: str):

    prompt = f"""
You are a Pharma CRM Assistant.

Based on this history,

{summary}

Recommend the next action.
"""

    return llm.invoke(prompt).content