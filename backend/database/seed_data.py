from app import db
from models.employee_model import Employee

def seed_employees():
    admin = Employee(
        name="Admin User",
        email="admin@mcd.gov",
        role="admin",
        department="IT",
        designation="System Admin"
    )
    admin.set_password("admin123")

    db.session.add(admin)
    db.session.commit()
