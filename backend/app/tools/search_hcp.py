from langchain.tools import tool
from sqlalchemy.orm import Session

from app.database.db import SessionLocal
from app.models.interaction import Interaction


@tool
def search_hcp(name: str):

    db: Session = SessionLocal()

    interactions = db.query(
        Interaction
    ).filter(
        Interaction.hcpName.ilike(f"%{name}%")
    ).all()

    db.close()

    if not interactions:
        return "No interactions found."

    result = []

    for item in interactions:

        result.append({

            "date": item.date,

            "type": item.interactionType,

            "topics": item.topics

        })

    return result