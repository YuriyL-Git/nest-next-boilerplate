import { cookies } from "next/headers";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";

export function getGraphqlHeaders(): GraphQLClientRequestHeaders {
  return {
    Cookie: cookies() as unknown as string,
  };
}
