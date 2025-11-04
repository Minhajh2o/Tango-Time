import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaEye, FaEyeSlash, FaCheckCircle, FaImage } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
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
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = 'Password must have a lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Password must have an uppercase letter';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
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
      // Create user
      await createUser(formData.email, formData.password);
      
      // Update profile with name and photo
      await updateUserProfile(formData.name, formData.photoURL || null);
      
      toast.success('Account created successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        setErrors({ email: 'This email is already registered' });
        toast.error('This email is already registered');
      } else if (error.code === 'auth/weak-password') {
        setErrors({ password: 'Password is too weak' });
        toast.error('Password is too weak');
      } else {
        setErrors({ password: 'Registration failed. Please try again.' });
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Account created successfully with Google!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setErrors({ password: 'Google sign-up failed. Please try again.' });
      toast.error('Google sign-up failed. Please try again.');
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/(?=.*[a-z])(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[!@#$%^&*])/.test(password)) strength++;
    
    if (strength <= 2) return { strength, label: 'Weak', color: 'bg-error' };
    if (strength <= 3) return { strength, label: 'Fair', color: 'bg-warning' };
    if (strength <= 4) return { strength, label: 'Good', color: 'bg-info' };
    return { strength, label: 'Strong', color: 'bg-success' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-6 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Join TangoTime and start your Japanese learning adventure
          </p>
        </div>

        {/* Registration Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`input input-bordered w-full pl-10 ${errors.name ? 'input-error' : ''}`}
                  />
                </div>
                {errors.name && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.name}</span>
                  </label>
                )}
              </div>

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

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                  <span className="label-text-alt text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaImage className="text-gray-400" />
                  </div>
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="Enter your photo URL"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
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
                    placeholder="Create a strong password"
                    className={`input input-bordered w-full pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-500" />
                    )}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Password strength:</span>
                      <span className={`text-xs font-semibold ${
                        passwordStrength.strength <= 2 ? 'text-error' :
                        passwordStrength.strength <= 3 ? 'text-warning' :
                        passwordStrength.strength <= 4 ? 'text-info' : 'text-success'
                      }`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded ${
                            i < passwordStrength.strength ? passwordStrength.color : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.password}</span>
                  </label>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={`input input-bordered w-full pl-10 pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-500" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-success flex items-center gap-1">
                      <FaCheckCircle /> Passwords match
                    </span>
                  </label>
                )}
                {errors.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.confirmPassword}</span>
                  </label>
                )}
              </div>

              {/* Terms Acceptance */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className={`checkbox checkbox-primary checkbox-sm ${errors.acceptTerms ? 'checkbox-error' : ''}`}
                  />
                  <span className="label-text">
                    I agree to the{' '}
                    <Link to="/terms" className="link link-primary">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
                  </span>
                </label>
                {errors.acceptTerms && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.acceptTerms}</span>
                  </label>
                )}
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
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Social Signup Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleGoogleSignup}
                disabled={isLoading}
                className="btn btn-outline w-full"
              >
                <FaGoogle className="text-red-500" />
                Sign up with Google
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="link link-primary font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-6 card bg-base-100 shadow-lg">
          <div className="card-body p-4">
            <h3 className="font-semibold text-sm mb-2">Why join TangoTime?</h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success" />
                Access to 5000+ Japanese vocabulary words
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success" />
                Interactive lessons and quizzes
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success" />
                Track your progress with detailed analytics
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success" />
                Join a community of learners
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
