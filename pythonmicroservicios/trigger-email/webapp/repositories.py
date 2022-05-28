"""Repositories module."""

from contextlib import AbstractContextManager
from typing import Callable, Iterator

from sqlalchemy.orm import Session

from .models import Trigger
from .dto_files import TriggerEmail, LookEmails


class UserRepository:

    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]) -> None:
        self.session_factory = session_factory
    
    def trigger(self, data:TriggerEmail)-> Trigger:
        with self.session_factory() as session:
            trigguer = Trigger(
                from_email = data.from_email,
                to_email = data.to_email,
                content = data.content
                )
            session.add(trigguer)
            session.commit()
            session.refresh(trigguer)
            return trigguer
    
    def look_emails(self, look_emails :LookEmails) -> Trigger:
        with self.session_factory() as session:
            data_emails = session.query(Trigger).filter(Trigger.from_email == look_emails.from_email).all()
            if not data_emails:
                raise UserNotFoundError(look_emails.from_email)
            return data_emails 

class NotFoundError(Exception):

    entity_name: str

    def __init__(self, entity_id):
        super().__init__(f"{self.entity_name} not found, id: {entity_id}")


class UserNotFoundError(NotFoundError):

    entity_name: str = "User"
