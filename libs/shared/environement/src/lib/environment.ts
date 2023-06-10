export const environment = {
  isProd: process.env.NEXT_PUBLIC_APP_ENV === "production",
  cookieSecret: process.env.COOKIE_SECRET as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresSeconds: Number(process.env.JWT_EXPIRES_SECONDS),
  nextServerAccountId: process.env.NEXT_SERVER_ACCOUNT_ID as string,
  apiRoute: process.env.NEXT_PUBLIC_API_ROUTE as string,
  corsOrigin: process.env.CORS_ORIGIN as string,
  api: {
    port: Number(process.env.API_PORT),
    gqlUrl: `${process.env.API_URL}/graphql`,
  },
  db: {
    url: process.env.DB_URL,
  },
  storage: {
    url: process.env.STORAGE_URL as string,
    endpoint: process.env.STORAGE_ENDPOINT as string,
  },
};