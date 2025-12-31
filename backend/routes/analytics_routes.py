from flask import Blueprint, jsonify
from services.analytics_service import get_attendance_stats

analytics_bp = Blueprint("analytics", __name__)

@analytics_bp.route("/analytics/attendance", methods=["GET"])
def attendance_analytics():
    stats = get_attendance_stats()
    return jsonify(stats)
