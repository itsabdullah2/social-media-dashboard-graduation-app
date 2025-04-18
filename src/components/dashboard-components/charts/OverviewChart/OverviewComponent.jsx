import React from "react";
import ChartOverview from "./ChartOverview";
import { useAppState } from "../../../../context/AppContext";

function OverviewComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="lg:col-span-5 md:col-span-3 sm:col-span-3 w-full">
      <div
        className=" p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full"
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
