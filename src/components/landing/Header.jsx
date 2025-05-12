import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useAppState } from "../../context/AppContext";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const { isDarkMode } = useAppState();

  return (
    <header>
      <Navbar />
      
      <div
        className={`max-w-[1624px] mx-auto ${
          isDarkMode ? "bg-navy" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              
              <h1
                className={`text-4xl font-extrabold tracking-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } sm:text-5xl md:text-6xl`}
              >
                <span className="block">Track your</span>
                <span className="block text-indigo-600">
                  social media analytics
                </span>
              </h1>
              
              <p
                className={`mt-3 text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                } sm:mt-5 sm:text-xl`}
              >
                TrendTrack helps you understand your audience, analyze
                performance, and grow your social media presence with powerful
                analytics tools.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  
                  <Link
                    to="/signup"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started <FaArrowRight className="ml-2" />
                  </Link>
                  
                  <a
                    href="#features"
                    className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                      isDarkMode
                        ? "text-indigo-400 bg-gray-800 hover:bg-gray-700"
                        : "text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    } md:py-4 md:text-lg md:px-10`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              
              <div className="relative w-full h-[500px]">
                
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg shadow-xl overflow-hidden z-10 transform hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/light-mode.png"
                    alt="Light mode dashboard"
                  />
                </div>

                
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-lg shadow-xl overflow-hidden z-20 transform hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/dark-mode-full.png"
                    alt="Dark mode dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
