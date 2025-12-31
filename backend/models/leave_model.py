from extensions import db

class Leave(db.Model):
    __tablename__ = "leaves"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer)
    reason = db.Column(db.String(200))
    status = db.Column(db.String(20), default="Pending")
