"""Services module."""

from uuid import uuid4
from typing import Iterator

from .repositories import UserRepository
from .models import Trigger
from .dto_files import TriggerEmail, LookEmails

class UserService:

    def __init__(self, user_repository: UserRepository) -> None:
        self._repository: UserRepository = user_repository
    
    def trigger(self,trigger_email : TriggerEmail):
        return self._repository.trigger(trigger_email)
    
    def get_emails(self, look_emails : LookEmails):
        return self._repository.look_emails(look_emails)

