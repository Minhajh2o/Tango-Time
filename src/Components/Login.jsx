import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await signInUser(formData.email, formData.password);
      toast.success('Successfully logged in!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setErrors({ password: 'Invalid email or password' });
        toast.error('Invalid email or password');
      } else if (error.code === 'auth/too-many-requests') {
        setErrors({ password: 'Too many failed attempts. Please try again later.' });
        toast.error('Too many failed attempts. Please try again later.');
      } else {
        setErrors({ password: 'An error occurred. Please try again.' });
        toast.error('Login failed. Please try again.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Successfully logged in with Google!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setErrors({ password: 'Google sign-in failed. Please try again.' });
      toast.error('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-600">
            Sign in to continue your Japanese learning journey
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`input input-bordered w-full pl-10 ${errors.email ? 'input-error' : ''}`}
                  />
                </div>
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.email}</span>
                  </label>
                )}
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`input input-bordered w-full pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.password}</span>
                  </label>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                  <span className="label-text">Remember me</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  state={{ email: formData.email }}
                  className="label-text-alt link link-primary"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Social Login Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="btn btn-outline w-full"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="link link-primary font-semibold">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="link link-primary">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
