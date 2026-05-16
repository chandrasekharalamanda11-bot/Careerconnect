import {
  useState,
  useEffect,
} from "react";

import {
  toast,
} from "react-toastify";

import {
  JobContext,
} from "./JobContext";

const JobProvider = ({
  children,
}) => {
  const [
    appliedJobs,
    setAppliedJobs,
  ] = useState(() => {
    const savedJobs =
      localStorage.getItem(
        "appliedJobs"
      );

    return savedJobs
      ? JSON.parse(
          savedJobs
        )
      : [];
  });

  const [
    viewedCompanies,
    setViewedCompanies,
  ] = useState(() => {
    const savedCompanies =
      localStorage.getItem(
        "viewedCompanies"
      );

    return savedCompanies
      ? JSON.parse(
          savedCompanies
        )
      : [];
  });

  // Save applied jobs
  useEffect(() => {
    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(
        appliedJobs
      )
    );
  }, [appliedJobs]);

  // Save viewed companies
  useEffect(() => {
    localStorage.setItem(
      "viewedCompanies",
      JSON.stringify(
        viewedCompanies
      )
    );
  }, [viewedCompanies]);

  // Apply Job
  const applyJob = (
    job
  ) => {
    const exists =
      appliedJobs.find(
        (item) =>
          item.id ===
          job.id
      );

    if (exists) {
      toast.info(
        "Already Applied!"
      );
      return;
    }

    const updatedJobs =
      [
        ...appliedJobs,
        job,
      ];

    setAppliedJobs(
      updatedJobs
    );

    toast.success(
      "Application Submitted!"
    );
  };

  // Track Viewed Companies
  const viewCompany =
    (job) => {
      const exists =
        viewedCompanies.find(
          (item) =>
            item.id ===
            job.id
        );

      if (
        !exists
      ) {
        setViewedCompanies(
          [
            ...viewedCompanies,
            job,
          ]
        );
      }
    };

  return (
    <JobContext.Provider
      value={{
        appliedJobs,
        applyJob,
        viewedCompanies,
        viewCompany,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
