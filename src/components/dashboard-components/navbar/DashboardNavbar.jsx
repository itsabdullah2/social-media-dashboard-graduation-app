import { useAppState } from '../../../context/AppContext';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import { LuMenu } from 'react-icons/lu';

const DashboardNavbar = () => {
  const { isDarkMode, handleSidebar } = useAppState();

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
          className={`hidden md:block md:text-small xl:text-medium 2xl:text-large font-medium ${
            isDarkMode ? 'text-white' : 'text-navy'
          }`}
        >
          Hello Abdullah
        </h1>
      </div>

      <div className="flex items-center justify-between gap-5 md:gap-16 lg:gap-18 xl:gap-32">
        <div className="flex items-center flex-row-reverse lg:flex-row gap-5 md:gap-16 lg:gap-20 xl:gap-32">
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
