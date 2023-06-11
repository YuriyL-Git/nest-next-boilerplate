"use client";

import { getGraphqlClient } from "@libs/web/data-access-graphql";
import { environment } from "@libs/shared/environement";

const {
  apiRoute,
  api: { gqlUrl },
} = environment;
const clientUrl =
  typeof window !== "undefined" && `${window?.location?.origin}${apiRoute}/graphql`;

export const gqlClient = getGraphqlClient(clientUrl || gqlUrl);
