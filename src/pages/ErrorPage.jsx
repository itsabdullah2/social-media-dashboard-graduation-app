import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { useAppState } from '../context/AppContext';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  const { isDarkMode } = useAppState();
  const isAuthError = error?.status === 401;
  const isNotFound = error?.status === 404;

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      isDarkMode ? 'bg-navy text-white' : 'bg-light text-navy'
    }`}>
      <div className={`max-w-md w-full text-center p-8 rounded-lg ${
        isDarkMode ? 'bg-darkBluishGray' : 'bg-white'
      } shadow-lg`}>
        <div className="mb-6">
          <h1 className="text-6xl font-bold mb-4 text-red-500">
            {isNotFound ? '404' : isAuthError ? '401' : 'Error'}
          </h1>
          <h2 className="text-2xl font-medium mb-2">
            {isNotFound 
              ? 'Page Not Found' 
              : isAuthError 
                ? 'Unauthorized Access' 
                : 'Something went wrong'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {isNotFound 
              ? "The page you're looking for doesn't exist or has been moved." 
              : isAuthError 
                ? "You're not authorized to access this resource. Please log in."
                : error?.message || "We encountered an unexpected error. Please try again later."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blueberry text-white rounded-lg hover:bg-blueberry/80 transition-colors"
          >
            <FaHome />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-200 text-navy hover:bg-gray-300'
            }`}
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 