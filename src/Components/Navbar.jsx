import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaHome, FaBook, FaGraduationCap, FaInfoCircle, FaUser, FaSignOutAlt, FaEdit } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success('Successfully logged out!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Logout failed. Please try again.');
    }
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
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        {!user ? (
          <>
            {/* Login and Register Buttons for non-authenticated users */}
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            {/* User Profile Dropdown for authenticated users */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.name} className="rounded-full" />
                  ) : (
                    <FaUser />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="menu-title">
                  <span>{user?.displayName || user?.email}</span>
                </li>
                <li>
                  <Link to="/my-profile">
                    <FaUser className="mr-2" />
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/update-profile">
                    <FaEdit className="mr-2" />
                    Update Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
