from pydantic import BaseModel


class InteractionSchema(BaseModel):

    hcpName: str = ""

    interactionType: str = ""

    date: str = ""

    time: str = ""

    attendees: str = ""

    topics: str = ""

    materials: str = ""

    samples: str = ""

    followUp: str = ""

    notes: str = ""

    class Config:

        from_attributes = True