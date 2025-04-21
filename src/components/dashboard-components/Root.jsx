import React from 'react';
import Sidebar from './Sidebar';
import { useAppState } from '../../context/AppContext';

const Root = ({ children }) => {
  const { isDarkMode, isPopupOpen } = useAppState();

  return (
    <main
      className={`flex min-h-screen overflow-hidden ${
        isDarkMode ? 'bg-navy' : 'bg-light'
      } relative`}
    >
      {isPopupOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[20]" />
      )}
      <Sidebar />
      {children}
    </main>
  );
};

export default Root;
