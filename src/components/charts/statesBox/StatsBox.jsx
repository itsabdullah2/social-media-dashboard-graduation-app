import React from "react";
import "./StatsBox.css";
import { ResponsiveContainer, AreaChart, Area } from "recharts";



const fillGradientId = `chartFillGradient-${Math.random()
  .toString(36)
  .substring(7)}`;
const lineGradientId = `chartLineGradient-${Math.random()
  .toString(36)
  .substring(7)}`;

const StatsBox = ({
  title,
  number,
  percentage,
  percentageColor = "#f87171",
  chartData = [],
}) => {
  const hasData = chartData && chartData.length > 0;

  return (
    <div className="stats-box">
      <div className="stats-box-top-row">
        <span className="stats-box-title">{title}</span>
        <span className="stats-box-timespan">
          Month <span className="dropdown-arrow">▼</span>
        </span>
      </div>

      <div className="stats-box-number">{number}</div>

      <div className="stats-box-bottom-row">
        <span
          className="stats-box-percentage"
          style={{ color: percentageColor }}
        >
          {percentage}
        </span>
        <div className="stats-box-mini-chart">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 2, right: 0, left: 0, bottom: 2 }}
              >
                <defs>
                  <linearGradient
                    id={fillGradientId}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{
                        stopColor: "rgba(163, 127, 240, 0.5)",
                        stopOpacity: 0.8,
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopColor: "rgba(70, 190, 224, 0.1)",
                        stopOpacity: 0.1,
                      }}
                    />
                  </linearGradient>
                  <linearGradient
                    id={lineGradientId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" style={{ stopColor: "#a37ff0" }} />
                    <stop offset="100%" style={{ stopColor: "#46bee0" }} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={`url(#${lineGradientId})`}
                  strokeWidth={2.5}
                  fill={`url(#${fillGradientId})`}
                  dot={false}
                  activeDot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div
              style={{ textAlign: "center", color: "#ccc", fontSize: "12px" }}
            >
              No data
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
