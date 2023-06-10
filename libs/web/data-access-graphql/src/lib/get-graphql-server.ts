import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { sign } from "jsonwebtoken";
import { sign as cookieSign } from "cookie-signature";
import { environment } from "@libs/shared/environement";

const { jwtSecret, cookieSecret, nextServerAccountId } = environment;

export const getGraphqServer = (url: string) => {
  const tokenUnsigned = sign({ sub: nextServerAccountId }, jwtSecret);
  const token = cookieSign(tokenUnsigned, cookieSecret);
  console.log("url=>>", url);
  console.log("token=>>", token);

  const client = new GraphQLClient(url, {
    headers: {
      Cookie: `token=${token}`,
    },
    credentials: "include",
  });

  return getSdk(client);
};
