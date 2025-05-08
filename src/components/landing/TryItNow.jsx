import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAppState } from "../../context/AppContext";

const TryItNow = () => {
  const { isDarkMode } = useAppState();

  return (
    <>
      {/* Call-to-Action (CTA) Section with indigo background instead of purple */}
      <div className="bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          {/* White text heading with responsive sizing */}
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Ready to take control of your social media?
            </span>
          </h2>
          {/* Light indigo paragraph text */}
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Start tracking your social media performance today and unlock
            valuable insights.
          </p>
          {/* White button with indigo text and right arrow icon */}
          <Link
            to="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Footer Section with social media links and copyright */}
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
    </>
  );
};

export default TryItNow;
