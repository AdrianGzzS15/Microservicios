from pydantic import BaseModel

class TriggerEmail(BaseModel):
    from_email: str
    to_email: str
    content: str

class LookEmails(BaseModel):
    from_email: str
