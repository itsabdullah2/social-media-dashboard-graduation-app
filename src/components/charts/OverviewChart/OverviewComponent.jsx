import React from "react";
import ChartOverview from "./ChartOverview";
import { useAppState } from "../../../../context/AppContext";

function OverviewComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="xl:col-span-5">
      <div
        className="p-4 rounded-xl shadow-md h-[400px] w-full"
        style={{
          backgroundColor: isDarkMode
            ? "var(--color-darkBluishGray)"
            : "var(--color-white)",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <ChartOverview />
      </div>
    </div>
  );
}

export default OverviewComponent;
