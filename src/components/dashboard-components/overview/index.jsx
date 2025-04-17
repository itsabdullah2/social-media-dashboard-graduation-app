import React from "react";

import StatsBox from "../../charts/statesBox/StatsBox";
import ChartOverview from "../../charts/ChartOverview";
import RevenueChart from "../../charts/RevenueChart";

import GenderChart from "../../charts/GenderCharts/GenderChart";
import AgeChart from "../../charts/AgeChart/AgeChart";
import ActivityChart from "../../charts/ActivityChart/ActivityChart";

const followerData = [
  { value: 10 },
  { value: 15 },
  { value: 13 },
  { value: 18 },
  { value: 20 },
  { value: 25 },
  { value: 22 },
  { value: 28 },
  { value: 30 },
  { value: 26 },
  { value: 32 },
  { value: 35 },
];

const revenueData = [
  { value: 5 },
  { value: 8 },
  { value: 6 },
  { value: 10 },
  { value: 9 },
  { value: 12 },
  { value: 15 },
  { value: 14 },
  { value: 18 },
  { value: 20 },
  { value: 19 },
  { value: 22 },
];

const errorData = [
  { value: 3 },
  { value: 2 },
  { value: 4 },
  { value: 3 },
  { value: 5 },
  { value: 4 },
  { value: 6 },
  { value: 5 },
  { value: 7 },
  { value: 6 },
  { value: 8 },
  { value: 9 },
];

const sharesData = [
  { value: 3 },
  { value: 2 },
  { value: 4 },
  { value: 3 },
  { value: 5 },
  { value: 4 },
  { value: 6 },
  { value: 5 },
  { value: 7 },
  { value: 6 },
  { value: 8 },
  { value: 9 },
];

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

const Overview = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 gap-4 my-[1rem]">
          <StatsBox
            title="Followers"
            number="19 654"
            percentage="- 5%"
            percentageColor="#ff0000"
            chartData={followerData}
          />
          <StatsBox
            title="Likes"
            number="4 820"
            percentage="+ 12%"
            percentageColor="#34d399"
            chartData={revenueData}
          />
          <StatsBox
            title="Comments"
            number="5 541"
            percentage="+ 2%"
            percentageColor="#34d399"
            chartData={errorData}
          />
          <StatsBox
            title="Shares"
            number="1 234"
            percentage="+ 8%"
            percentageColor="#34d399"
            chartData={sharesData}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4 my-[1rem]">
          <div className="lg:col-span-5 md:col-span-3 sm:col-span-3 w-full">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
              <ChartOverview />
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-6 w-full flex md:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
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
                      <td className="py-2">
                        {row.subscribers.toLocaleString()}
                      </td>
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

          <div className="lg:col-span-3 md:col-span-12 w-full flex md:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
              <RevenueChart />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-[1rem]">
          <div className="flex sm:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
              <GenderChart />
            </div>
          </div>

          <div className="flex sm:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
              <AgeChart />
            </div>
          </div>

          <div className="flex sm:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-md h-full w-[400px] sm:w-full">
              <ActivityChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
