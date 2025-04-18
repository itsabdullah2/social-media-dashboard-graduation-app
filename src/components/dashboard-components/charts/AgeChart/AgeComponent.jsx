import React from "react";
import AgeChart from "./AgeChart";
import { useAppState } from "../../../../context/AppContext";
function AgeComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="flex sm:justify-start">
      <div
        className="p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full"
        style={{
          backgroundColor: isDarkMode
            ? "var(--color-darkBluishGray)"
            : "var(--color-white)",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <AgeChart />
      </div>
    </div>
  );
}

export default AgeComponent;
