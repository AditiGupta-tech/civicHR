import pandas as pd

def detect_attendance_anomalies(attendance_records):
    """
    Detects abnormal absentee patterns
    """
    df = pd.DataFrame(attendance_records)

    if df.empty:
        return []

    anomalies = df[df["status"] == "Absent"]
    return anomalies.to_dict(orient="records")
