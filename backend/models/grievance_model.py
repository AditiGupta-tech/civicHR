from extensions import db

class Grievance(db.Model):
    __tablename__ = "grievances"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer)
    message = db.Column(db.String(300))
    status = db.Column(db.String(20), default="Open")
