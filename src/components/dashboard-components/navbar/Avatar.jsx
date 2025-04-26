import React, { useState, useRef, useEffect } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { useAppState } from '../../../context/AppContext';
import { signOut } from '../../auth/S_auth';
import { redirect, useNavigate } from 'react-router-dom';

const Avatar = () => {
  const { isDarkMode } = useAppState();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = {
    name: 'Abdullah',
    image: 'https://i.pravatar.cc/100?img=3', // Example avatar
  };

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
          src={user.image}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span
          className={`text-sm font-medium hidden lg:block ${
            isDarkMode ? 'text-white' : 'text-navy'
          }`}
        >
          {user.name}
        </span>
        <LuChevronDown
          className={`text-lg transition-transform text-navy hidden lg:block ${
            open ? 'rotate-180' : ''
          } ${isDarkMode ? 'text-white' : 'text-navy'}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-light rounded-md shadow-lg z-20">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-navy">{user.name}</p>
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
