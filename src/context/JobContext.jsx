import {
  createContext,
  useState,
  useEffect,
} from "react";

import {
  toast,
} from "react-toastify";

const JobContext =
  createContext();

const JobProvider = ({
  children,
}) => {
  const [
    appliedJobs,
    setAppliedJobs,
  ] = useState(() => {
    const user = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

    if (!user?.email) {
      return [];
    }

    return JSON.parse(
      localStorage.getItem(
        `appliedJobs_${user.email}`
      )
    ) || [];
  });

  const [
    viewedCompanies,
    setViewedCompanies,
  ] = useState(() => {
    const user = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

    if (!user?.email) {
      return [];
    }

    return JSON.parse(
      localStorage.getItem(
        `viewedCompanies_${user.email}`
      )
    ) || [];
  });

  // Get current user
  const getCurrentUser =
    () => {
      return JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );
    };

  // Save applied jobs for current user
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

  // Save viewed companies for current user
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

  // View Company
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
        const updatedCompanies =
          [
            ...viewedCompanies,
            job,
          ];

        setViewedCompanies(
          updatedCompanies
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

export {
  JobContext,
};

export default JobProvider;