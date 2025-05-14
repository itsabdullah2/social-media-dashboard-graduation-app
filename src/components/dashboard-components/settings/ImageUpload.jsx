import { useAppState } from "../../../context/AppContext";
import { FiUpload } from "react-icons/fi";
import React from "react";

const ImageUpload = () => {
  const { isDarkMode, tempAvatar, setTempAvatar, avatar } = useAppState();

  // Initialize tempAvatar with current avatar
  React.useEffect(() => {
    if (!tempAvatar && avatar) {
      setTempAvatar(avatar);
    }
  }, [avatar, tempAvatar, setTempAvatar]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        return;
      }

      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        return;
      }

      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-small font-medium ${
          isDarkMode ? "text-light" : "text-navy"
        }`}
      >
        Profile Picture
      </label>
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          {tempAvatar ? (
            <img
              src={tempAvatar}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center ${
                isDarkMode ? "bg-darkBluishGray" : "bg-gray-100"
              }`}
            >
              <FiUpload
                className={`w-8 h-8 ${
                  isDarkMode ? "text-light/40" : "text-navy/40"
                }`}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            className={`text-small rounded-md border cursor-pointer ${
              isDarkMode
                ? "bg-darkBluishGray border-white/10 text-light hover:border-white/20"
                : "bg-white border-navy/10 text-navy hover:border-navy/20"
            } px-4 py-2 transition-colors duration-200`}
          >
            Choose Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <p
            className={`text-xs ${
              isDarkMode ? "text-light/60" : "text-navy/60"
            }`}
          >
            JPG, PNG or GIF (max. 5MB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
