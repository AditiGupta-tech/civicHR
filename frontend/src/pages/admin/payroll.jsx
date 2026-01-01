import "../../styles/payroll.css";
const Payroll = () => {
  return (
   <div className="payroll-page">
  <h1>Payroll Management</h1>

  <div className="payroll-table-container">
    <table className="payroll-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Days Worked</th>
          <th>Leaves</th>
          <th>Net Salary (₹)</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>EMP001</td>
          <td>Rahul Sharma</td>
          <td>22</td>
          <td>2</td>
          <td>28,500</td>
          <td>Generated</td>
          <td>
            <button className="download-btn">Download</button>
          </td>
        </tr>

        <tr>
          <td>EMP002</td>
          <td>Anita Verma</td>
          <td>20</td>
          <td>4</td>
          <td>25,000</td>
          <td>Pending</td>
          <td>-</td>
        </tr>

        <tr>
          <td>EMP003</td>
          <td>Sunil Kumar</td>
          <td>18</td>
          <td>6</td>
          <td>22,000</td>
          <td>Generated</td>
          <td>
            <button className="download-btn">Download</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Payroll;
