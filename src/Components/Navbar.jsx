import React from "react";
import { Link, useLocation } from "react-router";
import { FaHome, FaBook, FaGraduationCap, FaInfoCircle, FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          <FaBook className="mr-2" />
          TangoTime
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to="/" className={isActive("/") ? "active text-primary font-semibold" : "text-gray-500"}>
              <FaHome className="mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/start-learning" className={isActive("/start-learning") ? "active text-primary font-semibold" : "text-gray-500"}>
              <FaGraduationCap className="mr-1" />
              Start Learning
            </Link>
          </li>
          <li>
            <Link to="/tutorial" className={isActive("/tutorial") ? "active text-primary font-semibold" : "text-gray-500"}>
              <FaBook className="mr-1" />
              Tutorial
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active text-primary font-semibold" : "text-gray-500"}>
              <FaInfoCircle className="mr-1" />
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        {/* Login Button */}
        <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link>
        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
              <FaUser />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
