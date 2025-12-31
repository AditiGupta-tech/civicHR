from flask import Blueprint, request, jsonify
from services.leave_service import apply_leave

leave_bp = Blueprint("leave", __name__)

@leave_bp.route("/leave/apply", methods=["POST"])
def apply():
    data = request.json

    apply_leave(
        employee_id=data["employee_id"],
        reason=data["reason"]
    )

    return jsonify({"message": "Leave applied successfully"})
