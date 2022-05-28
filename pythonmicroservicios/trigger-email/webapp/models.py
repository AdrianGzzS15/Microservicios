"""Models module."""

from sqlalchemy import Column, String, Boolean, Integer

from .database import Base


class Trigger(Base):

    __tablename__ = "trigger"

    id = Column(Integer, primary_key=True)
    from_email = Column(String)
    to_email = Column(String)
    content = Column(String)

    def __repr__(self):
        return f"<User(id={self.id}, " \
               f"email=\"{self.from_email}\", " \
               f"to_email=\"{self.to_email}\", " \
               f"content={self.content})>"
