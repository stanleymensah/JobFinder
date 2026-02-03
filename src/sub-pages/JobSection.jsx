import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import { RxMixerHorizontal } from "react-icons/rx";

export default function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        // Node API returns 'jobs' not 'results'
        if (!data.jobs) {
          console.log("API DATA: ", data);
          setJobs([]);
          setLoading(false);
          return;
        }
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="job-section bg-sky-100 p-5">
      <div className="top flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium">Recommended jobs</h1>
        <div className="flex gap-3 items-center border w-40 bg-transparent py-3 rounded-full justify-center cursor-pointer">
          <span className="text-sm">Most recent</span>
          <RxMixerHorizontal size={15} />
        </div>
      </div>

      <div className="bottom flex gap-4 pt-3">
        <div className="left w-1/5">
          <JobFilter />
        </div>
        <div className="right flex justify-center w-4/5 overflow-y-auto h-[600px] p-2">
          {loading && (
            <p className="text-blue-500 font-semibold text-xl">
              Loading jobs...
            </p>
          )}

          {!loading && jobs.length === 0 && (
            <p className="text-gray-500 font-medium">No jobs found.</p>
          )}

          {!loading && jobs.length > 0 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
