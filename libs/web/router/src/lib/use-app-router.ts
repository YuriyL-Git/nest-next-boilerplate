"use client";
import { useRouter } from "next/navigation";

import {
  HomePage,
  SignUpPage,
  PageExamplePage,
  LoginPage,
  LoginWithIdPage,
  DashboardLoginPage,
  HomeWithIdSlugPage,
  LoginWithIdSlugPage,
} from "./routes";
import { LoginWithIdParams, HomeWithIdSlugParams, LoginWithIdSlugParams } from "./types";

export const useAppRouter = () => {
  const router = useRouter();

  return {
    HomePage: {
      getRoute: () => {
        return `/`;
      },
      navigate: () => {
        router.push(HomePage.getRoute());
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

    PageExamplePage: {
      getRoute: () => {
        return `/page-example`;
      },
      navigate: () => {
        router.push(PageExamplePage.getRoute());
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

    DashboardLoginPage: {
      getRoute: () => {
        return `/dashboard/login`;
      },
      navigate: () => {
        router.push(DashboardLoginPage.getRoute());
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

    HomeWithIdSlugPage: {
      getRoute: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
        const __slug = _slug.join("/");
        return `/${id}/${__slug}`;
      },
      navigate: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
        router.push(HomeWithIdSlugPage.getRoute({ id, _slug }));
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
  };
};
