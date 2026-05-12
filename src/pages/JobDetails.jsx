import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { JobContext } from "../context/JobContext";

const JobDetails = () => {
  const { id } = useParams();

  const { applyJob } =
    useContext(JobContext);

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      location: "Hyderabad",
      salary: "₹8 LPA",
      experience: "0-1 Years",
      description:
        "Work with ReactJS to build modern UI interfaces and improve user experience.",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "React Developer",
      location: "Bangalore",
      salary: "₹10 LPA",
      experience: "1-2 Years",
      description:
        "Develop scalable React applications and collaborate with cross-functional teams.",
    },
    {
      id: 3,
      company: "Amazon",
      role: "UI Developer",
      location: "Chennai",
      salary: "₹9 LPA",
      experience: "0-2 Years",
      description:
        "Create responsive and interactive UI designs.",
    },
    {
      id: 4,
      company: "Netflix",
      role: "Backend Developer",
      location: "Mumbai",
      salary: "₹12 LPA",
      experience: "2+ Years",
      description:
        "Build APIs and scalable backend systems.",
    },
  ];

  const selectedJob =
    jobs.find(
      (job) =>
        job.id === Number(id)
    );

  useEffect(() => {
    let viewedCompanies =
      JSON.parse(
        localStorage.getItem(
          "viewedCompanies"
        )
      ) || [];

    if (
      selectedJob &&
      !viewedCompanies.includes(
        selectedJob.company
      )
    ) {
      viewedCompanies.push(
        selectedJob.company
      );

      localStorage.setItem(
        "viewedCompanies",
        JSON.stringify(
          viewedCompanies
        )
      );
    }
  }, [selectedJob]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-8">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-[32px] p-10 w-full max-w-3xl hover:shadow-3xl transition duration-300">

        {selectedJob ? (
          <>
            <h1 className="text-5xl font-bold text-blue-600">
              {selectedJob.company}
            </h1>

            <h2 className="text-2xl mt-3 text-gray-700 dark:text-gray-300">
              {selectedJob.role}
            </h2>

            <div className="mt-8 space-y-5 text-lg text-gray-700 dark:text-gray-300">
              <p>
                📍{" "}
                {selectedJob.location}
              </p>

              <p>
                💰{" "}
                {selectedJob.salary}
              </p>

              <p>
                🧑‍💻{" "}
                {
                  selectedJob.experience
                }
              </p>

              <p>
                📝{" "}
                {
                  selectedJob.description
                }
              </p>
            </div>

            <button
              onClick={() =>
                applyJob(
                  selectedJob
                )
              }
              className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 cursor-pointer text-lg font-semibold"
            >
              Apply Now 🚀
            </button>
          </>
        ) : (
          <h1 className="text-3xl font-bold text-red-500">
            Job Not Found
          </h1>
        )}

      </div>
    </div>
  );
};

export default JobDetails;