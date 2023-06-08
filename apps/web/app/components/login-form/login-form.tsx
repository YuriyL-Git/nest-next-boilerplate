"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box } from "@mui/material";
import { useStyles } from "./styles";

export const LoginForm = () => {
  const styles = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (resultValues) => {
      console.log(resultValues);
    }
  });

  return (
    <Box className={styles.container}>
      <InputField fieldName="email" formik={formik} />
      <InputField fieldName="password" formik={formik} />
    </Box>
  );
};
