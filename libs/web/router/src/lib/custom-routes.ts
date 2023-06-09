import {
  HomePage,
  LoginPage,
  SignUpPage,
  VerificationWithTokenPage,
  GidgetPage,
} from "./routes";

export const unprotectedRoutes = [
  LoginPage,
  GidgetPage,
  SignUpPage,
  VerificationWithTokenPage,
].map((page) => page.getBaseRoute());

export const authRedirectRoute = LoginPage.getRoute();

export const loginSuccessRedirectRoute = HomePage.getRoute();

export const nextApiRoute = "/next-api/";
