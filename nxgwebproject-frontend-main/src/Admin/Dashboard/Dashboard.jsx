// src/Dashboard.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p- ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
