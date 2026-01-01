import "../../styles/attendance.css";
const Attendance = () => {
  return (
    <div className="attendance-page">
  <h1>Attendance Management</h1>

  <div className="attendance-filters">
    <input type="date" />
    <select>
      <option>All Status</option>
      <option>Present</option>
      <option>Absent</option>
      <option>On Leave</option>
    </select>
    <button>Filter</button>
  </div>
  <table className="attendance-table">
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Name</th>
      <th>Status</th>
      <th>Check-in Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EMP001</td>
      <td>Rahul Sharma</td>
      <td>Present</td>
      <td>Face Recognition</td>
    </tr>
    <tr>
      <td>EMP002</td>
      <td>Anita Verma</td>
      <td>On Leave</td>
      <td>-</td>
    </tr>
    <tr>
      <td>EMP003</td>
      <td>Sunil Kumar</td>
      <td>Absent</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

</div>

  );
};

export default Attendance;
