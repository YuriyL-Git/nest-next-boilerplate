import { getGraphqServer } from "@next-nest-boilerplate/web/data-access-graphql";
import { webEnv } from "../environments/environments";

const {
  api: { gqlUrl },
} = webEnv;

export const gqlServer = getGraphqServer(gqlUrl);
