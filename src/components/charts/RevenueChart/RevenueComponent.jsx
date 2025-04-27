import React from 'react';
import RevenueChart from './RevenueChart';
import { useAppState } from '../../../context/AppContext';

function RevenueComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="xl:col-span-3">
      <div
        className="p-4 rounded-xl shadow-md h-[400px] w-full"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--color-darkBluishGray)'
            : 'var(--color-white)',
          color: isDarkMode ? 'var(--color-white)' : '#000000',
        }}
      >
        <RevenueChart />
      </div>
    </div>
  );
}

export default RevenueComponent;
