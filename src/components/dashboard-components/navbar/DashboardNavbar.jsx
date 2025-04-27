import { useAppState } from '../../../context/AppContext';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import { LuMenu } from 'react-icons/lu';

const DashboardNavbar = () => {
  const { isDarkMode, handleSidebar, isSidebarOpen } = useAppState();

  return (
    <nav className={`flex items-center justify-between py-5`}>
      <div className="flex items-center gap-3">
        <button
          className={`${
            isDarkMode
              ? 'text-white/60 hover:text-white'
              : 'text-navy/60 hover:text-navy'
          } duration-200 cursor-pointer mr-3 lg:mr-0`}
          onClick={handleSidebar}
        >
          <LuMenu size={25} />
        </button>
        <h1
          className={`hidden md:block text-small xl:text-medium font-medium ${
            isDarkMode ? 'text-white' : 'text-navy'
          }
          ${isSidebarOpen ? 'lg: xl:text-large 2xl:' : 'lg: 2xl:text-large'}`}
        >
          Hello Abdullah
        </h1>
      </div>

      <div
        className={`flex items-center justify-between gap-5 ${
          isSidebarOpen
            ? 'lg:gap-20 xl:gap-28 2xl:gap-32'
            : 'lg:gap-6 2xl:gap-24'
        }`}
      >
        <div
          className={`flex items-center flex-row-reverse lg:flex-row gap-5 ${
            isSidebarOpen
              ? 'lg:gap-20 xl:gap-28 2xl:gap-32'
              : 'lg:gap-6 2xl:gap-24'
          }`}
        >
          <Dropdown />
          <SearchBar />
        </div>
        <div className={`flex items-center gap-2 lg:gap-4`}>
          <Notifications />
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
