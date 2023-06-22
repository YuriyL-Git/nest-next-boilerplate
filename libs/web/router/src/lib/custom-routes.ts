import { HomePage, LoginPage, SignUpPage } from "./routes";

export const unprotectedRoutes = [LoginPage, SignUpPage].map((page) => page.getRoute());

export const authRedirectRoute = LoginPage.getRoute();

export const loginSuccessRedirectRoute = HomePage.getRoute();

export const nextApiRoute = "/next-api/";
