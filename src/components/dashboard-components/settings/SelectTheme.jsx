import { useAppState } from '../../../context/AppContext';

const commonStyles =
  'py-2 px-6 rounded-md bg-light cursor-pointer text-navy font-medium duration-200';

const SelectTheme = () => {
  const { setIsDarkMode, handleSystemTheme, isDarkMode } = useAppState();

  const handleLightTheme = () => {
    setIsDarkMode(false);
  };
  const handleDarkTheme = () => {
    setIsDarkMode(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className={`${isDarkMode ? 'text-white' : 'text-navy'} font-medium`}>
        Select Theme
      </p>
      <div className="flex items-center gap-2">
        <button className={`${commonStyles}`} onClick={handleLightTheme}>
          Light Mode
        </button>
        <button className={`${commonStyles}`} onClick={handleDarkTheme}>
          Dark Mode
        </button>
        <button className={`${commonStyles}`} onClick={handleSystemTheme}>
          System
        </button>
      </div>
    </div>
  );
};

export default SelectTheme;
