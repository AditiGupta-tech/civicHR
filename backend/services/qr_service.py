from utils.qr_generator import generate_qr_code

def create_employee_qr(employee_id):
    return generate_qr_code(f"EMPLOYEE:{employee_id}", employee_id)
