const SettingsHeader = ({ isDarkMode }) => (
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
);

export default SettingsHeader;
