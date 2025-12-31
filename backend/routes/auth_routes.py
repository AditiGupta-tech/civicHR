from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models.employee_model import Employee

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = Employee.query.filter_by(email=data["email"]).first()

    if user and user.check_password(data["password"]):
        token = create_access_token(
            identity=user.id,
            additional_claims={"role": user.role}
        )
        return jsonify(token=token, role=user.role)

    return jsonify({"error": "Invalid credentials"}), 401
