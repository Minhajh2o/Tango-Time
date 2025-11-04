import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaUser, FaImage, FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    photoURL: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || '',
        photoURL: user.photoURL || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return;
    }

    setIsLoading(true);
    
    try {
      await updateUserProfile(formData.name, formData.photoURL || null);
      toast.success('Profile updated successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/my-profile');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-8">
          <button
            onClick={() => navigate('/my-profile')}
            className="btn btn-ghost mb-4"
          >
            <FaArrowLeft className="mr-2" />
            Back to Profile
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Update Profile
          </h1>
          <p className="text-lg text-gray-500">
            Update your profile information
          </p>
        </div>

        {/* Update Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              {/* Current Profile Preview */}
              <div className="flex justify-center mb-6">
                <div className="avatar">
                  <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {formData.photoURL ? (
                      <img src={formData.photoURL} alt={formData.name} />
                    ) : (
                      <div className="bg-primary text-primary-content flex items-center justify-center w-full h-full">
                        <FaUser className="text-4xl" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="form-control space-x-4">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <FaUser className="text-primary" />
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered input-lg"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      This will be displayed on your profile
                    </span>
                  </label>
                </div>

                {/* Photo URL Input */}
                <div className="form-control space-x-4">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-2">
                      <FaImage className="text-primary" />
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="https://example.com/photo.jpg"
                    className="input input-bordered input-lg"
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Enter a valid image URL for your profile picture
                    </span>
                  </label>
                </div>

                {/* Current Email (Read-only) */}
                <div className="form-control space-x-4">
                  <label className="label">
                    <span className="label-text font-semibold">Current Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    className="input input-bordered"
                    disabled
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Email cannot be changed
                    </span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end mt-8">
                  <button
                    type="button"
                    onClick={() => navigate('/my-profile')}
                    className="btn btn-ghost btn-lg"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Updating...
                      </>
                    ) : (
                      'Update Information'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tips Card */}
          <div className="alert alert-info mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <h3 className="font-bold">Tips for updating your profile</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Use a clear, professional photo</li>
                <li>Make sure your photo URL is publicly accessible</li>
                <li>Your email is linked to your account and cannot be changed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
