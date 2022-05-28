"""Endpoints module."""

from fastapi import APIRouter, Depends, Response, status
from dependency_injector.wiring import inject, Provide

from .containers import Container
from .services import UserService
from .repositories import NotFoundError
from .dto_files import TriggerEmail, LookEmails

router = APIRouter()


@router.get("/email/{email}")
@inject
def get_by_id(
        email : str,
        user_service: UserService = Depends(Provide[Container.user_service]),
):
    try:
        look_email = LookEmails(from_email=email)
        return user_service.get_emails(look_email)
    except NotFoundError:
        return Response(status_code=status.HTTP_404_NOT_FOUND)


@router.post("/email")
@inject
def add(
        trigger_email : TriggerEmail,
        user_service: UserService = Depends(Provide[Container.user_service]),
):
    return user_service.trigger(trigger_email)


