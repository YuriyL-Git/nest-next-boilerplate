export const environment = {
  isProd: process.env.NEXT_PUBLIC_APP_ENV === "production",
  cookieSecret: process.env.COOKIE_SECRET as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresSeconds: Number(process.env.JWT_EXPIRES_SECONDS),
  nextServerAccountId: process.env.NEXT_SERVER_ACCOUNT_ID as string,
  nextServerPassword: process.env.NEXT_SERVER_PASSWORD as string,
  apiRoute: process.env.NEXT_PUBLIC_API_ROUTE as string,
  corsOrigin: `https://${process.env.DOMAIN_NAME}`,
  cookiesSecure: process.env.COOKIES_SECURE === "true",
  webAppHost: process.env.WEB_APP_HOST as string,
  corsEnabled: process.env.CORS_ENABLED === "true",
  api: {
    apiUrl: process.env.API_URL as string,
    port: Number(process.env.API_PORT),
    gqlUrl: `${process.env.API_URL}/graphql`,
  },
  db: {
    url: process.env.DB_URL,
  },
};
