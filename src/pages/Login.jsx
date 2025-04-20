import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] rounded-3xl overflow-hidden">
        {/* Left side - Motivational Quote */}
        <div className="relative p-8 bg-gradient-to-br from-fuchsia-600 via-purple-700 to-blue-700 rounded-3xl m-4">
          <div className="absolute top-4 left-4 text-xs text-white/80">A WISE QUOTE</div>
          <div className="h-full flex flex-col justify-end">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Get Everything You Want
            </h1>
            <p className="text-white/80 text-sm">
              You can get everything you want if you work hard, trust the process, and stick to the plan.
            </p>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="p-8 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-serif text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400 mb-8">Enter your email and password to access your account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white border-0 focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-[#2a2a2a] border-0 text-purple-500 focus:ring-purple-500" />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2a2a2a] text-white py-3 rounded-lg font-medium hover:bg-[#3a3a3a] transition duration-200"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-200 flex items-center justify-center"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                Sign in with Google
              </button>
            </form>

            <p className="text-center mt-6 text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-400 hover:text-purple-300">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;