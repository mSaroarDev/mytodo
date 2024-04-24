import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NavbarDashboard />
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div className="ml-0 lg:ml-[250px] p-10 mt-14">{children}</div>
    </>
  );
};

export default DashboardLayout;
