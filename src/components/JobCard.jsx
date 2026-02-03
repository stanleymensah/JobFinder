import { MdFavoriteBorder } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { RiMapPin3Fill } from "react-icons/ri";

export default function JobCard({ job }) {
  return (
    <div className="container bg-white p-4 shadow-sm flex flex-col text-sm rounded-2xl">
      {/* Top */}
      <div className="top flex justify-between mb-4 items-center">
        {/* Company Logo Placeholder */}
        <div className="left bg-sky-100 rounded-lg flex items-center justify-center w-10 h-10">
          <span className="font-bold text-sm">{job.company[0]}</span>
        </div>

        {/* Job Title & Company */}
        <div className="middle text-center flex-1 flex flex-col justify-center items-center">
          <h3 className="text-base font-semibold">{job.title}</h3>
          <span className="text-xs text-gray-500">{job.company}</span>
        </div>

        {/* Favorite Icon */}
        <div className="right">
          <MdFavoriteBorder size={20} />
        </div>
      </div>

      {/* Job Info */}
      <div className="middle flex flex-col gap-2 items-center">
        <span className="text-gray-600 text-xs bg-purple-200 py-1 px-2 rounded-lg">
          {job.type}
        </span>
        <span className="text-gray-500 flex items-center gap-1 text-xs">
          <RiMapPin3Fill /> {job.location}
        </span>
      </div>

      {/* Salary & Posted */}
      <div className="down flex flex-col gap-2 justify-between items-center mt-2 pt-2 border-t border-gray-200 text-sm">
        <span className="font-semibold">
          Salary: GHS {job.salary_min} - {job.salary_max}
        </span>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <FaRegClock />
          <span>Posted {job.created || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
