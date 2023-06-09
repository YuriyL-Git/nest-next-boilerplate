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
  domainName: process.env.DOMAIN_NAME as string,
  api: {
    apiUrl: process.env.API_URL as string,
    port: Number(process.env.API_PORT),
    gqlUrl: `${process.env.API_URL}/graphql`,
  },
  db: {
    url: process.env.DB_URL,
  },
  googleAuth: {
    googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  },
  nodemailer: {
    mailAddress: process.env.GMAIL_ADDRESS as string,
    googleClientIdEmail: process.env.GOOGLE_CLIENT_ID_MAIL as string,
    googleClientSecretEmail: process.env.GOOGLE_CLIENT_SECRET_MAIL as string,
    googleAccessTokenEmail: process.env.GOOGLE_ACCESS_TOKEN_EMAIL as string,
    googleRefreshTokenEmail: process.env.GOOGLE_REFRESH_TOKEN_EMAIL as string,
  },
};
