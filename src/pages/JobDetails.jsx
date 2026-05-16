import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useContext,
  useEffect,
} from "react";

import {
  JobContext,
} from "../context/JobContext";

import {
  AuthContext,
} from "../context/AuthContextSetup";

const JobDetails = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const {
    applyJob,
    viewCompany,
  } = useContext(
    JobContext
  );

  const {
    isLoggedIn,
  } = useContext(
    AuthContext
  );

  const jobs = [
    {
      id: 1,
      company: "Google",
      role:
        "Frontend Developer",
      location:
        "Hyderabad",
      salary:
        "₹12 LPA",
      experience:
        "0-2 Years",
      description:
        "Develop responsive and user-friendly frontend applications using React.",
    },
    {
      id: 2,
      company:
        "Microsoft",
      role:
        "React Developer",
      location:
        "Bangalore",
      salary:
        "₹14 LPA",
      experience:
        "1-3 Years",
      description:
        "Build scalable React applications and optimize performance.",
    },
    {
      id: 3,
      company:
        "Amazon",
      role:
        "UI Developer",
      location:
        "Chennai",
      salary:
        "₹9 LPA",
      experience:
        "0-2 Years",
      description:
        "Create responsive and interactive UI designs.",
    },
    {
      id: 4,
      company:
        "Netflix",
      role:
        "Backend Developer",
      location:
        "Mumbai",
      salary:
        "₹18 LPA",
      experience:
        "2-4 Years",
      description:
        "Develop secure backend APIs and improve platform performance.",
    },
    {
      id: 5,
      company:
        "Infosys",
      role:
        "Software Engineer",
      location:
        "Pune",
      salary:
        "₹7 LPA",
      experience:
        "0-2 Years",
      description:
        "Work on enterprise software projects.",
    },
    {
  id: 6,
  company: "TCS",
  role: "Frontend Engineer",
  location: "Hyderabad",
  salary: "₹8 LPA",
  experience: "0-2 Years",
  description:
    "Develop responsive frontend applications using React and JavaScript.",
},

{
  id: 7,
  company: "Wipro",
  role: "React JS Developer",
  location: "Noida",
  salary: "₹9 LPA",
  experience: "1-3 Years",
  description:
    "Build scalable React applications and improve UI performance.",
},

{
  id: 8,
  company: "Adobe",
  role: "UI/UX Developer",
  location: "Bangalore",
  salary: "₹13 LPA",
  experience: "1-3 Years",
  description:
    "Design modern and interactive user interfaces.",
},

{
  id: 9,
  company: "Flipkart",
  role: "Full Stack Developer",
  location: "Bangalore",
  salary: "₹15 LPA",
  experience: "2-4 Years",
  description:
    "Develop scalable full-stack web applications.",
},

{
  id: 10,
  company: "Zoho",
  role: "Software Developer",
  location: "Chennai",
  salary: "₹10 LPA",
  experience: "0-2 Years",
  description:
    "Work on enterprise-level software products.",
},
{
      id: 11,
      company:
        "Paytm",
      role:
        "Frontend Engineer",
      location:
        "Delhi",
      salary:
        "₹11 LPA",
      experience:
        "1-3 Years",
      description:
        "Build responsive payment interfaces.",
    },

{
  id: 12,
  company: "Accenture",
  role:
    "Associate Software Engineer",
  location: "Hyderabad",
  salary: "₹7 LPA",
  experience: "0-2 Years",
  description:
    "Develop software solutions and support enterprise systems.",
},

{
  id: 13,
  company: "IBM",
  role: "Cloud Developer",
  location: "Pune",
  salary: "₹14 LPA",
  experience: "1-3 Years",
  description:
    "Build cloud-based enterprise applications.",
},

{
  id: 14,
  company: "Capgemini",
  role: "Java Developer",
  location: "Mumbai",
  salary: "₹9 LPA",
  experience: "1-3 Years",
  description:
    "Develop Java-based backend systems and APIs.",
},

{
  id: 15,
  company: "Cognizant",
  role: "Web Developer",
  location: "Chennai",
  salary: "₹8 LPA",
  experience: "0-2 Years",
  description:
    "Build responsive web applications for clients.",
},
    
  ];

  const job =
    jobs.find(
      (job) =>
        job.id ===
        Number(id)
    );

  useEffect(() => {
    if (job) {
      viewCompany(
        job
      );
    }
  }, [job, viewCompany]);

  const handleApply =
    () => {
      if (
        !isLoggedIn
      ) {
        navigate(
          "/login"
        );
        return;
      }

      applyJob(
        job
      );
    };

  if (!job) {
    return (
      <h1 className="text-center text-4xl mt-20 font-bold text-red-500">
        Job Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4 py-12">
      <div className="bg-slate-800 text-white rounded-[30px] shadow-2xl p-10 max-w-2xl w-full">

        <h1 className="text-5xl font-bold text-blue-500 mb-4">
          {job.company}
        </h1>

        <h2 className="text-3xl mb-6">
          {job.role}
        </h2>

        <div className="space-y-4 text-lg text-gray-300">
          <p>
            📍 {job.location}
          </p>

          <p>
            💰 {job.salary}
          </p>

          <p>
            👨‍💻{" "}
            {
              job.experience
            }
          </p>

          <p>
            📝{" "}
            {
              job.description
            }
          </p>
        </div>

        <button
          onClick={
            handleApply
          }
          className="mt-8 bg-green-600 hover:bg-green-700 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold cursor-pointer"
        >
          Apply Now
        </button>

      </div>
    </div>
  );
};

export default JobDetails;