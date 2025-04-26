import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postTime, setPostTime] = useState('');
  const [postImage, setPostImage] = useState(null);

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

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const values = {
    isDarkMode,
    toggleDarkMode,
    isSidebarOpen,
    isPopupOpen,
    posts,
    postTitle,
    postDescription,
    postTime,
    postImage,
    setPosts,
    setPostTitle,
    setPostDescription,
    setPostTime,
    setPostImage,
    setIsDarkMode,
    handleSidebar,
    handleSystemTheme,
    handleOpenPopup,
    handleClosePopup,
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
