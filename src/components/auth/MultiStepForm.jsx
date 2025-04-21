import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

// Progress bar component to show current step
const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      {/* Step indicators */}
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? 'bg-green-500 text-white' // Completed step
                : index === currentStep
                ? 'bg-blue-500 text-white' // Current step
                : 'bg-gray-200 text-gray-500' // Future step
            }`}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" /> // Checkmark for completed steps
            ) : (
              <span>{index + 1}</span> // Step number
            )}
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  // State for tracking current step and form data
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    instagram: '',
    twitter: '',
    linkedin: '',
  });

  // Define steps and their properties
  const steps = [
    {
      title: 'Instagram Handle',
      field: 'instagram',
      placeholder: '@yourusername',
    },
    {
      title: 'Twitter Handle',
      field: 'twitter',
      placeholder: '@yourusername',
    },
    {
      title: 'LinkedIn Profile',
      field: 'linkedin',
      placeholder: 'linkedin.com/in/username',
    },
  ];

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const currentField = steps[currentStep].field;

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      {/* White card container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Progress bar component */}
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

        {/* Step title and counter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600 mt-2">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Input field for current step */}
        <div className="mb-8">
          <input
            type="text"
            value={formData[currentField]}
            onChange={(e) =>
              setFormData({ ...formData, [currentField]: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={steps[currentStep].placeholder}
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          {/* Back button */}
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' // Disabled state
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Enabled state
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          {/* Skip and Next/Complete buttons */}
          <div className="flex gap-4">
            {/* Skip button */}
            <button
              onClick={handleSkip}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
            >
              Skip
            </button>

            {/* Complete button (on last step) or Next button */}
            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
              >
                <Check className="w-5 h-5 mr-2" />
                Complete
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!formData[currentField]}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold ${
                  !formData[currentField]
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' // Disabled state
                    : 'bg-blue-600 text-white hover:bg-blue-700' // Enabled state
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;