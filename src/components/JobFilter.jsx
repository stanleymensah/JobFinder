import { useForm } from "react-hook-form";

export default function JobFilter({ onApply }) {
  const { register, handleSubmit, watch, reset } = useForm({ 
    defaultValues: {
      fulltime: false,
      parttime: false,
      contract: false,
      internship: false,
    } 
  });

  const watchedValues = watch();

  const applyFilters = () => {
    // Build filter types based on checked checkboxes
    const selectedTypes = [];
    if (watchedValues.fulltime) selectedTypes.push("full-time");
    if (watchedValues.parttime) selectedTypes.push("part-time");
    if (watchedValues.contract) selectedTypes.push("contract");
    if (watchedValues.internship) selectedTypes.push("internship");

    onApply({
      type: selectedTypes.length > 0 ? selectedTypes : "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(applyFilters)}>
        <div className="first font-semibold text-sm flex justify-between mb-3">
          <span className="">Job Type</span>
          <button
            onClick={() => {
              reset();
              onApply({ type: "" });
            }}
            type="button"
            className="text-red-400 md:cursor-pointer hover:text-red-600"
          >
            Clear all
          </button>
        </div>

        <div className="job-type flex flex-row flex-wrap justify-between text-sm font-semibold gap-2 md:flex-col">
          <div className="flex gap-1">
            <input type="checkbox" {...register("fulltime")} />
            <label htmlFor="">Full time</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" {...register("parttime")} />
            <label htmlFor="">Part time</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" {...register("contract")} />
            <label htmlFor="">Contract</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" {...register("internship")} />
            <label htmlFor="">Internship</label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full mt-6 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
