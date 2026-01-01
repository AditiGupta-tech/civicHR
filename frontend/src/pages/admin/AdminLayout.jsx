import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Top Navbar */}
      <Navbar />

      {/* Body Section */}
      <div className="admin-body">
        {/* Left Sidebar */}
        <Sidebar role="admin" />

        {/* Main Content */}
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
