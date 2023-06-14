import { LoginWithIdParams, HomeWithIdSlugParams, LoginWithIdSlugParams } from "./types";

export const HomePage = {
  getRoute: () => {
    return `/`;
  },
};

export const PageExamplePage = {
  getRoute: () => {
    return `/page-example`;
  },
};

export const LoginPage = {
  getRoute: () => {
    return `/login`;
  },
};

export const DashboardLoginPage = {
  getRoute: () => {
    return `/dashboard/login`;
  },
};

export const SignUpPage = {
  getRoute: () => {
    return `/sign-up`;
  },
};

export const LoginWithIdPage = {
  getRoute: ({ id }: Omit<LoginWithIdParams, "lang">) => {
    return `/login/${id}`;
  },
};

export const HomeWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/${id}/${__slug}`;
  },
};

export const LoginWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<LoginWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/login/${id}/${__slug}`;
  },
};