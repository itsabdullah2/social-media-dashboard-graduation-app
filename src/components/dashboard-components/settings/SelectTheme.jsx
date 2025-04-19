import React from 'react';

const SelectTheme = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-navy font-medium">Select Theme</p>
      <div className="flex items-center gap-2">
        <button className={`py-2 px-6 rounded-md bg-light cursor-pointer`}>
          Light Mode
        </button>
        <button className={`py-2 px-6 rounded-md bg-light cursor-pointer`}>
          Dark Mode
        </button>
        <button className={`py-2 px-6 rounded-md bg-light cursor-pointer`}>
          System
        </button>
      </div>
    </div>
  );
};

export default SelectTheme;
