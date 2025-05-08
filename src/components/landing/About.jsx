import { IoPieChartSharp, IoStatsChart, IoSpeedometer } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useAppState } from "../../context/AppContext";

const About = () => {
  const { isDarkMode } = useAppState();

  const features = [
    {
      icon: <TbLayoutDashboardFilled size={24} />,
      title: "Comprehensive Dashboard",
      description: "Get a bird's eye view of all your social media accounts in one central dashboard."
    },
    {
      icon: <IoPieChartSharp size={24} />,
      title: "Detailed Analytics",
      description: "Track engagement, reach, and demographic data with beautiful interactive charts."
    },
    {
      icon: <IoStatsChart size={24} />,
      title: "Performance Tracking",
      description: "Monitor your growth and track performance metrics over time with historical data."
    },
    {
      icon: <IoSpeedometer size={24} />,
      title: "Real-time Insights",
      description: "Enjoy a comfortable viewing experience with real-time updates and dark mode support."
    }
  ];

  return (
    <div
      id="features"
      className={`py-20 ${isDarkMode ? "bg-darkBluishGray" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with improved design */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-100 text-indigo-600 mb-4">
            Features
          </div>
          <h2
            className={`text-3xl font-extrabold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } sm:text-4xl`}
          >
            Everything you need to analyze your social media
          </h2>
          <div className={`h-1 w-20 bg-indigo-600 mx-auto mt-6 mb-8 rounded-full`}></div>
          <p
            className={`mt-4 text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            TrendTrack provides powerful tools to help you understand your
            audience and grow your online presence.
          </p>
        </div>

        {/* Features grid with improved cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`h-full p-6 rounded-xl border ${
                  isDarkMode 
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                    : "bg-white border-gray-100 hover:shadow-lg"
                } transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full w-fit mb-4 bg-indigo-100">
                    <span className="text-indigo-600">{feature.icon}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {feature.title}
                  </h3>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
