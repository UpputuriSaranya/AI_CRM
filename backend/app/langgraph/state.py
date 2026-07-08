from typing import TypedDict, Dict


class CRMState(TypedDict):
    message: str
    intent: str
    extracted: Dict
    reply: str