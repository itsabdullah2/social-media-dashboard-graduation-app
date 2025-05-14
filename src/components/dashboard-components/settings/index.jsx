import SettingsNav from "./SettingsNav";
import SettingsHeader from "./SettingsHeader";
import SettingsContent from "./SettingsContent";
import ActionButtons from "./ActionButtons";
import useSettings from "../../../hooks/useSettings";

const Settings = () => {
  const {
    isDarkMode,
    handleSidebar,
    isSaving,
    error,
    handleSave,
    handleCancel,
  } = useSettings();

  return (
    <section className={`mx-auto px-3 md:px-5 xl:px-8 max-w-[1624px] flex-1`}>
      <div className="flex flex-col gap-8">
        <SettingsNav isDarkMode={isDarkMode} handleSidebar={handleSidebar} />
        <SettingsHeader isDarkMode={isDarkMode} />
        {error && <div className="text-red-500 text-small">{error}</div>}
        <SettingsContent isDarkMode={isDarkMode} />
        <ActionButtons
          isSaving={isSaving}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </div>
    </section>
  );
};

export default Settings;
