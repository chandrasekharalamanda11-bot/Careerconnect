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
  ] = useState([]);

  const [
    viewedCompanies,
    setViewedCompanies,
  ] = useState([]);

  // Get logged user
  const getCurrentUser =
    () => {
      return JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );
    };

  // Load current user dashboard
  const loadUserData =
    () => {
      const user =
        getCurrentUser();

      if (
        !user?.email
      ) {
        setAppliedJobs(
          []
        );

        setViewedCompanies(
          []
        );

        return;
      }

      const savedJobs =
        JSON.parse(
          localStorage.getItem(
            `appliedJobs_${user.email}`
          )
        ) || [];

      const savedCompanies =
        JSON.parse(
          localStorage.getItem(
            `viewedCompanies_${user.email}`
          )
        ) || [];

      setAppliedJobs(
        savedJobs
      );

      setViewedCompanies(
        savedCompanies
      );
    };

  // Load dashboard
  useEffect(() => {
    const user =
      getCurrentUser();
    if (!user?.email) {
      // avoid synchronous setState inside effect to prevent cascading renders
      setTimeout(() => {
        setAppliedJobs([]);
        setViewedCompanies([]);
      }, 0);

      return;
    }

    const savedJobs =
      JSON.parse(
        localStorage.getItem(
          `appliedJobs_${user.email}`
        )
      ) || [];

    const savedCompanies =
      JSON.parse(
        localStorage.getItem(
          `viewedCompanies_${user.email}`
        )
      ) || [];

    // defer state updates to avoid synchronous setState in effect
    setTimeout(() => {
      setAppliedJobs(savedJobs);
      setViewedCompanies(savedCompanies);
    }, 0);
  }, []);

  // Save applied jobs
  useEffect(() => {
    const user =
      getCurrentUser();

    if (
      user?.email
    ) {
      localStorage.setItem(
        `appliedJobs_${user.email}`,
        JSON.stringify(
          appliedJobs
        )
      );
    }
  }, [appliedJobs]);

  // Save viewed companies
  useEffect(() => {
    const user =
      getCurrentUser();

    if (
      user?.email
    ) {
      localStorage.setItem(
        `viewedCompanies_${user.email}`,
        JSON.stringify(
          viewedCompanies
        )
      );
    }
  }, [viewedCompanies]);

  // Apply Job
  const applyJob =
    (job) => {

      const exists =
        appliedJobs.find(
          (item) =>
            item.id ===
            job.id
        );

      if (
        exists
      ) {
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

  // Viewed Companies
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

  // Clear dashboard
  const clearDashboard =
    () => {
      setAppliedJobs(
        []
      );

      setViewedCompanies(
        []
      );
    };

  return (
    <JobContext.Provider
      value={{
        appliedJobs,
        applyJob,
        viewedCompanies,
        viewCompany,
        loadUserData,
        clearDashboard,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;