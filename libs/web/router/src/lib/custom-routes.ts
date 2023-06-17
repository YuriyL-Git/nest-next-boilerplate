import { HomePage, LoginPage } from "./routes";

export const unprotectedRoutes = [LoginPage].map((page) => page.getRoute());

export const authRedirectRoute = LoginPage.getRoute();

export const loginSuccessRedirectRoute = HomePage.getRoute();

export const nextApiRoute = "/next-api/";
