import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { GraphQLClientRequestHeaders, MaybeLazy } from "graphql-request/build/cjs/types";

export const getGraphqServer = (
  url: string,
  headers?: MaybeLazy<GraphQLClientRequestHeaders> | undefined,
) => {
  const client = new GraphQLClient(url, {
    headers,
    credentials: "include",
  });

  return getSdk(client);
};
