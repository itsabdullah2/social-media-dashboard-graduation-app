import AccountState from "./AccountState";
import Username from "./Username";
import ImageUpload from "./ImageUpload";
import SelectTheme from "./SelectTheme";

const SettingsContent = ({ isDarkMode }) => (
  <div
    className={`flex flex-col gap-7 py-5 px-8 rounded-xl ${
      isDarkMode ? "bg-darkBluishGray" : "bg-white"
    }`}
  >
    <ImageUpload />
    <Username />
    <SelectTheme />
    <AccountState />
  </div>
);

export default SettingsContent;
