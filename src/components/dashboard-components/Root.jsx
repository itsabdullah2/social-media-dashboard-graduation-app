import React from 'react';
import Sidebar from './Sidebar';
import { useAppState } from '../../context/AppContext';

const Root = ({ children }) => {
  const { isDarkMode } = useAppState();

  return (
    <main className={`flex ${isDarkMode ? 'bg-navy' : 'bg-light'}`}>
      <Sidebar />
      {children}
    </main>
  );
};

export default Root;
