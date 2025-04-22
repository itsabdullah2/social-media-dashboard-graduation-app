import React from 'react';
import ChartOverview from './ChartOverview';
import { useAppState } from '../../../../context/AppContext';

function OverviewComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="">
      <div
        className=" p-4 rounded-xl shadow-md h-full  sm:w-full"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--color-darkBluishGray)'
            : 'var(--color-white)',
          color: isDarkMode ? 'var(--color-white)' : '#000000',
        }}
      >
        <ChartOverview />
      </div>
    </div>
  );
}

export default OverviewComponent;
