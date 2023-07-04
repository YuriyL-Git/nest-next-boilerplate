import {
  HomeWithIdSlugParams,
  LoginWithIdParams,
  LoginWithIdSlugParams,
  VerificationWithTokenParams,
} from "./types";

export const DashboardLoginPage = {
  getRoute: () => {
    return `/dashboard/login`;
  },
  getBaseRoute: () => {
    return `/dashboard/login`;
  },
};

export const DashboardPage = {
  getRoute: () => {
    return `/dashboard`;
  },
  getBaseRoute: () => {
    return `/dashboard`;
  },
};

export const GidgetPage = {
  getRoute: () => {
    return `/gidget`;
  },
  getBaseRoute: () => {
    return `/gidget`;
  },
};

export const HomePage = {
  getRoute: () => {
    return `/`;
  },
  getBaseRoute: () => {
    return `/`;
  },
};

export const HomeWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/${id}/${__slug}`;
  },
  getBaseRoute: () => {
    return `/`;
  },
};

export const LoginPage = {
  getRoute: () => {
    return `/login`;
  },
  getBaseRoute: () => {
    return `/login`;
  },
};

export const LoginWithIdPage = {
  getRoute: ({ id }: Omit<LoginWithIdParams, "lang">) => {
    return `/login/${id}`;
  },
  getBaseRoute: () => {
    return `/login`;
  },
};

export const LoginWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<LoginWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/login/${id}/${__slug}`;
  },
  getBaseRoute: () => {
    return `/login`;
  },
};

export const PageExamplePage = {
  getRoute: () => {
    return `/page-example`;
  },
  getBaseRoute: () => {
    return `/page-example`;
  },
};

export const SignUpPage = {
  getRoute: () => {
    return `/sign-up`;
  },
  getBaseRoute: () => {
    return `/sign-up`;
  },
};

export const VerificationWithTokenPage = {
  getRoute: ({ token }: Omit<VerificationWithTokenParams, "lang">) => {
    return `/verification/${token}`;
  },
  getBaseRoute: () => {
    return `/verification`;
  },
};
