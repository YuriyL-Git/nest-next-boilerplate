"use client";

import { useFormik } from "formik";
import { InputField } from "../input-field/input-field";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import { gqlClient } from "../../../common/data-access/graphql-client";
import { GetUsers } from "@next-nest-boilerplate/web/data-access-graphql";
import { gqlServer } from "../../../common/data-access/graphql-server";

export const LoginForm = () => {
  const styles = useStyles();
  /*  const [user, setUser] = useState<GetUsers["users"]>([]);

  useEffect(() => {
    gqlClient.GetUsers().then((result) => {
      setUser(result.users);
    });
  }, []);*/

  useEffect(() => {
    try {
      gqlClient
        .GetUser({
          where: { email: "yuriy_lipcheytdd@gmail.com" }
        })
        .then((result) => {
          console.log("result", result);
        });
    } catch (error) {
      console.log("error", error);
    }
  }, []);

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
