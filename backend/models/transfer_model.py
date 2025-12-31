from extensions import db
from datetime import datetime

class Transfer(db.Model):
    __tablename__ = "transfers"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer)
    from_department = db.Column(db.String(100))
    to_department = db.Column(db.String(100))
    status = db.Column(db.String(20), default="Requested")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
