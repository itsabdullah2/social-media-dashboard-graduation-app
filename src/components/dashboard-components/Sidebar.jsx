import { useEffect, useState } from 'react';
import {
  LuLayoutDashboard,
  LuCalendarCheck,
  LuChartColumnBig,
  LuSquareActivity,
  LuSettings,
  LuLogOut,
  LuMoon,
  LuSunMedium,
} from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { useAppState } from '../../context/AppContext';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isActivePage, setIsActivePage] = useState(pathname);
  const { isDarkMode, toggleDarkMode } = useAppState();

  useEffect(() => {
    setIsActivePage(pathname);
  }, [pathname]);

  const sidebarItems = {
    pages: [
      {
        label: 'Dashboard',
        path: '/dashboard',
        icon: <LuLayoutDashboard size={19} />,
      },
      {
        label: 'Schedule',
        path: '/dashboard/schedule',
        icon: <LuCalendarCheck size={19} />,
      },
      {
        label: 'Activities',
        path: '/dashboard/activities',
        icon: <LuSquareActivity size={19} />,
      },
      {
        label: 'Statistics',
        path: '/dashboard/statistics',
        icon: <LuChartColumnBig size={19} />,
      },
    ],
    settings: [
      {
        label: 'settings',
        path: '/dashboard/settings',
        icon: <LuSettings size={19} />,
      },
      { label: 'logout', path: '/logout', icon: <LuLogOut size={19} /> },
    ],
  };

  return (
    <aside
      className={`w-[250px] sticky h-dvh ${
        isDarkMode ? 'bg-darkBluishGray' : 'bg-white'
      } flex flex-col py-5 px-4 top-0 left-0`}
    >
      <h2
        className={`text-medium font-bold ${
          isDarkMode ? 'text-light' : 'text-navy'
        } text-center mb-20`}
      >
        TrendTrack
      </h2>

      <section className="flex-1">
        {/* Pages */}
        <ul className="flex flex-col gap-5 mb-10 pb-10 border-b border-light">
          {sidebarItems.pages.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 py-1 px-2 rounded-md ${
                isDarkMode ? 'text-white' : 'text-navy'
              } ${
                isActivePage === item.path
                  ? 'bg-gradient-to-r from-blueberry to-cyan text-white'
                  : ''
              }`}
              onClick={() => handleActivePage(pathname)}
            >
              {item.icon}
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Settings */}
        <ul className="flex flex-col gap-6">
          {sidebarItems.settings.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-navy'
              } `}
            >
              {item.icon}
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <button
        className={`${
          isDarkMode
            ? 'bg-btn-dark text-white'
            : 'bg-btn-light text-darkBluishGray'
        } py-3 px-8 rounded-full w-fit mx-auto font-medium text-xs flex items-center gap-2 cursor-pointer`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <>
            <LuSunMedium size={20} />
            Light
          </>
        ) : (
          <>
            <LuMoon size={20} />
            Dark
          </>
        )}{' '}
        mode
      </button>
    </aside>
  );
};

export default Sidebar;
