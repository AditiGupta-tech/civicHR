from models.payroll_model import Payroll
from extensions import db

def generate_payroll(employee_id, month, salary):
    payroll = Payroll(
        employee_id=employee_id,
        month=month,
        salary=salary
    )
    db.session.add(payroll)
    db.session.commit()
    return payroll
