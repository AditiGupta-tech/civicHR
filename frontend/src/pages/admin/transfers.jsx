import { useState } from "react";
import "../../styles/Transfers.css";

const Transfers = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      empId: "EMP021",
      name: "Amit Singh",
      from: "Zone A",
      to: "Zone C",
      status: "Pending",
    },
    {
      id: 2,
      empId: "EMP034",
      name: "Neha Verma",
      from: "Zone B",
      to: "Zone D",
      status: "Approved",
    },
  ]);

  const updateStatus = (id, status) => {
    setRequests(
      requests.map(r =>
        r.id === id ? { ...r, status } : r
      )
    );
  };

  return (
    <div className="transfer-container">
      <h1 className="transfer-title">Transfer Management</h1>

      <div className="transfer-card">
        <table className="transfer-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map(req => (
              <tr key={req.id}>
                <td>{req.empId}</td>
                <td>{req.name}</td>
                <td>{req.from}</td>
                <td>{req.to}</td>
                <td>{req.status}</td>
                <td>
                  {req.status === "Pending" ? (
                    <>
                      <button
                        className="btn approve"
                        onClick={() => updateStatus(req.id, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="btn reject"
                        onClick={() => updateStatus(req.id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  ) : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transfers;
