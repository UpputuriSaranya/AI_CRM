from langchain.tools import tool

from app.database.db import SessionLocal
from app.models.interaction import Interaction


@tool
def summarize_hcp(name: str):

    db = SessionLocal()

    interactions = db.query(
        Interaction
    ).filter(
        Interaction.hcpName.ilike(f"%{name}%")
    ).all()

    db.close()

    if not interactions:

        return "No interactions found."

    summary = ""

    for item in interactions:

        summary += (
            f"On {item.date}, discussed "
            f"{item.topics}. "
        )

    return summary