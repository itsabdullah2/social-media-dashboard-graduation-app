import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

const SignUp = () => {
  // State variables to store form input values using React's useState hook
  const [email, setEmail] = useState(''); // Stores email input
  const [password, setPassword] = useState(''); // Stores password input
  const [name, setName] = useState(''); // Stores name input
  
  // useNavigate hook from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    navigate('/onboarding'); // Navigates to onboarding page after form submission
  };

  return (
    // Main container with dark background and centering
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      {/* Grid container for the two-column layout */}
      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] rounded-3xl overflow-hidden">
        {/* Left side - Motivational Quote Section */}
        <div className="relative p-8 bg-gradient-to-br from-fuchsia-600 via-purple-700 to-blue-700 rounded-3xl m-4">
          {/* Small label at the top */}
          <div className="absolute top-4 left-4 text-xs text-white/80">A WISE QUOTE</div>
          {/* Quote content container */}
          <div className="h-full flex flex-col justify-end">
            {/* Main heading with serif font */}
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Get Everything You Want
            </h1>
            {/* Subtext with reduced opacity */}
            <p className="text-white/80 text-sm">
              You can get everything you want if you work hard, trust the process, and stick to the plan.
            </p>
          </div>
        </div>

        {/* Right side - Sign Up Form */}
        <div className="p-8 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            {/* Form header section */}
            <h2 className="text-3xl font-serif text-white mb-2">Create Account</h2>
            <p className="text-gray-400 mb-8">Join our community today</p>

            {/* Sign up form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name input field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 mr-2" /> {/* User icon */}
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white border-0 focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email input field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 mr-2" /> {/* Mail icon */}
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white border-0 focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password input field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Lock className="w-4 h-4 mr-2" /> {/* Lock icon */}
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white border-0 focus:ring-2 focus:ring-purple-500"
                  placeholder="Create a password"
                />
              </div>

              {/* Sign Up button */}
              <button
                type="submit"
                className="w-full bg-[#2a2a2a] text-white py-3 rounded-lg font-medium hover:bg-[#3a3a3a] transition duration-200"
              >
                Create Account
              </button>

              {/* Google Sign Up button */}
              <button
                type="button"
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-200 flex items-center justify-center"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                Sign up with Google
              </button>
            </form>

            {/* Login link */}
            <p className="text-center mt-6 text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;