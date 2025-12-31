from extensions import db
from datetime import datetime

class Payroll(db.Model):
    __tablename__ = "payroll"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer, nullable=False)
    month = db.Column(db.String(20))
    salary = db.Column(db.Float)
    status = db.Column(db.String(20), default="Pending")
    generated_at = db.Column(db.DateTime, default=datetime.utcnow)
