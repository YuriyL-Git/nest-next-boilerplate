export const webEnv = {
  isProd: process.env.NEXT_PUBLIC_APP_ENV === "production",
  api: {
    gqlUrl: process.env.NEXT_PUBLIC_WEB_GQL_URL as string,
  },
  storage: {
    url: process.env.STORAGE_URL as string,
    endpoint: process.env.STORAGE_ENDPOINT as string,
  },
};
