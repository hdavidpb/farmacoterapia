import { useState } from "react";
import { initialValues } from "./const";
import { IFormChecksValues } from "./interfaces";

const useSimpleForm = () => {
  const [formValues, setFormValues] =
    useState<IFormChecksValues>(initialValues);

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.checked });
  };

  const sendValues = () => {
    console.log(formValues);
  };

  return { handleChangeValues, sendValues, formValues };
};

export default useSimpleForm;
