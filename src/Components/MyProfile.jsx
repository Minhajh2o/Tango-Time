import React, { useContext } from 'react';
import { Link } from 'react-router';
import { FaUser, FaEnvelope, FaEdit, FaImage } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">
            Welcome, <span className="text-primary">{user?.displayName || 'User'}!</span>
          </h1>
          <p className="text-lg text-gray-500">
            Manage your profile information
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} />
                    ) : (
                      <div className="bg-primary text-primary-content flex items-center justify-center w-full h-full">
                        <FaUser className="text-5xl" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Profile Information */}
              <div className="space-y-6">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <FaUser className="text-primary" />
                      Full Name
                    </span>
                  </label>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <p className="text-gray-300 text-lg">
                      {user?.displayName || 'Not provided'}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <FaEnvelope className="text-primary" />
                      Email Address
                    </span>
                  </label>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <p className="text-gray-300 text-lg">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Photo URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <FaImage className="text-primary" />
                      Profile Photo URL
                    </span>
                  </label>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <p className="text-gray-300 text-sm break-all">
                      {user?.photoURL || 'No photo URL provided'}
                    </p>
                  </div>
                </div>

                {/* Account Status */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Account Status
                    </span>
                  </label>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-success badge-lg">Active</span>
                      {user?.emailVerified && (
                        <span className="badge badge-info badge-lg">Email Verified</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-actions justify-center mt-8 gap-4">
                <Link to="/update-profile" className="btn btn-primary btn-lg gap-2">
                  <FaEdit />
                  Update Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="card bg-base-100 shadow-lg mt-6">
            <div className="card-body p-6">
              <h3 className="font-semibold text-lg mb-3">Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Account Created</p>
                  <p className="font-semibold">
                    {user?.metadata?.creationTime 
                      ? new Date(user.metadata.creationTime).toLocaleDateString()
                      : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Last Sign In</p>
                  <p className="font-semibold">
                    {user?.metadata?.lastSignInTime 
                      ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                      : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">User ID</p>
                  <p className="font-semibold text-xs break-all">{user?.uid}</p>
                </div>
                <div>
                  <p className="text-gray-500">Provider</p>
                  <p className="font-semibold">
                    {user?.providerData?.[0]?.providerId === 'google.com' ? 'Google' : 'Email/Password'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
