import React from "react";
import AdminNav from "./AdminNav";
import Sidebar from "./Sidebar";
import "../../Styles/DashboardLayout.css";
import DashboardRoutes from "./DashboardRoutes";

function DashboardLayout() {
  return (
    <div className="admin-layout">
      <AdminNav />
      <Sidebar />
      <main className="admin-main-content">
        <DashboardRoutes />
      </main>
    </div>
  );
}

export default DashboardLayout;
