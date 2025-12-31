import qrcode
import os

def generate_qr_code(data, employee_id):
    folder = "qr_codes"
    os.makedirs(folder, exist_ok=True)

    img = qrcode.make(data)
    path = f"{folder}/employee_{employee_id}.png"
    img.save(path)

    return path
