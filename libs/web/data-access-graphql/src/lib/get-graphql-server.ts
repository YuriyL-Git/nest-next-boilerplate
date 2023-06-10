import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { sign } from "jsonwebtoken";
import { sign as cookieSign } from "cookie-signature";

export const getGraphqServer = (url: string) => {
  const tokenUnsigned = sign(
    { sub: process.env.NEXT_SERVER_ACCOUNT_ID },
    process.env.JWT_SECRET as string,
  );

  const token = cookieSign(tokenUnsigned, process.env.COOKIE_SECRET as string);

  const client = new GraphQLClient(url, {
    headers: {
      Cookie: `token=${token}`,
    },
    credentials: "include",
  });

  return getSdk(client);
};
