import * as process from "node:process";

export const webEnv = {
  isProd: process.env.APP_ENV === "production",
  api: {
    gqlUrl: process.env.WEB_GQL_URL as string
  },
  storage: {
    url: process.env.STORAGE_URL as string,
    endpoint: process.env.STORAGE_ENDPOINT as string
  },
  googleProvider: {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  }
};
