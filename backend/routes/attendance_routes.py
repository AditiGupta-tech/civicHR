from flask import Blueprint, request, jsonify
from services.attendance_service import mark_attendance

attendance_bp = Blueprint("attendance", __name__)

@attendance_bp.route("/attendance/mark", methods=["POST"])
def mark():
    data = request.json

    mark_attendance(
        employee_id=data["employee_id"],
        status=data["status"]
    )

    return jsonify({"message": "Attendance marked successfully"})
