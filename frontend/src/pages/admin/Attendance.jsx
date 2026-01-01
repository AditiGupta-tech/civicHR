import { useState } from "react";
import "../../styles/Attendance.css";

const Attendance = () => {
  const [records] = useState([
    {
      id: 1,
      empId: "EMP001",
      name: "Rahul Sharma",
      date: "2025-01-10",
      checkIn: "09:05 AM",
      checkOut: "05:45 PM",
      status: "Present",
      method: "Face + GPS",
    },
    {
      id: 2,
      empId: "EMP002",
      name: "Anita Verma",
      date: "2025-01-10",
      checkIn: "09:40 AM",
      checkOut: "05:30 PM",
      status: "Late",
      method: "QR",
    },
    {
      id: 3,
      empId: "EMP003",
      name: "Sunil Kumar",
      date: "2025-01-10",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
      method: "-",
    },
  ]);

  const getStatusClass = (status) => {
    if (status === "Present") return "status-present";
    if (status === "Late") return "status-late";
    return "status-absent";
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-title">Attendance Overview</h1>

      <div className="attendance-card">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Method</th>
            </tr>
          </thead>

          <tbody>
            {records.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.empId}</td>
                <td>{rec.name}</td>
                <td>{rec.date}</td>
                <td>{rec.checkIn}</td>
                <td>{rec.checkOut}</td>
                <td className={getStatusClass(rec.status)}>
                  {rec.status}
                </td>
                <td>{rec.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
