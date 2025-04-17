import React from "react";
import "./ageChart.css";
const data = [
  { label: "18-25 years old", value: 30, color: "#d047f1" },
  { label: "25-35 years old", value: 37, color: "#5b6fe6" },
  { label: "35-45 years old", value: 24, color: "#5b6fe6" },
  { label: "45-55 years old", value: 9, color: "#d047f1" },
];

const AgeChart = () => {
  return (
    <div className="age-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Age distribution</h3>
        <span className="chart-filter">Week ▼</span>
      </div>
      <div className="age-bars">
        {data.map((item, index) => (
          <div key={index} className="age-bar">
            <div className="statistics">
              <div className="age-label">{item.label}</div>
              <div className="bar-value">{item.value}%</div>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar-fill"
                style={{ width: `${item.value}%`, background: item.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeChart;
