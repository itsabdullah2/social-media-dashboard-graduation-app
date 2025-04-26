import React from 'react';

const AccountState = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button className="font-medium rounded-md py-2 px-6 bg-light text-red-600 cursor-pointer">
          Logout
        </button>
        <button className="text-white bg-red-600 font-medium rounded-md py-2 px-6 cursor-pointer">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountState;
