from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from extensions import db, jwt


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # ------------------ IMPORT MODELS ------------------
    # (Safe here – avoids circular imports)
    from models.employee_model import Employee
    from models.attendance_model import Attendance
    from models.leave_model import Leave
    from models.grievance_model import Grievance
    from models.payroll_model import Payroll
    from models.transfer_model import Transfer

    # Create database tables
    with app.app_context():
        db.create_all()

    # ------------------ REGISTER BLUEPRINTS ------------------
    from routes.auth_routes import auth_bp
    from routes.attendance_routes import attendance_bp
    from routes.leave_routes import leave_bp
    from routes.grievance_routes import grievance_bp
    from routes.analytics_routes import analytics_bp
    from routes.chatbot_routes import chatbot_bp
    from routes.payroll_routes import payroll_bp
    from routes.transfer_routes import transfer_bp
    from routes.qr_routes import qr_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(attendance_bp)
    app.register_blueprint(leave_bp)
    app.register_blueprint(grievance_bp)
    app.register_blueprint(analytics_bp)
    app.register_blueprint(chatbot_bp)
    app.register_blueprint(payroll_bp)
    app.register_blueprint(transfer_bp)
    app.register_blueprint(qr_bp)

    # ------------------ ROOT ROUTE (NO MORE 404) ------------------
    @app.route("/", methods=["GET"])
    def index():
        return jsonify({
            "message": "CivicHR Backend API is running successfully",
            "status": "OK"
        }), 200

    # ------------------ HEALTH CHECK ------------------
    @app.route("/health", methods=["GET"])
    def health():
        return jsonify({
            "status": "MuniHRMS Backend is running",
            "version": "1.0"
        }), 200

    return app


# Create app instance
app = create_app()

# Run server
if __name__ == "__main__":
    app.run(debug=True)
