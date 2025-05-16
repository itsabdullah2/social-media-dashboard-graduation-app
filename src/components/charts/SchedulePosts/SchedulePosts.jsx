import React from 'react';
import { useAppState } from '../../../context/AppContext';

function SchedulePosts() {
  const { isDarkMode } = useAppState();
  return (
    <div>
      <div
        className="p-4 rounded-xl shadow-md h-[300px] w-full"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--color-darkBluishGray)'
            : 'var(--color-white)',
          color: isDarkMode ? 'var(--color-white)' : '#000000',
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Scheduled posts</h2>
          <span
            className="text-sm cursor-pointer"
            style={{
              color: isDarkMode ? 'var(--color-white)' : '#000000',
            }}
          >
            Month ▼
          </span>
        </div>

        <div className="text-sm">
          <div className="flex justify-between py-2 border-b border-gray-300">
            <span>Name</span>
            <span
              className=""
              style={{
                color: isDarkMode ? 'var(--color-white)' : '#000000',
              }}
            >
              Date
            </span>
          </div>
          <div className="flex justify-between py-2 border-b  border-gray-300">
            <span>
              Learning New Languages: <br /> tips and tricks for fluency
            </span>
            <span
              className="self-end"
              style={{
                color: isDarkMode ? 'var(--color-white)' : '#000000',
              }}
            >
              May 29th
            </span>
          </div>
          <div className="flex justify-between py-2 border-b  border-gray-300">
            <span>
              The Evolution of Language: <br /> how words change and dissapear
              over time
            </span>
            <span
              className="self-end"
              style={{
                color: isDarkMode ? 'var(--color-white)' : '#000000',
              }}
            >
              June 5th
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span>
              Behind the Scenes: How your favorite <br /> TV Shows and movies
              are made
            </span>
            <span
              className="self-end"
              style={{
                color: isDarkMode ? 'var(--color-white)' : '#000000',
              }}
            >
              June 26th
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulePosts;
