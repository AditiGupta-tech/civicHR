import "../../styles/adminDashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p className="dashboard-subtitle">
        Overview of workforce, attendance, payroll, and system insights.
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <p className="card-number">245</p>
        </div>

        <div className="dashboard-card">
          <h3>Present Today</h3>
          <p className="card-number">198</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Leave Requests</h3>
          <p className="card-number">12</p>
        </div>

        <div className="dashboard-card">
          <h3>Monthly Payroll</h3>
          <p className="card-number">₹ 38.5 L</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
