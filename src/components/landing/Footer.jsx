import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAppState } from "../../context/AppContext";

const Footer = () => {
  const { isDarkMode } = useAppState();

  return (
    <footer className={`${isDarkMode ? "bg-navy" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* Social media icons container with centered flex layout */}
        <div className="mt-8 flex justify-center space-x-6">
          {/* Facebook link with react icon */}
          <a
            href="#"
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-500"
            }`}
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" />
          </a>
          {/* Instagram link with react icon */}
          <a
            href="#"
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-500"
            }`}
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" />
          </a>
          {/* Twitter link with react icon */}
          <a
            href="#"
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-500"
            }`}
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
        {/* Copyright text with centered alignment */}
        <div className="mt-8 text-center">
          <p
            className={`text-base ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            &copy; 2025 TrendTrack. All rights reserved. Coded by Abdullah's
            team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
