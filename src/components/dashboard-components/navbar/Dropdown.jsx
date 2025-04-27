import React, { useState, useRef, useEffect } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Using simple icons for "X" logo
import { useAppState } from '../../../context/AppContext';

const Dropdown = () => {
  const { isDarkMode } = useAppState();
  const [selected, setSelected] = useState('YouTube');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { name: 'YouTube', icon: <FaYoutube className="text-red-600" /> },
    { name: 'Facebook', icon: <FaFacebook className="text-blue-600" /> },
    { name: 'X', icon: <SiX className="text-black" /> },
    { name: 'Instagram', icon: <FaInstagram className="text-pink-500" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option.name);
    setOpen(false);
  };

  const handleDropdownMenu = () => {
    setOpen((prev) => !prev);
  };

  const selectedOption = options.find((opt) => opt.name === selected);

  return (
    <div className="relative w-32 lg:w-40 xl:w-48" ref={dropdownRef}>
      <button
        onClick={handleDropdownMenu}
        className={`w-full px-4 py-2 text-left hover:bg-blueberry/10 rounded-md duration-150 focus:outline-none flex items-center justify-between cursor-pointer ${
          isDarkMode ? 'text-white' : 'text-navy'
        }`}
      >
        <span className="flex items-center gap-2">
          {selectedOption.icon}
          {selectedOption.name}
        </span>
        <LuChevronDown
          className={`ml-2 transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-light rounded-md shadow-md">
          {options.map((option) => (
            <li
              key={option.name}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-cyan/10 text-navy flex items-center gap-2 ${
                selected === option.name ? 'bg-cyan/10 font-medium' : ''
              }`}
            >
              {option.icon}
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
