import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { environment } from "@libs/shared/environement";

const { /* jwtSecret, cookieSecret, nextServerAccountId,*/ corsOrigin } = environment;

export const getGraphqlServer = (url: string) => {
  /*
  // alternatively can be passed generated on server token if needed static site generation
  const tokenUnsigned = sign({ sub: nextServerAccountId }, jwtSecret);
  const token = cookieSign(tokenUnsigned, cookieSecret);*/

  const client = new GraphQLClient(url, {
    headers: {
      // Cookie: `token=${token}`,
      Origin: corsOrigin,
    },
    credentials: "include",
  });

  return getSdk(client);
};
