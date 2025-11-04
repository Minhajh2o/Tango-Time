import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaHome, FaBook, FaGraduationCap, FaInfoCircle, FaUser, FaSignOutAlt, FaEdit } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut, updateUserProfile } = useContext(AuthContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    name: '',
    photoURL: ''
  });
  const [isUpdating, setIsUpdating] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const openUpdateModal = () => {
    setUpdateFormData({
      name: user?.displayName || '',
      photoURL: user?.photoURL || ''
    });
    setShowUpdateModal(true);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateUserProfile(updateFormData.name, updateFormData.photoURL);
      setShowUpdateModal(false);
      setIsUpdating(false);
    } catch (error) {
      console.error(error);
      setIsUpdating(false);
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
              About
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
                  <button onClick={openUpdateModal}>
                    <FaEdit className="mr-2" />
                    Update Profile
                  </button>
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

      {/* Update Profile Modal */}
      {showUpdateModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Profile</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={updateFormData.name}
                  onChange={(e) => setUpdateFormData({ ...updateFormData, name: e.target.value })}
                  className="input input-bordered"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  value={updateFormData.photoURL}
                  onChange={(e) => setUpdateFormData({ ...updateFormData, photoURL: e.target.value })}
                  className="input input-bordered"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="btn btn-ghost"
                  disabled={isUpdating}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Updating...
                    </>
                  ) : (
                    'Update'
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="modal-backdrop" onClick={() => setShowUpdateModal(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
