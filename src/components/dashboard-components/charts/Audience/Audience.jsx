import React from "react";
import { useAppState } from "../../../../context/AppContext";
const audienceData = [
  {
    country: "DE",
    flag: "./flags/germany.png",
    subscribers: 5439,
    viewers: 7918,
    dynamics: "+5.6%",
  },
  {
    country: "NL",
    flag: "./flags/netherlands.png",
    subscribers: 4211,
    viewers: 4682,
    dynamics: "+0.9%",
  },
  {
    country: "UK",
    flag: "./flags/unitedKingdom.png",
    subscribers: 4189,
    viewers: 6731,
    dynamics: "+1.9%",
  },
  {
    country: "PL",
    flag: "./flags/poland.png",
    subscribers: 2671,
    viewers: 2980,
    dynamics: "-1.2%",
  },
  {
    country: "BE",
    flag: "./flags/belgium.png",
    subscribers: 1770,
    viewers: 2874,
    dynamics: "+2.1%",
  },
  {
    country: "DK",
    flag: "./flags/denmark.png",
    subscribers: 983,
    viewers: 990,
    dynamics: "+0.1%",
  },
];
function Audience() {
  const { isDarkMode } = useAppState();
  return (
    <div className="lg:col-span-4 md:col-span-6 w-full flex md:justify-start">
      <div
        className="p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full"
        style={{
          backgroundColor: isDarkMode
            ? "var(--color-darkBluishGray)"
            : "var(--color-white)",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Top audience location</h2>
          <span className="text-sm text-gray-500 cursor-pointer">
            Last year ▼
          </span>
        </div>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Country</th>
              <th className="pb-2">Subscribers</th>
              <th className="pb-2">Viewers</th>
              <th className="pb-2">Dynamics</th>
            </tr>
          </thead>
          <tbody>
            {audienceData.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-2 py-2">
                  <img src={row.flag} alt="" className="w-5 h-5" />
                  {row.country}
                </td>
                <td className="py-2">{row.subscribers.toLocaleString()}</td>
                <td className="py-2">{row.viewers.toLocaleString()}</td>
                <td
                  className={`py-2 ${
                    row.dynamics.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {row.dynamics}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Audience;
