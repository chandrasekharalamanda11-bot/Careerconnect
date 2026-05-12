import { useContext } from "react";
import { JobContext } from "../context/JobContext";

const Dashboard = () => {
  const { appliedJobs } =
    useContext(JobContext);

  const companiesViewed =
    JSON.parse(
      localStorage.getItem(
        "viewedCompanies"
      )
    ) || [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-blue-600">
            Dashboard
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Track your applied jobs
            and career progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-5xl font-bold text-blue-600">
              {appliedJobs.length}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Applied Jobs
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-5xl font-bold text-green-600">
              {
                companiesViewed.length
              }
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Companies Viewed
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-5xl font-bold text-purple-600">
              0
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Interviews
            </p>
          </div>

        </div>

        {/* Applied Jobs */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Applied Jobs
            </h2>

            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              {appliedJobs.length} Jobs
            </span>
          </div>

          {appliedJobs.length >
          0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appliedJobs.map(
                (job) => (
                  <div
                    key={job.id}
                    className="bg-white dark:bg-gray-800 rounded-[30px] shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-blue-600">
                        {job.company.charAt(
                          0
                        )}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {
                            job.company
                          }
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400">
                          {
                            job.role
                          }
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>
                        📍{" "}
                        {
                          job.location
                        }
                      </p>

                      <p>
                        💼 Full Time
                      </p>

                      <p>
                        💰 ₹8–12 LPA
                      </p>
                    </div>

                    <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl transition duration-300 cursor-pointer">
                      Applied ✓
                    </button>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-lg p-16 text-center">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-white">
                No Jobs Applied Yet 😔
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Start applying to jobs
                to see them here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;