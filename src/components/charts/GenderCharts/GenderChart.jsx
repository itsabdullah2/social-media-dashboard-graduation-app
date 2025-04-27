import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './gender.css';
import { useAppState } from '../../../context/AppContext';

const data = [
  { name: 'Women', value: 69, color: '#d047f1' },
  { name: 'Men', value: 28, color: '#5b6fe6' },
];

function GenderChart() {
  const { isDarkMode } = useAppState();
  return (
    <div className="gender-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Gender distribution</h3>
        <span className="chart-filter">Week ▼</span>
      </div>

      <div className="gender-chart-body">
        <div style={{ position: 'relative', width: '60%', height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="gender-total">19 654</div>
        </div>

        <ul className="gender-legend">
          {data.map((entry, index) => (
            <li key={index} style={{ color: entry.color }}>
              ● {entry.name} {entry.value}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GenderChart;
