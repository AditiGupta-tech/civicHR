from datetime import datetime
from extensions import db
import bcrypt

class Employee(db.Model):
    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    role = db.Column(db.String(20), nullable=False)  # employee / officer / admin
    department = db.Column(db.String(100))
    designation = db.Column(db.String(100))

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, pwd):
        self.password = bcrypt.hashpw(
            pwd.encode(), bcrypt.gensalt()
        ).decode()

    def check_password(self, pwd):
        return bcrypt.checkpw(
            pwd.encode(), self.password.encode()
        )
