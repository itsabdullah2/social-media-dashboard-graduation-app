import React from 'react';
import { LuSearch } from 'react-icons/lu';
import { useAppState } from '../../../context/AppContext';

const SearchBar = () => {
  const { isDarkMode } = useAppState();

  return (
    <div
      className={`flex items-center gap-2 w-96 py-2 px-4 rounded-full ${
        isDarkMode ? 'bg-darkBluishGray' : 'bg-white'
      }`}
    >
      <LuSearch
        size={22}
        className={`${isDarkMode ? 'text-white' : 'text-navy'}`}
      />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className={`w-full outline-none focus:placeholder:opacity-0 placeholder:duration-300 ${
          isDarkMode ? 'text-white' : 'text-navy'
        }`}
      />
    </div>
  );
};

export default SearchBar;
