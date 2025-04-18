import React from "react";
import RevenueChart from "./RevenueChart";
import { useAppState } from "../../../../context/AppContext";

function RevenueComponent() {
  const { isDarkMode } = useAppState();
  return (
    <div className="lg:col-span-3 md:col-span-12 w-full flex md:justify-start">
      <div
        className="p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full"
        style={{
          backgroundColor: isDarkMode
            ? "var(--color-darkBluishGray)"
            : "var(--color-white)",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <RevenueChart />
      </div>
    </div>
  );
}

export default RevenueComponent;
