from models.leave_model import Leave
from extensions import db

def apply_leave(employee_id, reason):
    leave = Leave(
        employee_id=employee_id,
        reason=reason
    )
    db.session.add(leave)
    db.session.commit()
    return leave
