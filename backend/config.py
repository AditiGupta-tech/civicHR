import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Flask
    SECRET_KEY = "munihrms-secret-key"

    # Database
    SQLALCHEMY_DATABASE_URI = (
        "sqlite:///" + os.path.join(BASE_DIR, "database", "hrms.db")
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT
    JWT_SECRET_KEY = "munihrms-jwt-secret-key"

    # CORS
    CORS_HEADERS = "Content-Type"
