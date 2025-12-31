from flask import Blueprint, request, jsonify
from services.transfer_service import request_transfer

transfer_bp = Blueprint("transfer", __name__)

@transfer_bp.route("/transfer/request", methods=["POST"])
def transfer():
    data = request.json

    request_transfer(
        employee_id=data["employee_id"],
        from_department=data["from_department"],
        to_department=data["to_department"]
    )

    return jsonify({"message": "Transfer request submitted"})
