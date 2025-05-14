import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppState } from "../../context/AppContext";
import { signInWithEmail } from "../../supabase/S_auth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [uiState, setUiState] = useState({
    showPassword: false,
    loading: false
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { isDarkMode } = useAppState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePassword = () => {
    setUiState(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUiState(prev => ({ ...prev, loading: true }));
    setErrors([]);

    try {
      await signInWithEmail(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setErrors([err.message || "Failed to sign in. Please check your credentials."]);
    } finally {
      setUiState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-navy" : "bg-light"
      } flex items-center justify-center p-4`}
    >
      <div
        className={`w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 ${
          isDarkMode ? "bg-darkBluishGray" : "bg-white"
        } rounded-3xl overflow-hidden`}
      >
        <div className="relative p-8 bg-gradient-to-br from-purple via-blueberry to-cyan rounded-3xl m-4">
          <div className="absolute top-4 left-8 text-xs text-white/80">
            A WISE QUOTE
          </div>
          <div className="h-full flex flex-col justify-end">
            <h1 className="text-large md:text-5xl font-serif text-white mb-4">
              Get Everything You Want
            </h1>
            <p className="text-white/80 text-sm">
              You can get everything you want if you work hard, trust the
              process, and stick to the plan.
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h2
              className={`text-large ${
                isDarkMode ? "text-white" : "text-navy"
              } mb-2`}
            >
              Welcome Back
            </h2>
            <p className="text-gray-400 mb-8">
              Enter your email and password to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`flex items-center text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-navy"
                  } mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${
                    isDarkMode ? "bg-navy" : "bg-light"
                  } rounded-lg ${
                    isDarkMode ? "text-white" : "text-navy"
                  } focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  className={`flex items-center text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-navy"
                  } mb-2`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={uiState.showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? "bg-navy" : "bg-light"
                    } rounded-lg ${
                      isDarkMode ? "text-white" : "text-navy"
                    } focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className={`absolute top-1/2 right-2 -translate-y-1/2 ${
                      isDarkMode
                        ? "text-light/80 hover:text-light"
                        : "text-navy/80 hover:text-navy"
                    }`}
                  >
                    {uiState.showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" />
                  <span
                    className={`ml-2 text-sm ${
                      isDarkMode ? "text-white" : "text-navy"
                    }`}
                  >
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-purple/80 hover:text-purple"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={uiState.loading}
                className={`w-full bg-blueberry/80 text-white py-3 rounded-lg font-medium hover:bg-blueberry duration-200 cursor-pointer ${
                  uiState.loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {uiState.loading ? "Signing In..." : "Sign In"}
              </button>

              {errors.length > 0 && errors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm text-center">{error}</p>
              ))}

              <button
                type="button"
                className={`w-full ${
                  isDarkMode ? "bg-light/20 text-light" : "bg-cyan/10 text-navy"
                } text-light hover:text-navy py-3 rounded-lg font-medium hover:bg-light duration-200 flex items-center justify-center cursor-pointer`}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Sign in with Google
              </button>
            </form>

            <p className="text-center mt-6 text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple/80 hover:text-purple">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
