from langchain.tools import tool

from app.database.db import SessionLocal
from app.models.interaction import Interaction


@tool
def edit_interaction(
    interaction_id: int,
    samples: str
):

    db = SessionLocal()

    interaction = db.query(
        Interaction
    ).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction is None:

        db.close()

        return "Interaction not found."

    interaction.samples = samples

    db.commit()

    db.close()

    return "Interaction updated successfully."