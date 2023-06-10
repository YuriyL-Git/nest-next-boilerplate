"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box, Button } from "@mui/material";
import { styles } from "./styles";
import { gqlClient } from "../../common/data-access/graphql-client";
import { useDictionary } from "../../hooks/use-dictionary";

export const SignUp = () => {
  const { AuthStrings } = useDictionary();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (resultValues) => {
      gqlClient.SignUp({
        args: resultValues,
      });
    },
  });

  return (
    <Box sx={styles.container}>
      <InputField fieldName="email" formik={formik} sx={styles.input} />
      <InputField fieldName="password" formik={formik} sx={styles.input} />
      <Button
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        {AuthStrings.Register}
      </Button>
    </Box>
  );
};
