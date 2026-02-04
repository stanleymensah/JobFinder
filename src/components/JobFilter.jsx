export default function JobFilter() {
  return (
    <div className="container">
      <form action="">
        <div className="first font-semibold text-sm flex justify-between mb-3">
          <span className="">Job Type</span>
          <button className="text-red-500">Clear all</button>
        </div>

        <div className="job-type flex flex-row flex-wrap justify-between text-sm font-semibold gap-2 md:flex-col">
          <div className="flex gap-1">
            <input type="checkbox" name="fulltime" id="" />
            <label htmlFor="">Full time</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="parttime" id="" />
            <label htmlFor="">Part time</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="internship" id="" />
            <label htmlFor="">Internship</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="project" id="" />
            <label htmlFor="">Project Work</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="volunteering" id="" />
            <label htmlFor="">Volunteering</label>
          </div>
        </div>

        <div className="experience flex flex-row flex-wrap mt-3 justify-between text-sm font-semibold gap-2 md:flex-col">
          <div className="flex gap-1">
            <input type="checkbox" name="entry" id="" />
            <label htmlFor="">Entry Level</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="intermediate" id="" />
            <label htmlFor="">Intermediate</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="expert" id="" />
            <label htmlFor="">Expert</label>
          </div>
        </div>

        <button className="bg-primary text-white w-full mt-6 py-2 rounded-full hover:bg-blue-600 transition">
          Apply Filters
        </button>
      </form>
    </div>
  );
}
