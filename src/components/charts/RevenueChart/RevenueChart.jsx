import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useAppState } from "../../../context/AppContext";
import { supabase } from "../../../supabase/supabase";

const RevenueChart = () => {
  const { isDarkMode } = useAppState();
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    async function fetchRevenueData() {
      try {
        const { data, error } = await supabase.from("revenue_data").select("*");
        setRevenueData(data);
      } catch (error) {
        console.error("Error fetching revenue data", error);
      }
    }

    fetchRevenueData();
  }, []);

  return (
    <div
      className="chart-container"
      style={{
        backgroundColor: isDarkMode
          ? "var(--color-darkBluishGray)"
          : "var(--color-white)",
        color: isDarkMode ? "var(--color-white)" : "#000000",
      }}
    >
      <div
        className="chart-header"
        style={{
          display: "flex",
          gap: "10px",
          color: isDarkMode ? "var(--color-white)" : "#000000",
        }}
      >
        <h3 className="chart-title">Revenue</h3>
        <span className="chart-filter" style={{ background: "transparent" }}>
          Year ▼
        </span>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={revenueData} barSize={30}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fill: isDarkMode ? "var(--color-white)" : "#000000" }}
          />
          <YAxis
            domain={[500, 3000]}
            tick={{ fill: isDarkMode ? "var(--color-white)" : "#000000" }}
            tickCount={6}
          />
          <Tooltip
            formatter={(value) => value.toLocaleString()}
            labelStyle={{ fontWeight: "bold" }}
            itemStyle={{ color: "#000" }}
          />
          <Bar
            dataKey="revenue"
            fill="url(#barGradient)"
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0072ff" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="avgViewer"
            stroke="#d047f1"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
