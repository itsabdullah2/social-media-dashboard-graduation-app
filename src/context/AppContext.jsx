import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const values = {
    isDarkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppState must use within an AppProvider');
  }

  return context;
};
