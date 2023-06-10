"use client";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/types";
import { GraphQLClientRequestHeaders, MaybeLazy } from "graphql-request/build/cjs/types";

import fetchCookie from "fetch-cookie";

const fetchWithCookies = fetchCookie(fetch);

export const getGraphqlClient = (
  url: string,
  headers?: MaybeLazy<GraphQLClientRequestHeaders> | undefined,
) => {
  const client = new GraphQLClient(url, {
    headers,
    credentials: "include",
    fetch: fetchWithCookies,
  });

  return getSdk(client);
};
