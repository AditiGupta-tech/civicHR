from models.transfer_model import Transfer
from extensions import db

def request_transfer(employee_id, from_department, to_department):
    """
    Handles employee transfer request logic
    """

    transfer = Transfer(
        employee_id=employee_id,
        from_department=from_department,
        to_department=to_department
    )

    db.session.add(transfer)
    db.session.commit()

    return transfer
