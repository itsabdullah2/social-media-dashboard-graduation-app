import { Link } from 'react-router-dom';
import { BarChart3, Moon, Sun } from 'lucide-react';
import { useAppState } from '../../context/AppContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useAppState();
  
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

  return (
    <nav className={`${isDarkMode ? 'bg-navy shadow-gray-800' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name */}
          <div className="flex-shrink-0 flex items-center">
            <BarChart3 className={`h-8 w-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className={`ml-2 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TrendTrack</span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item, i) => (
              <a 
                key={i}
                href={item.path} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} px-3 py-2 text-sm font-medium`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Dark mode toggle and sign in/up buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/signin"
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} px-3 py-2 text-sm font-medium`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`${isDarkMode ? 'bg-purple-600' : 'bg-purple-600'} text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
