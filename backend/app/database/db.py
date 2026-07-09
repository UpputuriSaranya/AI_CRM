import os

from urllib.parse import quote_plus

from dotenv import load_dotenv

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

DATABASE_URL = (
    f"mysql+pymysql://"
    f"{os.getenv('DB_USER')}:"
    f"{quote_plus(os.getenv('DB_PASSWORD'))}@"
    f"{os.getenv('DB_HOST')}:"
    f"{os.getenv('DB_PORT')}/"
    f"{os.getenv('DB_NAME')}"
)

print(DATABASE_URL)

engine = create_engine(
    DATABASE_URL,
    echo=True
)

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False
)

Base = declarative_base()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()