import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/nxg-logo.png";

const Sidebar = () => {
  return (
    <div className="bg-secondary ">
      <nav className="bg-gray-800 w-24 md:w-52 h-screen p-4 text-primary font-bold">
        <div className="mb-5">
          <img className="h-[100px]" src={logo} alt="logo" />
        </div>
        <ul>
          <li className="mb-2">
            <Link
              to="/admin/dashboard"
              className="text-white hover:bg-gray-700 block p-2 rounded">
              Elite Users
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/admin/partialUsers"
              className="text-white hover:bg-gray-700 block p-2 rounded">
              Partial Users
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/admin/settings"
              className="text-white hover:bg-gray-700 block p-2 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
