import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import "../../styles/Analytics.css";

const attendanceData = [
  { day: "Mon", present: 980 },
  { day: "Tue", present: 1020 },
  { day: "Wed", present: 1100 },
  { day: "Thu", present: 1080 },
  { day: "Fri", present: 1120 },
];

const leaveData = [
  { name: "Casual", value: 40 },
  { name: "Sick", value: 25 },
  { name: "Earned", value: 21 },
];

const payrollData = [
  { month: "Jan", issues: 2 },
  { month: "Feb", issues: 5 },
  { month: "Mar", issues: 1 },
];

const departmentData = [
  { dept: "IT", count: 320 },
  { dept: "HR", count: 120 },
  { dept: "Finance", count: 180 },
  { dept: "Operations", count: 420 },
];

const COLORS = ["#4f46e5", "#22c55e", "#f97316"];

const Analytics = () => {
  return (
    <div className="page analytics-container">
      <h1>Workforce Analytics</h1>

      <div className="analytics-grid">
        {/* Attendance Trend */}
        <div className="analytics-card">
          <h3>Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="present"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Leave Forecast */}
        <div className="analytics-card">
          <h3>Leave Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={leaveData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {leaveData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Payroll Anomalies */}
        <div className="analytics-card">
          <h3>Payroll Anomalies</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={payrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="issues" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department-wise Insights */}
        <div className="analytics-card">
          <h3>Department-wise Headcount</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentData}>
              <XAxis dataKey="dept" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
