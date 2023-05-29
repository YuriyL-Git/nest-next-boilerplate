import * as process from "node:process";

export const webEnv = {
  isProd: process.env.APP_ENV === "production",
  api: {
    gqlUrl: process.env.WEB_GQL_URL as string
  }
};
