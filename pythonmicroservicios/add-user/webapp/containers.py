"""Containers module."""

from dependency_injector import containers, providers

from .database import Database
from .repositories import UserRepository
from .services import UserService


class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(modules=[".endpoints"])

    config = providers.Configuration(yaml_files=["config.yml"]) # como un .env

    db = providers.Singleton(Database, db_url=config.db.url) #invesitgar como implementar singleton (libreria o hardcodeado)

    user_repository = providers.Factory(  #investigar como implemento factory (libreria o hardcodeado)
        UserRepository,
        session_factory=db.provided.session,
    )

    user_service = providers.Factory(
        UserService,
        user_repository=user_repository,
    )
