"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { FC } from "react";
import { useLocale } from "../../hooks/use-locale";
import { environment } from "@libs/shared/environement";
import { gqlClient } from "../../common/graphql/graphql-client";
import { useRouter } from "next/navigation";
import { loginSuccessRedirectRoute } from "@app/web/router";

const {
  googleAuth: { googleClientId },
} = environment;

export const GoogleLoginButton: FC = () => {
  const { push } = useRouter();
  const { locale } = useLocale();

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const { credential } = credentialResponse;
            if (credential) {
              await gqlClient.LoginWithGoogle({
                args: {
                  googleToken: credential,
                },
              });

              push(loginSuccessRedirectRoute);
            }
          } catch (error) {
            console.error(error);
          }
        }}
        onError={(error) => {
          console.error(error);
        }}
        locale={locale}
      />
    </GoogleOAuthProvider>
  );
};
