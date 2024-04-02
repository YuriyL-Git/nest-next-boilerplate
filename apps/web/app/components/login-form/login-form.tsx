"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box, Button } from "@mui/material";
import { styles } from "./styles";
import { gqlClient } from "../../common/graphql/graphql-client";
import { useDictionary } from "../../hooks/use-dictionary";
import { useRouter } from "next/navigation";
import { GoogleLoginButton } from "../google-login-button/google-login-button";
import { loginSuccessRedirectRoute } from "@app/web/router";

export const LoginForm = () => {
  const { AuthStrings } = useDictionary();
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (resultValues) => {
      try {
        await gqlClient.Login({
          args: resultValues,
        });
        push(loginSuccessRedirectRoute);
      } catch (error) {
        console.error(error);
      }
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
        {AuthStrings.Login}
      </Button>

      <GoogleLoginButton />
    </Box>
  );
};
