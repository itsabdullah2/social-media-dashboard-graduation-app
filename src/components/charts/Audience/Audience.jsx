import React, { useEffect, useState } from 'react';
import { supabase } from '../../../components/auth/supabase';
import { useAppState } from '../../../context/AppContext';

function Audience() {
  const { isDarkMode } = useAppState();
  const [audienceData, setAudienceData] = useState([]);

  useEffect(() => {
    async function fetchAudienceData() {
      const { data, error } = await supabase.from('audience_data').select('*');
      if (error) {
        console.error('Error fetching audience data', error);
      } else {
        setAudienceData(data);
      }
    }

    fetchAudienceData();
  }, []);

  return (
    <div className="xl:col-span-4">
      <div
        className="p-4 rounded-xl shadow-md h-[400px] w-full"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--color-darkBluishGray)'
            : 'var(--color-white)',
          color: isDarkMode ? 'var(--color-white)' : '#000000',
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
            {audienceData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="flex items-center gap-2 py-3">
                  <img src={row.flag} alt="" className="w-5 h-5" />
                  {row.country}
                </td>
                <td className="py-2">{row.subscribers.toLocaleString()}</td>
                <td className="py-2">{row.viewers.toLocaleString()}</td>
                <td
                  className={`py-2 ${
                    row.dynamics.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
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
