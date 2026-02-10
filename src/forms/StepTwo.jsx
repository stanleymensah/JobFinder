import { useFormContext, Controller } from "react-hook-form";

export default function StepTwo({ submit, back }) {
  const {
    register,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const handleSubmit = async () => {
    const valid = await trigger(["salary_min", "salary_max", "type"]);
    if (valid) submit();
  };

  return (
    <>
      <div className="flex w-full justify-between w-full gap-4">
        <label htmlFor="salary_min" className="text-sm flex flex-col gap-2 w-1/2">
          Min. Salary
          <input {...register("salary_min", { required: "Required" })} className="py-1 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300" />
        </label>
        <p>{errors.salary_min?.message}</p>

        <label htmlFor="salary_max" className="text-sm flex flex-col gap-2 w-1/2">
          Max. Salary
          <input {...register("salary_max", { required: "Required" })} className="py-1 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300"/>
        </label>
        {errors.salary_max && <p>{errors.salary_max.message}</p>}
      </div>

      <div className="flex w-full justify-between">
        <label htmlFor="type" className="text-sm flex flex-col gap-2 w-full">
          Job Type
          <Controller
            name="type"
            control={control}
            rules={{ required: "Job type is required" }}
            render={({ field, fieldState }) => (
              <>
                <select {...field} className="py-1 px-2 focus:outline-none focus:ring-0 focus:border-blue-500 border border-gray-300 w-1/2">
                  <option value="">Select job type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>

                {fieldState.error && <p>{fieldState.error.message}</p>}
              </>
            )}
          />
        </label>
      </div>

      <div className="buttons flex gap-3">
        <button
          className="text-muted py-1 px-4 bg-black rounded-xs"
          type="button"
          onClick={back}
        >
          Back
        </button>
        <button
          className="py-1 px-4 bg-sky-400 text-white rounded-xs"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
