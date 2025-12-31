from flask import Blueprint, request, jsonify
from services.payroll_service import generate_payroll

payroll_bp = Blueprint("payroll", __name__)

@payroll_bp.route("/payroll/generate", methods=["POST"])
def generate():
    data = request.json

    generate_payroll(
        employee_id=data["employee_id"],
        month=data["month"],
        salary=data["salary"]
    )

    return jsonify({"message": "Payroll generated successfully"})
