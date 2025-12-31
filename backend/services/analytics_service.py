from models.attendance_model import Attendance

def get_attendance_stats():
    total = Attendance.query.count()
    present = Attendance.query.filter_by(status="Present").count()

    return {
        "total": total,
        "present": present,
        "absent": total - present
    }
