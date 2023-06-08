import * as process from "node:process";

export const apiEnv = {
  isProd: process.env.APP_ENV === "production",
  cookieSecret: process.env.COOKIE_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresSeconds: Number(process.env.JWT_EXPIRES_SECONDS),
  api: {
    port: Number(process.env.API_PORT)
  },
  db: {
    url: process.env.DB_URL
  }
};
