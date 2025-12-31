import pandas as pd

def absenteeism_rate(attendance_records):
    df = pd.DataFrame(attendance_records)
    return (df["status"] == "Absent").mean() * 100
