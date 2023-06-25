"use client";
import { VerificationWithTokenParams, useAppRouter } from "@app/web/router";
import { gqlClient } from "../../../common/graphql/graphql-client";
import { useEffect } from "react";

interface Props {
  params: VerificationWithTokenParams;
}

export default function Page({ params: { token } }: Props) {
  const { LoginPage } = useAppRouter();

  useEffect(() => {
    gqlClient
      .VerifyEmail({
        args: {
          verificationToken: token,
        },
      })
      .then((result) => {
        const { isVerified } = result.verifyEmail;

        if (isVerified) {
          LoginPage.navigate();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [LoginPage, token]);
  return <>Verification page</>;
}
