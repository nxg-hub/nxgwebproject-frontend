import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let token = localStorage.getItem("ACCESSTOKEN");

  return token ? <Outlet /> : <Navigate to="/admin" exact />;
};

export default ProtectedRoute;
