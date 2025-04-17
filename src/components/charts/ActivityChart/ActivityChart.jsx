import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "./activityChart.css";

const data = [
  { name: "Shorts", value: 75, fill: "#32ded4" },
  { name: "Videos", value: 56, fill: "#d047f1" },
  { name: "Posts", value: 14, fill: "#5b6fe6" },
];

function ActivityChart() {
  return (
    <div className="activity-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Activity</h3>
        <span className="chart-filter">Month ▼</span>
      </div>

      <div className="activity-chart-body">
        <div style={{ position: "relative", width: "60%", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="30%"
              outerRadius="90%"
              barSize={10}
              data={data}
              cx="50%"
              cy="50%"
            >
              <RadialBar minAngle={15} background clockWise dataKey="value" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <ul className="activity-legend">
          {data.map((entry, index) => (
            <li key={index} style={{ color: entry.fill }}>
              ● {entry.name} {entry.value}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityChart;
