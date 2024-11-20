import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/nxg-logo.png";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const sideBarItems = [
    {
      path: "/admin/dashboard",
      name: "Elite Users",
    },
    {
      path: "/admin/partialUsers",
      name: "Partial Users",
    },
    {
      path: "/admin/scholarship",
      name: "Scholarship Users",
    },
    {
      path: "/admin/trainng-information",
      name: "Training Update",
    },
  ];
  return (
    <div className="bg-secondary ">
      <nav className="bg-gray-800 w-24 md:w-52 h-screen p-4 text-primary font-bold">
        <div className="mb-5">
          <img className="h-[100px]" src={logo} alt="logo" />
        </div>
        <ul>
          {sideBarItems.map((item, i) => {
            return (
              <li key={i} className="mb-2">
                <Link
                  to={item.path}
                  className={`text-white hover:bg-gray-700 block p-2 rounded`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
