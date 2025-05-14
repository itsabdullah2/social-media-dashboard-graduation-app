import Avatar from "../navbar/Avatar";
import SearchBar from "../navbar/SearchBar";
import { LuMenu } from "react-icons/lu";

// Navigation Bar Component
const SettingsNav = ({ isDarkMode, handleSidebar }) => (
  <nav className="flex items-center justify-between py-5">
    <div className="flex items-center gap-3">
      <button
        className={`${
          isDarkMode
            ? "text-white/60 hover:text-white"
            : "text-navy/60 hover:text-navy"
        } duration-200 cursor-pointer mr-3 lg:mr-0`}
        onClick={handleSidebar}
      >
        <LuMenu size={25} />
      </button>
      <SearchBar />
    </div>
    <Avatar />
  </nav>
);

export default SettingsNav;
