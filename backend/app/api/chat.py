from fastapi import APIRouter

from app.schemas.chat import ChatRequest

from app.services.ai_service import AIService

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/")
async def chat(request: ChatRequest):

    response = AIService.process_chat(request.message)

    return response