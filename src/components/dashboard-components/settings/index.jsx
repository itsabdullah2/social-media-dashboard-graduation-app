/**
 * This Component will return:
 * 1. Theme handling [done, ]
 * 2. Account settings from:
 * 2.1 Profile Picture [done, ]
 * 2.2 Username [done, ]
 * 2.3 Delete Account [done, ]
 * 2.4 Logout [done, ]
 */

import AccountState from "./AccountState";
import BusinessName from "./BusinessName";
import ImageUpload from "./ImageUpload";
import SelectTheme from "./SelectTheme";
import { useAppState } from "../../../context/AppContext";
import Avatar from "../navbar/Avatar";
import SearchBar from "../navbar/SearchBar";
import { LuMenu } from "react-icons/lu";

const Settings = () => {
  const { isDarkMode, handleSidebar, tempName, setBusinessName } =
    useAppState();

  const handleSave = () => {
    setBusinessName(tempName);
  };

  return (
    <section className={`mx-auto px-3 md:px-5 xl:px-8 max-w-[1624px] flex-1`}>
      <div className="flex flex-col gap-8">
        {/* Render Navigation Bar */}
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

        <div className="">
          <h1
            className={`text-large font-medium ${
              isDarkMode ? "text-light" : "text-navy"
            }`}
          >
            Settings
          </h1>
          <p className={`${isDarkMode ? "text-light/60" : "text-navy/60"}`}>
            Customize until match to your workflow
          </p>
        </div>
        {/* Render Settings Section */}
        <div
          className={`flex flex-col gap-7 py-5 px-8 rounded-xl ${
            isDarkMode ? "bg-darkBluishGray" : "bg-white"
          }`}
        >
          {/* Image Upload Section */}
          <ImageUpload />
          {/* Business Name Section */}
          <BusinessName />
          {/* Theme Section */}
          <SelectTheme />
          {/* Delete Account & Logout Section */}
          <AccountState />
        </div>

        <div className="flex items-center gap-2 justify-end">
          <button
            className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-navy bg-white w-32`}
          >
            Cancel
          </button>
          <button
            className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-white bg-blueberry w-32`}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
