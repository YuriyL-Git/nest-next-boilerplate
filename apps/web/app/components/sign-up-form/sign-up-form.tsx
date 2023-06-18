"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box, Button } from "@mui/material";
import { styles } from "./styles";
import { gqlClient } from "../../common/graphql/graphql-client";
import { useDictionary } from "../../hooks/use-dictionary";

export const SignUp = () => {
  const { AuthStrings } = useDictionary();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (resultValues) => {
      const { password, passwordConfirm, email } = resultValues;
      if (password === passwordConfirm) {
        gqlClient.SignUp({
          args: {
            email,
            password,
          },
        });
      }
    },
  });

  return (
    <Box sx={styles.container}>
      <InputField
        fieldName="email"
        formik={formik}
        sx={styles.input}
        placeholder={AuthStrings.Email}
      />
      <InputField
        fieldName="password"
        formik={formik}
        sx={styles.input}
        placeholder={AuthStrings.Password}
      />
      <InputField
        fieldName="passwordConfirm"
        formik={formik}
        sx={styles.input}
        placeholder={AuthStrings.ConfirmPassword}
      />
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
