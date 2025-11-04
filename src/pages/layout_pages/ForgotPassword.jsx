import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await resetPassword(email);
      
      toast.success('Password reset email sent! Check your inbox.', {
        position: 'top-right',
        autoClose: 5000,
      });
      
      // Redirect to Gmail after a short delay
      setTimeout(() => {
        window.open('https://mail.google.com', '_blank');
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email address');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address');
      } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many requests. Please try again later.');
      } else {
        toast.error('Failed to send reset email. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/login" className="btn btn-ghost">
            <FaArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 px-4">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        {/* Reset Password Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email Address</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>
                <label className="label">
                  <span className="label-text-alt text-gray-500">
                    We'll send a password reset link to this email
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full btn-lg"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="divider">OR</div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Remember your password?{' '}
                <Link to="/login" className="link link-primary font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="card bg-base-100 shadow-lg mt-6">
          <div className="card-body p-6">
            <h3 className="font-semibold text-lg mb-3">What happens next?</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-500">
              <li>We'll send a password reset link to your email</li>
              <li>Check your inbox (and spam folder)</li>
              <li>Click the link in the email</li>
              <li>Create a new password</li>
              <li>Sign in with your new password</li>
            </ol>
          </div>
        </div>

        {/* Security Note */}
        <div className="alert alert-info mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <p className="text-xs">
              For security reasons, the reset link will expire in 1 hour.
              If you don't receive an email, check your spam folder or try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
