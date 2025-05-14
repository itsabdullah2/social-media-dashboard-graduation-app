import { useAppState } from "../../../context/AppContext";
import React from "react";

const Username = () => {
  const { isDarkMode, tempName, setTempName, username } = useAppState();

  // Initialize tempName with current username if not set
  React.useEffect(() => {
    if (!tempName && username) {
      setTempName(username);
    }
  }, [username, tempName, setTempName]);

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-small font-medium ${
          isDarkMode ? "text-light" : "text-navy"
        }`}
      >
        Business Name
      </label>
      <input
        type="text"
        value={tempName || username || ""}
        onChange={(e) => setTempName(e.target.value)}
        className={`text-small rounded-md border ${
          isDarkMode
            ? "bg-darkBluishGray border-white/10 text-light"
            : "bg-white border-navy/10 text-navy"
        } px-4 py-2 focus:outline-none focus:border-blueberry`}
        placeholder="Enter your business name"
      />
    </div>
  );
};

export default Username;
