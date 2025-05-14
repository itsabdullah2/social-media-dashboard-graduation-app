import { useState } from "react";
import { useAppState } from "../../../context/AppContext";

const commonStyles =
  "py-2 px-6 rounded-md bg-light cursor-pointer text-navy font-medium duration-200 border border-transparent";

const SelectTheme = () => {
  const { setIsDarkMode, handleSystemTheme, isDarkMode } = useAppState();
  const [selectedTheme, setSelectedTheme] = useState(
    isDarkMode ? "Dark" : "Light"
  );

  const handleLightTheme = () => {
    setIsDarkMode(false);
  };
  const handleDarkTheme = () => {
    setIsDarkMode(true);
  };
  const handleSelectedTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className={`${isDarkMode ? "text-white" : "text-navy"} font-medium`}>
        Select Theme
      </p>
      <div className="flex items-center gap-2">
        <button
          className={`${commonStyles} ${
            selectedTheme === "Light" ? "!border-blueberry" : ""
          }`}
          onClick={() => {
            handleLightTheme();
            handleSelectedTheme("Light");
          }}
        >
          Light Mode
        </button>
        <button
          className={`${commonStyles} ${
            selectedTheme === "Dark" ? "!border-blueberry" : ""
          }`}
          onClick={() => {
            handleDarkTheme();
            handleSelectedTheme("Dark");
          }}
        >
          Dark Mode
        </button>
        <button
          className={`${commonStyles} ${
            selectedTheme === "System" ? "!border-blueberry" : ""
          }`}
          onClick={() => {
            handleSystemTheme();
            handleSelectedTheme("System");
          }}
        >
          System
        </button>
      </div>
    </div>
  );
};

export default SelectTheme;
