import { useState, useEffect } from "react";
import { useAppState } from "../context/AppContext";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";

const useSettings = () => {
  const {
    isDarkMode,
    handleSidebar,
    tempName,
    setUsername,
    tempAvatar,
    setAvatar,
    setIsDarkMode,
  } = useAppState();
  const { user } = useAuth();

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeSettings = () => {
      try {
        const savedSettings = localStorage.getItem("userSettings");

        if (!savedSettings) {
          const defaultSettings = {
            username: tempName || user?.user_metadata?.username,
            theme: isDarkMode ? "dark" : "light",
            avatar: null,
          };

          localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
          setIsInitialized(true);
        } else {
          const settings = JSON.parse(savedSettings);
          setUsername(settings.username);
          setAvatar(settings.avatar);
          setIsDarkMode(settings.theme === "dark");
          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Failed to initialize settings:", error);
        setError("Failed to initialize settings");
        toast.error("Failed to initialize settings");
      }
    };

    if (!isInitialized) {
      initializeSettings();
    }
  }, [
    isInitialized,
    tempName,
    isDarkMode,
    setUsername,
    setAvatar,
    setIsDarkMode,
  ]);

  const handleSave = () => {
    try {
      setIsSaving(true);
      setError(null);

      const settings = {
        username: tempName,
        theme: isDarkMode ? "dark" : "light",
        avatar: tempAvatar,
      };

      localStorage.setItem("userSettings", JSON.stringify(settings));
      setUsername(tempName);
      setAvatar(tempAvatar);
      toast.success("Settings saved successfully!");
    } catch (error) {
      const errorMessage = error.message || "Failed to save settings";
      setError(errorMessage);
      toast.error(errorMessage);
      setUsername(tempName);
      setAvatar(tempAvatar);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setUsername(tempName);
    setAvatar(tempAvatar);
    setError(null);
    toast.info("Changes discarded");
  };

  return {
    isDarkMode,
    handleSidebar,
    isSaving,
    error,
    handleSave,
    handleCancel,
  };
};

export default useSettings;
