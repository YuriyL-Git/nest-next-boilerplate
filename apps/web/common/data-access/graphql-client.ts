"use client";

import { getGraphqlClient } from "@next-nest-boilerplate/web/data-access-graphql";

const gqlUrl = process.env.NEXT_PUBLIC_WEB_GQL_URL as string;

export const gqlClient = getGraphqlClient(gqlUrl);
