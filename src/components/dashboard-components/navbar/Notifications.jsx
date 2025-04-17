import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useAppState } from '../../../context/AppContext';

const Notifications = () => {
  const { isDarkMode } = useAppState();

  return (
    <div className="relative">
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
      <IoMdNotificationsOutline
        size={25}
        className={`${isDarkMode ? 'text-white' : 'text-navy'}`}
      />
    </div>
  );
};

export default Notifications;
