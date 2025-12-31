from flask import Blueprint, jsonify
from services.qr_service import create_employee_qr

qr_bp = Blueprint("qr", __name__)

@qr_bp.route("/qr/generate/<int:employee_id>", methods=["GET"])
def generate(employee_id):
    path = create_employee_qr(employee_id)
    return jsonify({
        "message": "QR code generated",
        "path": path
    })
