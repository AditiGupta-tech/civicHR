import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/attendance"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Attendance
      </NavLink>

      <NavLink
        to="/admin/leave"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Leave
      </NavLink>

      <NavLink
        to="/admin/transfers"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Transfers
      </NavLink>

      <NavLink
        to="/admin/payroll"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Payroll
      </NavLink>

      <NavLink
        to="/admin/analytics"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Analytics
      </NavLink>
    </div>
  );
};

export default Sidebar;
