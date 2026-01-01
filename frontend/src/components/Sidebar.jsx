import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/attendance">Attendance</NavLink></li>
        <li><NavLink to="/admin/leave">Leave</NavLink></li>
        <li><NavLink to="/admin/transfers">Transfers</NavLink></li>
        <li><NavLink to="/admin/payroll">Payroll</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
