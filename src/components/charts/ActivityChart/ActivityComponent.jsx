import React from 'react';
import ActivityChart from './ActivityChart';
import { useAppState } from '../../../context/AppContext';

function ActivityComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="flex sm:justify-start">
      <div
        className="p-4 rounded-xl shadow-md h-[300px] w-full"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--color-darkBluishGray)'
            : 'var(--color-white)',
          color: isDarkMode ? 'var(--color-white)' : '#000000',
        }}
      >
        <ActivityChart />
      </div>
    </div>
  );
}

export default ActivityComponent;
