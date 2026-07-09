from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.interaction import Interaction
from app.schemas.interaction import InteractionSchema

router = APIRouter(
    prefix="/interaction",
    tags=["Interaction"]
)


# ----------------------------
# Save Interaction
# ----------------------------

@router.post("/")
def save_interaction(
    data: InteractionSchema,
    db: Session = Depends(get_db)
):

    interaction = Interaction(**data.model_dump())

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    return {
        "message": "Interaction Saved Successfully",
        "id": interaction.id
    }


# ----------------------------
# Get All
# ----------------------------

@router.get("/")
def get_all_interactions(
    db: Session = Depends(get_db)
):

    return db.query(Interaction).all()


# ----------------------------
# Get One
# ----------------------------

@router.get("/{interaction_id}")
def get_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):

    interaction = db.query(
        Interaction
    ).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction is None:

        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found"
        )

    return interaction


# ----------------------------
# Update
# ----------------------------

@router.put("/{interaction_id}")
def update_interaction(
    interaction_id: int,
    data: InteractionSchema,
    db: Session = Depends(get_db)
):

    interaction = db.query(
        Interaction
    ).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction is None:

        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found"
        )

    update_data = data.model_dump()

    for key, value in update_data.items():

        setattr(interaction, key, value)

    db.commit()

    db.refresh(interaction)

    return {
        "message": "Updated Successfully"
    }


# ----------------------------
# Delete
# ----------------------------

@router.delete("/{interaction_id}")
def delete_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):

    interaction = db.query(
        Interaction
    ).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction is None:

        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found"
        )

    db.delete(interaction)

    db.commit()

    return {
        "message": "Deleted Successfully"
    }