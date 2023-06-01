import { GraphQLClient } from "graphql-request";
import { getSdk } from "./queries/data-access-queries.gql.gen";
import { GraphQLClientRequestHeaders, MaybeLazy } from "graphql-request/build/cjs/types";

export const getGraphqlClient = (
  url: string,
  headers?: MaybeLazy<GraphQLClientRequestHeaders> | undefined
) => {
  const client = new GraphQLClient(url, {
    headers
  });

  return getSdk(client);
};
