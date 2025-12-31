from flask import Blueprint, request, jsonify
from models.grievance_model import Grievance
from extensions import db

grievance_bp = Blueprint("grievance", __name__)

@grievance_bp.route("/grievance/raise", methods=["POST"])
def raise_grievance():
    data = request.json
    grievance = Grievance(
        employee_id=data["employee_id"],
        message=data["message"]
    )
    db.session.add(grievance)
    db.session.commit()
    return jsonify({"message": "Grievance submitted"})
