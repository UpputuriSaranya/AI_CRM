from datetime import date

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.db import get_db
from app.models.interaction import Interaction

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_interactions = db.query(
        Interaction
    ).count()

    total_doctors = db.query(
        func.count(
            func.distinct(Interaction.hcpName)
        )
    ).scalar()

    today = str(date.today())

    today_meetings = db.query(
        Interaction
    ).filter(
        Interaction.date == today
    ).count()

    pending_followups = db.query(
        Interaction
    ).filter(
        Interaction.followUp != ""
    ).count()

    return {

        "totalInteractions": total_interactions,

        "totalDoctors": total_doctors,

        "todayMeetings": today_meetings,

        "pendingFollowUps": pending_followups

    }