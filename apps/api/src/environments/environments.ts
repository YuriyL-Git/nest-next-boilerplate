import * as process from "node:process";

export const apiEnv = {
  isProd: process.env.APP_ENV === "production",
  api: {
    port: Number(process.env.API_PORT)
  },
  db: {
    url: process.env.DB_URL
  }
};
