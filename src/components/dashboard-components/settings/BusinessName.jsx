import React, { useState } from 'react';

const BusinessName = () => {
  const [businessName, setBusinessName] = useState('');

  const handleNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-navy font-medium">Business Name</p>
      <input
        type="text"
        className="bg-light py-1 px-3 rounded-md w-96 text-navy placeholder:duration-200 focus:placeholder:opacity-0 focus:outline-none"
        placeholder="Enter a Name"
        value={businessName}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default BusinessName;
