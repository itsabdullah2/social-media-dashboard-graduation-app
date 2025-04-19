import React, { useEffect, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useAppState } from '../../../context/AppContext';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDarkMode } = useAppState();

  const handleSearchBar = () => {
    if (window.innerWidth < 1024) {
      setIsSearchOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSearchOpen(false); // reset state on large screens
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:w-74 2xl:w-96 py-1 px-2 lg:py-2 lg:px-4 rounded-full ${
        isDarkMode
          ? 'bg-transparent lg:bg-darkBluishGray'
          : 'bg-transparent lg:bg-white'
      } relative`}
    >
      <button
        className={`${
          isDarkMode ? 'text-white' : 'text-navy'
        } cursor-pointer lg:hidden`}
        onClick={handleSearchBar}
      >
        <LuSearch size={22} />
      </button>
      <LuSearch size={22} className="hidden lg:block" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className={`outline-none focus:placeholder:opacity-0 placeholder:duration-300 ${
          isDarkMode ? 'text-white' : 'text-navy'
        } ${
          isSearchOpen ? 'block' : 'hidden'
        } bg-white xl:bg-transparent py-2 px-4 lg:py-0 lg:px-0 rounded-full lg:rounded-none absolute lg:static -bottom-12 left-3 w-72 lg:w-full lg:block`}
      />
    </div>
  );
};

export default SearchBar;
