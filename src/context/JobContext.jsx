import {
  createContext,
  useState,
} from "react";

import { toast }
from "react-toastify";

export const JobContext =
  createContext();

const JobProvider = ({
  children,
}) => {
  const [
    appliedJobs,
    setAppliedJobs,
  ] = useState([]);

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
      toast.warning(
        "Already Applied!"
      );

      return;
    }

    setAppliedJobs([
      ...appliedJobs,
      job,
    ]);

    toast.success(
      "Applied Successfully!"
    );
  };

  return (
    <JobContext.Provider
      value={{
        appliedJobs,
        applyJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;