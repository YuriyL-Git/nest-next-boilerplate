import { getGraphqlServer } from "@libs/web/data-access-graphql";
import { environment } from "@libs/shared/environement";

const {
  api: { gqlUrl },
} = environment;

export const gqlServer = getGraphqlServer(gqlUrl);
