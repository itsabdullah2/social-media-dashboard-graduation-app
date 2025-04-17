import React from 'react';
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 2200, avgViewer: 500 },
  { month: 'Feb', revenue: 1800, avgViewer: 1000 },
  { month: 'Mar', revenue: 2197, avgViewer: 1500 },
  { month: 'Apr', revenue: 2500, avgViewer: 1800 },
  { month: 'May', revenue: 1600, avgViewer: 2000 },
  { month: 'Jun', revenue: 2100, avgViewer: 2200 },
];

const RevenueChart = () => {
  return (
    <div className="chart-container">
      <div
        className="chart-header"
        style={{ display: 'flex', gap: '10px', color: 'var(--text-color)' }}
      >
        <h3 className="chart-title">Revenue</h3>
        <span className="chart-filter" style={{ background: 'transparent' }}>
          Year ▼
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={30}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: 'var(--text-color)' }} />
          <YAxis
            domain={[500, 3000]}
            tick={{ fill: 'var(--text-color)' }}
            tickCount={6}
          />
          <Tooltip
            formatter={(value) => value.toLocaleString()}
            labelStyle={{ fontWeight: 'bold' }}
            itemStyle={{ color: '#000' }}
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
