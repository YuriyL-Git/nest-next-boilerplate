import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { sign } from "jsonwebtoken";
import { sign as cookieSign } from "cookie-signature";
import { environment } from "@libs/shared/environement";

const { jwtSecret, cookieSecret, nextServerAccountId, corsOrigin } = environment;
export const getGraphqServer = (url: string) => {
  const tokenUnsigned = sign({ sub: nextServerAccountId }, jwtSecret);
  const token = cookieSign(tokenUnsigned, cookieSecret);

  const client = new GraphQLClient(url, {
    headers: {
      Cookie: `token=${token}`,
      Origin: corsOrigin,
    },
    credentials: "include",
  });

  return getSdk(client);
};
