import React from 'react';
import { LayoutDashboard, PieChart, LineChart, Moon } from 'lucide-react';
import { useAppState } from '../../context/AppContext';

const About = () => {
  const { isDarkMode } = useAppState();
  
  return (
    <div id="features" className={`py-12 ${isDarkMode ? 'bg-darkBluishGray' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with centered text on large screens */}
        <div className="lg:text-center">
          {/* Small, uppercase, purple heading as section label */}
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          {/* Larger heading with responsive text sizes */}
          <p className={`mt-2 text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Everything you need to analyze your social media
          </p>
          {/* Descriptive subheading with max width and auto margins for centering */}
          <p className={`mt-4 max-w-2xl text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
            TrendTrack provides powerful tools to help you understand your audience and grow your online presence.
          </p>
        </div>

        {/* Features grid - switches from stacked to 2-column at md breakpoint */}
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Feature 1: Comprehensive Dashboard */}
            <div className="flex">
              {/* Icon container with purple background */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
              </div>
              {/* Feature text content */}
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Comprehensive Dashboard</h3>
                <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Get a bird's eye view of all your social media accounts in one central dashboard.
                </p>
              </div>
            </div>

            {/* Feature 2: Detailed Analytics */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <PieChart className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Detailed Analytics</h3>
                <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Track engagement, reach, and demographic data with beautiful interactive charts.
                </p>
              </div>
            </div>

            {/* Feature 3: Performance Tracking */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <LineChart className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Performance Tracking</h3>
                <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Monitor your growth and track performance metrics over time with historical data.
                </p>
              </div>
            </div>

            {/* Feature 4: Dark Mode Support */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <Moon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dark Mode Support</h3>
                <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Enjoy a comfortable viewing experience day or night with our dark mode option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
