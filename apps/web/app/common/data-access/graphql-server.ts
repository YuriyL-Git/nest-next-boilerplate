import { getGraphqServer } from "@next-nest-boilerplate/web/data-access-graphql";
import { environment } from "@next-nest-boilerplate/shared/environement";

const {
  api: { gqlUrl },
} = environment;

export const gqlServer = getGraphqServer(gqlUrl);
