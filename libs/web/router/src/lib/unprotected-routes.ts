import { LoginPage } from "./routes";

export const unprotectedRoutes = [LoginPage].map((page) => page.getRoute());
export const authRedirectRoute = LoginPage.getRoute();
