"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import { gqlClient } from "../../common/data-access/graphql-client";
import { useDictionary } from "../../hooks/use-dictionary";
import { useRouter } from "next/navigation";

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
        push("/");
      } catch {
        console.log("error");
      }
    },
  });

  return (
    <Box sx={styles.container}>
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
    </Box>
  );
};
