import { useFormContext } from "react-hook-form";

export default function StepOne({ next }) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger([
      "title",
      "company",
      "location",
      "description",
    ]);
    if (valid) next();
  };

  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <label htmlFor="title" className="text-sm flex flex-col gap-2 w-1/2">
          {" "}
          Job Title
          <input
            placeholder="Job title..."
            {...register("title", { required: "This is required" })}
            className="py-2 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300 w-full"
          />
          <p className="text-red-400 text-xs">{errors.title?.message}</p>
        </label>

        <label htmlFor="company" className="text-sm flex flex-col gap-2 w-1/2">
          Company Name
          <input
            placeholder="Compnay name..."
            {...register("company", { required: "This is required" })}
            className="py-2 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300 w-full"
          />
          <p className="text-red-400 text-xs">{errors.company?.message}</p>
        </label>
      </div>

      <div className="flex w-full justify-between w-full gap-4">
        <label htmlFor="location" className="text-sm flex flex-col gap-2 w-1/2">
          {" "}
          Job Location
          <input
            placeholder="Job location..."
            {...register("location", { required: "This is required" })}
            className="py-2 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300 w-full"
          />
          <p className="text-red-400 text-xs">{errors.location?.message}</p>
        </label>

        <label
          htmlFor="description"
          className="text-sm flex flex-col gap-2 w-1/2"
        >
          Job Description
          <input
            placeholder="Describe the job"
            {...register("description", { require: "This is required" })}
            className="py-2 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300 w-full"
          />
          <p className="text-red-400 text-xs">{errors.description?.message}</p>
        </label>
      </div>

      <div className="buttons flex gap-3">
        <button
          type="button"
          className="text-muted py-1 px-4 bg-black rounded-xs"
          disabled
        >
          Back
        </button>
        <button
          className="py-1 px-4 bg-sky-400 text-white rounded-xs"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
