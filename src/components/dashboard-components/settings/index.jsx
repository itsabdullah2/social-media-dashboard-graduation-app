/**
 * This Component will return:
 * 1. Theme handling [done, ]
 * 2. Account settings from:
 * 2.1 Profile Picture [done, ]
 * 2.2 Username [done, ]
 * 2.3 Delete Account [done, ]
 * 2.4 Logout [done, ]
 */

import AccountState from './AccountState';
import BusinessName from './BusinessName';
import ImageUpload from './ImageUpload';
import SelectTheme from './SelectTheme';

const Settings = () => {
  return (
    <section className={`mx-8 max-w-[1624px] flex-1`}>
      <div className="flex flex-col gap-8 p-5">
        {/* Render Navigation Bar */}
        <div className="flex items-center justify-between gap-5 lg:gap-0">
          <div className="">
            <h1 className={`text-large font-medium`}>Settings</h1>
            <p className="text-navy/60">
              Customize until match to your workflow
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-navy bg-white w-32`}
            >
              Cancel
            </button>
            <button
              className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-white bg-blueberry w-32`}
            >
              Save
            </button>
          </div>
        </div>
        {/* Render Settings Section */}
        <div className="flex flex-col gap-7 bg-white py-5 px-8 rounded-xl w-">
          {/* Image Upload Section */}
          <ImageUpload />
          {/* Business Name Section */}
          <BusinessName />
          {/* Theme Section */}
          <SelectTheme />
          {/* Delete Account & Logout Section */}
          <AccountState />
        </div>
      </div>
    </section>
  );
};

export default Settings;
