import { useAppState } from '../../../context/AppContext';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import Notifications from './Notifications';
import SearchBar from './SearchBar';

const DashboardNavbar = () => {
  const { isDarkMode } = useAppState();

  return (
    <nav className="flex items-center justify-between py-5">
      <h1
        className={`text-large font-medium ${
          isDarkMode ? 'text-white' : 'text-navy'
        }`}
      >
        Hello Abdullah
      </h1>

      <div className="flex items-center justify-between gap-32">
        <Dropdown />
        <SearchBar />
        <div className={`flex items-center gap-4`}>
          <Notifications />
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
