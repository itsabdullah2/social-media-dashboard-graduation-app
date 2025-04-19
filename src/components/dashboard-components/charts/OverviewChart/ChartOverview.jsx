import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useAppState } from "../../../../context/AppContext";

const data = [
  { month: "Jan", reached: 17500, engaged: 8000 },
  { month: "Feb", reached: 18500, engaged: 9500 },
  { month: "Mar", reached: 19000, engaged: 10500 },
  { month: "Apr", reached: 21000, engaged: 12000 },
  { month: "May", reached: 22816, engaged: 13500 },
  { month: "Jun", reached: 23500, engaged: 14000 },
  { month: "Jul", reached: 24000, engaged: 14500 },
  { month: "Agu", reached: 27000, engaged: 20000 },
  { month: "Sep", reached: 25500, engaged: 18000 },
  { month: "Oct", reached: 25800, engaged: 16000 },
  { month: "Nov", reached: 25900, engaged: 15000 },
  { month: "Dec", reached: 26000, engaged: 16500 },
];

const ChartOverview = () => {
  const { isDarkMode } = useAppState();
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-2">Overview</h3>

      <div className="flex items-center gap-4 text-sm mb-4">
        <span className="text-[#5b6fe6]">● Account reached</span>
        <span className="text-[#64d2c4]">● Account engaged</span>
        <span className="ml-auto text-gray-500 cursor-pointer">
          Last year ▼
        </span>
      </div>

      <div className="w-[350px] sm:w-full h-[340px] ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="reachedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5b6fe6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5b6fe6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="engagedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64d2c4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#64d2c4" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fill: isDarkMode ? "var(--color-white)" : "#000000" }}
            />
            <YAxis
              domain={[5000, 30000]}
              ticks={[5000, 10000, 15000, 20000, 25000, 30000]}
              interval={0}
              tickFormatter={(val) => `${val / 1000}k`}
              tick={{ fill: isDarkMode ? "var(--color-white)" : "#000000" }}
            />
            <Tooltip
              formatter={(value) => value.toLocaleString()}
              labelStyle={{ fontWeight: "bold" }}
              itemStyle={{ color: "#000" }}
            />
            <Area
              type="monotone"
              dataKey="reached"
              stroke="#5b6fe6"
              fill="url(#reachedFill)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Area
              type="monotone"
              dataKey="engaged"
              stroke="#64d2c4"
              fill="url(#engagedFill)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartOverview;
