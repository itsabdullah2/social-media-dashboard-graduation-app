import React, { useState, useRef, useEffect } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { useAppState } from '../../../context/AppContext';
import { signOut } from '../../../supabase/S_auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import { capitalizeFirstLetter } from '../../../utils/transformFirstLetter';

const Avatar = ({ dashboard }) => {
  const { isDarkMode, username, avatar } = useAppState();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const authenticatedUsername = user?.user_metadata?.username;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleDropdownMenu}
        className="flex items-center gap-2 p-2 rounded-md transition-colors cursor-pointer hover:bg-blueberry/10 duration-150"
      >
        <img
          src={avatar || 'https://i.pravatar.cc/100?img=3'}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span
          className={`text-sm font-medium hidden lg:block first-letter:uppercase ${
            isDarkMode ? 'text-white' : 'text-navy'
          }`}
        >
          {capitalizeFirstLetter(username) ||
            capitalizeFirstLetter(authenticatedUsername)}
        </span>
        <LuChevronDown
          className={`text-lg transition-transform text-navy hidden lg:block ${
            open ? 'rotate-180' : ''
          } ${isDarkMode ? 'text-white' : 'text-navy'}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-light rounded-md shadow-lg z-20">
          <div className="px-4 py-3 border-b border-gray-100 flex flex-col gap-2">
            <p className="text-sm font-medium text-navy">
              {capitalizeFirstLetter(username) ||
                capitalizeFirstLetter(authenticatedUsername)}
            </p>
            {dashboard && (
              <Link
                to="/dashboard"
                className="text-sm font-medium text-navy hover:bg-cyan/10 py-1 duration-200"
              >
                Dashboard
              </Link>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
