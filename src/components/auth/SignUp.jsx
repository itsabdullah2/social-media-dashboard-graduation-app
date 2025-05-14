import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdMail, IoIosLock } from "react-icons/io";
import { useAppState } from "../../context/AppContext";
import { signUpWithEmail } from "../../supabase/S_auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isDarkMode } = useAppState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signUpWithEmail(email, password, username);
      navigate("/signin");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
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
            <h1
              className={`text-text-large md:text-5xl font-serif text-white mb-4`}
            >
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
              Create Account
            </h2>
            <p className="text-gray-400 mb-8">Join our community today</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`flex items-center text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-navy"
                  } mb-2`}
                >
                  <FaUser className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full px-4 py-3 ${
                    isDarkMode ? "bg-navy" : "bg-light"
                  } rounded-lg ${
                    isDarkMode ? "text-white" : "text-navy"
                  } focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className={`flex items-center text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-navy"
                  } mb-2`}
                >
                  <IoMdMail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  <IoIosLock className="w-4 h-4 mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? "bg-navy" : "bg-light"
                    } rounded-lg ${
                      isDarkMode ? "text-white" : "text-navy"
                    } focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute top-1/2 right-2 -translate-y-1/2 ${
                      isDarkMode
                        ? "text-light/80 hover:text-light"
                        : "text-navy/80 hover:text-navy"
                    }`}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blueberry/80 text-white py-3 rounded-lg font-medium hover:bg-blueberry duration-200 cursor-pointer ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="button"
                className={`w-full ${
                  isDarkMode ? "bg-light/20 text-light" : "bg-cyan/10 text-navy"
                } hover:bg-light hover:text-navy py-3 rounded-lg font-medium duration-200 flex items-center justify-center cursor-pointer`}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Sign up with Google
              </button>
            </form>

            <p className="text-center mt-6 text-gray-400">
              Already have an account?{" "}
              <Link to="/signin" className="text-purple/80 hover:text-purple">
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
