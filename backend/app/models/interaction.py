from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database.db import Base


class Interaction(Base):

    __tablename__ = "interactions"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    hcpName = Column(String(100))

    interactionType = Column(String(100))

    date = Column(String(50))

    time = Column(String(50))

    attendees = Column(Text)

    topics = Column(Text)

    materials = Column(Text)

    samples = Column(String(50))

    followUp = Column(Text)

    notes = Column(Text)