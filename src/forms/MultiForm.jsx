import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useNavigate } from "react-router-dom";

export default function MultiForm() {
  const navigate = useNavigate();
  const methods = useForm({ mode: "onTouched" });

  const [step, setStep] = useState(1);
  const submit = async () => {
    const valid = await methods.trigger([
      "title",
      "company",
      "location",
      "description",
      "salary_min",
      "salary_max",
      "type",
    ]);

    if (valid) {
      const data = methods.getValues();
      // Convert salary fields to numbers
      data.salary_min = Number(data.salary_min);
      data.salary_max = Number(data.salary_max);
      // console.log("Form Data:", data);
      try {
        const response = await fetch("http://localhost:5000/update-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok) {
          alert("Job posted successfully!");
          methods.reset();
          navigate("/")

        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error submitting form: ", error);
        alert("Failed to submit form");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      {step === 1 && <StepOne next={() => setStep(2)} />}
      {step === 2 && <StepTwo back={() => setStep(1)} submit={submit} />}
    </FormProvider>
  );
}
