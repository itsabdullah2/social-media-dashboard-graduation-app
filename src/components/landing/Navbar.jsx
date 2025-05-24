import { Link } from 'react-router-dom';
import { LuMoon, LuSunMedium } from 'react-icons/lu';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useAppState } from '../../context/AppContext';
import { useAuth } from '../../context/AuthProvider';
import Avatar from '../dashboard-components/navbar/Avatar';
import { capitalizeFirstLetter } from '../../utils/transformFirstLetter';
import { signOut } from '../../supabase/S_auth';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, avatar, username } = useAppState();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authenticatedUsername = user?.user_metadata?.username;

  const navItems = [
    {
      label: 'Features',
      path: '#features',
    },
    {
      label: 'Testimonials',
      path: '#testimonials',
    },
    {
      label: 'Pricing',
      path: '#pricing',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? 'bg-navy shadow-gray-800' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h2
            className={`ml-2 text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            TrendTrack
          </h2>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`p-2 rounded-md cursor-pointer ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className={`${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 cursor-pointer ${
                isDarkMode
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <LuSunMedium size={18} /> : <LuMoon size={18} />}
            </button>
            {user ? (
              <Avatar dashboard />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/signin"
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    isDarkMode
                      ? 'text-white bg-gray-800 hover:bg-gray-700'
                      : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-white px-4 py-2 rounded-md text-sm font-medium bg-blueberry/80 hover:bg-blueberry transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 border-b border-blueberry mx-2 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode
                    ? 'text-white hover:bg-gray-800'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            {user ? (
              <>
                <div className="flex flex-col items-start gap-4 px-3 pt-5 border-t border-gray-100">
                  <Link to="/dashboard" className="flex items-center gap-3">
                    <img
                      src={avatar || 'https://i.pravatar.cc/100?img=3'}
                      alt="profile image"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-navy'
                      }`}
                    >
                      {capitalizeFirstLetter(username) ||
                        capitalizeFirstLetter(authenticatedUsername)}
                    </p>
                  </Link>
                </div>
                <button
                  className="w-full px-4 py-2 text-center text-sm text-red-600 bg-red-50 hover:bg-red-100 cursor-pointer duration-200 mt-4 rounded-md"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center justify-between mt-4 px-3 py-2">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full cursor-pointer ${
                    isDarkMode
                      ? 'bg-gray-700 text-yellow-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {isDarkMode ? (
                    <LuSunMedium size={18} />
                  ) : (
                    <LuMoon size={18} />
                  )}
                </button>
                <div className="flex space-x-2">
                  <Link
                    to="/signin"
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      isDarkMode
                        ? 'text-white bg-gray-800 hover:bg-gray-700 border border-blueberry'
                        : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium bg-blueberry hover:bg-blueberry"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
