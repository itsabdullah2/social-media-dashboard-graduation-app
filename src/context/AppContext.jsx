import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(systemPrefersDark);
  };

  const values = {
    isDarkMode,
    toggleDarkMode,
    isSidebarOpen,
    setIsDarkMode,
    handleSidebar,
    handleSystemTheme,
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
