// import { z } from "zod";
import { SiGooglegemini } from "react-icons/si";
import MultiForm from "../forms/MultiForm";

// export const jobSchema = z.object({
//   title: z.string().min(5, "Title must at least 5 characters long"),
//   description: z.string().min(20, "Description must at least 20 characters long"),
//   location: z.string().min(2, "Location must at least 2 characters long"),
//   salary_min: z.number().min(0, "Minimum salary must be at least 0"),
//   salary_max: z.number().min(1, "Maximum salary must be at least 1"),
//   type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
//   company: z.string().min(2, "Company name must at least 2 characters long"),
// })
// export type RegisterJobInput = z.infer<typeof jobSchema>;

export default function UploadJob() {


  return (
    <div className="container w-full">
      <div className="upper flex justify-center items-center h-16 bg-black mb-10 gap-3 md:w-full">
        <h1 className="text-white text-lg md:text-2xl">Connect your brand with top talent</h1>
        <SiGooglegemini color="white" size={20} />
      </div>

      <div className="lower flex flex-col gap-10 justify-center py-4 px-8 items-center">
        <MultiForm />
      </div>
    </div>
  )
}
