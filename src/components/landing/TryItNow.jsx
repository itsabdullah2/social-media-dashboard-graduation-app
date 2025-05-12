import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const TryItNow = () => {
  return (
    <section className="bg-indigo-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">
            Ready to take control of your social media?
          </span>
        </h2>
        
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Start tracking your social media performance today and unlock valuable
          insights.
        </p>
        
        <Link
          to="/signup"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default TryItNow;
