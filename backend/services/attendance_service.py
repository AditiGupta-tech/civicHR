from models.attendance_model import Attendance
from extensions import db

def mark_attendance(employee_id, status):
    attendance = Attendance(
        employee_id=employee_id,
        status=status
    )
    db.session.add(attendance)
    db.session.commit()
    return attendance
