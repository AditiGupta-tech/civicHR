import "../../styles/leave.css";

import { useState } from "react";

const Leave = () => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      empId: "EMP001",
      name: "Rahul Sharma",
      type: "Casual",
      from: "2025-01-10",
      to: "2025-01-12",
      status: "Pending",
    },
    {
      id: 2,
      empId: "EMP002",
      name: "Anita Verma",
      type: "Sick",
      from: "2025-01-08",
      to: "2025-01-08",
      status: "Approved",
    },
    {
      id: 3,
      empId: "EMP003",
      name: "Sunil Kumar",
      type: "Earned",
      from: "2025-01-05",
      to: "2025-01-09",
      status: "Rejected",
    },
  ]);

  const handleApprove = (id) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
  };

  const handleReject = (id) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
  };

return (
  <div className="leave-container">
    <h1 className="leave-title">Leave Management</h1>

    <div className="leave-card">
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.empId}</td>
              <td>{leave.name}</td>
              <td>{leave.type}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.status}</td>

              <td>
                {leave.status === "Pending" ? (
                  <>
                    <button
                      className="btn approve"
                      onClick={() => handleApprove(leave.id)}
                    >
                      Approve
                    </button>

                    <button
                      className="btn reject"
                      onClick={() => handleReject(leave.id)}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default Leave;
