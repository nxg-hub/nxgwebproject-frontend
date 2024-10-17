// src/Dashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./routes/Profile/profile";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
