import React, { useEffect, useState } from "react";
import { useAppState } from "../../../context/AppContext";

const BusinessName = () => {
  const { isDarkMode, tempName, setTempName, businessName } = useAppState();

  useEffect(() => {
    setTempName(businessName);
  }, [businessName]);

  const handleNameChange = (e) => {
    setTempName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className={`${isDarkMode ? "text-white" : "text-navy"} font-medium`}>
        Business Name
      </p>
      <input
        type="text"
        className="bg-light py-1 px-3 rounded-md w-96 text-navy placeholder:duration-200 focus:placeholder:opacity-0 focus:outline-none"
        placeholder="Enter a Name"
        value={tempName}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default BusinessName;
