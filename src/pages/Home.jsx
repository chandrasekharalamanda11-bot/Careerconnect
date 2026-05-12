import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Section */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Find Your Dream
              <span className="text-blue-600">
                {" "}Internship
              </span>{" "}
              & Job
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Explore thousands of internships and jobs
              from top companies. Start your career
              journey with CareerConnect.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/jobs"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
              >
                Explore Jobs
              </Link>

              <Link
                to="/register"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  1000+
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  Jobs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  Companies
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  10K+
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  Students
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Career"
              className="rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;