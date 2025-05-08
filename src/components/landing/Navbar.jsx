import { Link } from "react-router-dom";
import { LuMoon, LuSunMedium } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useAppState } from "../../context/AppContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useAppState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Features",
      path: "#features",
    },
    {
      label: "Testimonials",
      path: "#testimonials",
    },
    {
      label: "Pricing",
      path: "#pricing",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? "bg-navy shadow-gray-800" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name */}
          <h2
            className={`ml-2 text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            TrendTrack
          </h2>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Dark mode toggle and sign in/up buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <LuSunMedium size={18} /> : <LuMoon size={18} />}
            </button>
            <Link
              to="/signin"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isDarkMode
                  ? "text-white bg-gray-800 hover:bg-gray-700"
                  : "text-gray-900 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-white px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? "bg-navy" : "bg-white"}`}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4 px-3 py-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {isDarkMode ? <LuSunMedium size={18} /> : <LuMoon size={18} />}
              </button>
              <div className="flex space-x-2">
                <Link
                  to="/signin"
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    isDarkMode
                      ? "text-white bg-gray-800 hover:bg-gray-700"
                      : "text-gray-900 bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
