import "../../styles/leave.css";
const Leave = () => {
  return (
   <div className="leave-page">
  <h1>Leave Management</h1>

  <div className="leave-table-container">
    <table className="leave-table">
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
        <tr>
          <td>EMP001</td>
          <td>Rahul Sharma</td>
          <td>Casual</td>
          <td>2025-01-10</td>
          <td>2025-01-12</td>
          <td>Pending</td>
          <td>
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </td>
        </tr>

        <tr>
          <td>EMP002</td>
          <td>Anita Verma</td>
          <td>Sick</td>
          <td>2025-01-08</td>
          <td>2025-01-08</td>
          <td>Approved</td>
          <td>-</td>
        </tr>

        <tr>
          <td>EMP003</td>
          <td>Sunil Kumar</td>
          <td>Earned</td>
          <td>2025-01-05</td>
          <td>2025-01-09</td>
          <td>Rejected</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Leave;
