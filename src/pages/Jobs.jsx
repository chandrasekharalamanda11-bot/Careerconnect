import {
  useState,
  useContext,
} from "react";

import { Link }
from "react-router-dom";

import { JobContext }
from "../context/JobContext";

const Jobs = () => {
  const [search,
    setSearch] =
    useState("");

  const {
    applyJob,
  } =
    useContext(
      JobContext
    );

  const jobs = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    location: "Hyderabad",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React Developer",
    location: "Bangalore",
  },
  {
    id: 3,
    company: "Amazon",
    role: "UI Developer",
    location: "Chennai",
  },
  {
    id: 4,
    company: "Netflix",
    role: "Backend Developer",
    location: "Mumbai",
  },
  {
    id: 5,
    company: "Infosys",
    role: "Software Engineer",
    location: "Pune",
  },
  {
    id: 6,
    company: "TCS",
    role: "Frontend Engineer",
    location: "Hyderabad",
  },
  {
    id: 7,
    company: "Wipro",
    role: "React JS Developer",
    location: "Noida",
  },
  {
    id: 8,
    company: "Adobe",
    role: "UI/UX Developer",
    location: "Bangalore",
  },
  {
    id: 9,
    company: "Flipkart",
    role: "Full Stack Developer",
    location: "Bangalore",
  },
  {
    id: 10,
    company: "Zoho",
    role: "Software Developer",
    location: "Chennai",
  },
  {
    id: 11,
    company: "Paytm",
    role: "Frontend Engineer",
    location: "Delhi",
  },
  {
    id: 12,
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Hyderabad",
  },
  {
    id: 13,
    company: "IBM",
    role: "Cloud Developer",
    location: "Pune",
  },
  {
    id: 14,
    company: "Capgemini",
    role: "Java Developer",
    location: "Mumbai",
  },
  {
    id: 15,
    company: "Cognizant",
    role: "Web Developer",
    location: "Chennai",
  },
];

  const filteredJobs =
    jobs.filter((job) =>
      job.company
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">

        {/* Left Heading */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Available Jobs
          </h1>

        </div>

        {/* Right Search */}
        <div className="w-full md:w-[350px]">
          <input
            type="text"
            placeholder="Search company..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map(
          (job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-3xl font-bold text-blue-600">
                {job.company}
              </h2>

              <p className="mt-4 text-gray-700">
                <strong>
                  Role:
                </strong>{" "}
                {job.role}
              </p>

              <p className="text-gray-600">
                <strong>
                  Location:
                </strong>{" "}
                {job.location}
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() =>
                    applyJob(job)
                  }
                  className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition duration-300 cursor-pointer"
                >
                  Apply
                </button>

                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Jobs;