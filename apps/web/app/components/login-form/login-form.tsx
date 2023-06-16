"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import { gqlClient } from "../../common/graphql/graphql-client";
import { useDictionary } from "../../hooks/use-dictionary";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { environment } from "@libs/shared/environement";
import { useLocale } from "../../hooks/use-locale";

const {
  googleAuth: { googleClientId },
} = environment;

export const LoginForm = () => {
  const { AuthStrings } = useDictionary();
  const { push } = useRouter();
  const { locale } = useLocale();

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
        push("/");
      } catch {
        console.log("error");
      }
    },
  });
  console.log("googleClientId", googleClientId);

  return (
    <Box sx={styles.container}>
      <GoogleOAuthProvider clientId={googleClientId}>
        <Typography></Typography>
        <InputField fieldName="email" formik={formik} sx={styles.input} />
        <InputField fieldName="password" formik={formik} sx={styles.input} />
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          {AuthStrings.Login}
        </Button>

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          locale={locale}
        />
      </GoogleOAuthProvider>
    </Box>
  );
};
