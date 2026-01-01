import "../../styles/AdminDashboard.css";

const Dashboard = () => {
  return (
    <div className="page">
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Employees</h3>
          <p>1,240</p>
        </div>

        <div className="card">
          <h3>Present Today</h3>
          <p>1,110</p>
        </div>

        <div className="card">
          <h3>On Leave</h3>
          <p>86</p>
        </div>

        <div className="card">
          <h3>Payroll Processed</h3>
          <p>₹ 4.8 Cr</p>
        </div>
      </div>

      <div className="analytics">
  {/* Attendance Trend */}
  <div className="analytics-box">
    <div className="chart">
      <div className="bar" style={{ height: "70%" }}><span>Mon</span></div>
      <div className="bar" style={{ height: "85%" }}><span>Tue</span></div>
      <div className="bar" style={{ height: "80%" }}><span>Wed</span></div>
      <div className="bar" style={{ height: "90%" }}><span>Thu</span></div>
      <div className="bar" style={{ height: "75%" }}><span>Fri</span></div>
    </div>
  </div>

  {/* Leave Analysis */}
  <div className="analytics-box">
    <div className="leave-bars">
      <div className="leave-item">
        <div className="leave-label">Casual Leave</div>
        <div className="leave-bar">
          <div className="leave-fill" style={{ width: "60%" }}></div>
        </div>
      </div>

      <div className="leave-item">
        <div className="leave-label">Sick Leave</div>
        <div className="leave-bar">
          <div className="leave-fill" style={{ width: "40%" }}></div>
        </div>
      </div>

      <div className="leave-item">
        <div className="leave-label">Earned Leave</div>
        <div className="leave-bar">
          <div className="leave-fill" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div></div>
  );
};

export default Dashboard;
