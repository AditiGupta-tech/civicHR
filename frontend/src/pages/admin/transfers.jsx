import "../../styles/transfers.css";
const Transfers = () => {
  return (
   <div className="transfer-page">
  <h1>Transfer Management</h1>

  <div className="transfer-table-container">
    <table className="transfer-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Current Department</th>
          <th>New Department</th>
          <th>Location</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>EMP001</td>
          <td>Rahul Sharma</td>
          <td>Sanitation</td>
          <td>Waste Management</td>
          <td>North Zone</td>
          <td>Pending</td>
          <td>
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </td>
        </tr>

        <tr>
          <td>EMP002</td>
          <td>Anita Verma</td>
          <td>Clerical</td>
          <td>Accounts</td>
          <td>Central Zone</td>
          <td>Approved</td>
          <td>-</td>
        </tr>

        <tr>
          <td>EMP003</td>
          <td>Sunil Kumar</td>
          <td>Maintenance</td>
          <td>Electrical</td>
          <td>South Zone</td>
          <td>Rejected</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Transfers;
