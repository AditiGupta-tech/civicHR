import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Attendance from "./pages/admin/Attendance";
import Leave from "./pages/admin/Leave";
import Transfers from "./pages/admin/transfers";
import Payroll from "./pages/admin/payroll";

const App = () => {
  return (
    <Routes>
      {/* Redirect root to admin dashboard */}
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leave" element={<Leave />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path="payroll" element={<Payroll />} />
      </Route>
    </Routes>
  );
};

export default App;
