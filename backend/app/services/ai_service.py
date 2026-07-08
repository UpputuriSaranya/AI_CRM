from app.langgraph.graph import graph


class AIService:

    @staticmethod
    def process_chat(message: str):

        initial_state = {
            "message": message,
            "intent": "",
            "reply": "",
            "extracted": {}
        }

        result = graph.invoke(initial_state)

        return {
            "reply": result["reply"],
            "interaction": result["extracted"]
        }