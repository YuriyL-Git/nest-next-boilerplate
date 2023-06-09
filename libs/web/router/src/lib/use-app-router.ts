"use client";
import { useRouter } from "next/navigation";
import {
  HomeWithIdSlugParams,
  LoginWithIdParams,
  LoginWithIdSlugParams,
  VerificationWithTokenParams,
} from "./types";
import {
  DashboardPage,
  GidgetPage,
  HomePage,
  HomeWithIdSlugPage,
  LoginPage,
  DashboardLoginPage,
  LoginWithIdPage,
  LoginWithIdSlugPage,
  PageExamplePage,
  SignUpPage,
  VerificationWithTokenPage,
} from "./routes";

export const useAppRouter = () => {
  const router = useRouter();

  return {
    DashboardLoginPage: {
      getRoute: () => {
        return `/dashboard/login`;
      },
      navigate: () => {
        router.push(DashboardLoginPage.getRoute());
      },
    },

    DashboardPage: {
      getRoute: () => {
        return `/dashboard`;
      },
      navigate: () => {
        router.push(DashboardPage.getRoute());
      },
    },

    GidgetPage: {
      getRoute: () => {
        return `/gidget`;
      },
      navigate: () => {
        router.push(GidgetPage.getRoute());
      },
    },

    HomePage: {
      getRoute: () => {
        return `/`;
      },
      navigate: () => {
        router.push(HomePage.getRoute());
      },
    },

    HomeWithIdSlugPage: {
      getRoute: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
        const __slug = _slug.join("/");
        return `/${id}/${__slug}`;
      },
      navigate: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
        router.push(HomeWithIdSlugPage.getRoute({ id, _slug }));
      },
    },

    LoginPage: {
      getRoute: () => {
        return `/login`;
      },
      navigate: () => {
        router.push(LoginPage.getRoute());
      },
    },

    LoginWithIdPage: {
      getRoute: ({ id }: Omit<LoginWithIdParams, "lang">) => {
        return `/login/${id}`;
      },
      navigate: ({ id }: Omit<LoginWithIdParams, "lang">) => {
        router.push(LoginWithIdPage.getRoute({ id }));
      },
    },

    LoginWithIdSlugPage: {
      getRoute: ({ id, _slug }: Omit<LoginWithIdSlugParams, "lang">) => {
        const __slug = _slug.join("/");
        return `/login/${id}/${__slug}`;
      },
      navigate: ({ id, _slug }: Omit<LoginWithIdSlugParams, "lang">) => {
        router.push(LoginWithIdSlugPage.getRoute({ id, _slug }));
      },
    },

    PageExamplePage: {
      getRoute: () => {
        return `/page-example`;
      },
      navigate: () => {
        router.push(PageExamplePage.getRoute());
      },
    },

    SignUpPage: {
      getRoute: () => {
        return `/sign-up`;
      },
      navigate: () => {
        router.push(SignUpPage.getRoute());
      },
    },

    VerificationWithTokenPage: {
      getRoute: ({ token }: Omit<VerificationWithTokenParams, "lang">) => {
        return `/verification/${token}`;
      },
      navigate: ({ token }: Omit<VerificationWithTokenParams, "lang">) => {
        router.push(VerificationWithTokenPage.getRoute({ token }));
      },
    },
  };
};
