import React from "react";
import GenderChart from "./GenderChart";
import { useAppState } from "../../../../context/AppContext";

function GenderComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="flex sm:justify-start">
      <div
        className="p-4 rounded-xl shadow-md h-full w-[300px] sm:w-full"
        style={{
          backgroundColor: isDarkMode
            ? "var(--color-darkBluishGray)"
            : "var(--color-white)",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <GenderChart />
      </div>
    </div>
  );
}

export default GenderComponent;
