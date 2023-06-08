"use client";
import { Input } from "@mui/material";
import { FormikProps } from "formik";

// @ts-ignore
type GenericObject = { [key: string]: any };

interface Props<T extends GenericObject> {
  fieldName: keyof T;
  formik: FormikProps<T>;
}

export const InputField = <T extends GenericObject>({ formik, fieldName }: Props<T>) => {
  const fieldKey = fieldName as string;

  return (
    <Input
      name={fieldKey}
      value={formik.values[fieldKey]}
      onChange={formik.handleChange}
    />
  );
};
