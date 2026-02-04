import { useRef } from "react";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import { RxMixerHorizontal } from "react-icons/rx";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchJobs = async () => {
  const res = await axios.get("http://localhost:5000/api/jobs");
  return res.data.jobs;
};

export default function JobSection() {
  const scrollRef = useRef(null);
  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  
  if (isError) return <p>Failed to load jobs</p>;

  return (
    <div className="job-section bg-sky-100 p-5">
      <div className="top flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Recommended jobs
        </h1>
        <div className="flex gap-3 items-center border px-3 bg-transparent py-3 rounded-full justify-center cursor-pointer">
          <span className="hidden md:block text-sm">Most recent</span>
          <RxMixerHorizontal size={15} />
        </div>
      </div>

      <div className="bottom flex flex-col gap-4 pt-3 md:flex-row">
        <div className="left w-full md:w-1/5">
          <JobFilter />
        </div>
        <div
          className="right flex justify-center w-full  overflow-y-auto h-[600px] p-2 md:w-4/5"
          ref={scrollRef}
        >
          {isLoading && (
            <p className="text-blue-500 font-semibold text-xl">
              Loading jobs...
            </p>
          )}

          {!isLoading && jobs.length === 0 && (
            <p className="text-gray-500 font-medium">No jobs found.</p>
          )}

          {!isLoading && jobs.length > 0 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
      <ScrollToTop target={scrollRef} />
    </div>
  );
}
