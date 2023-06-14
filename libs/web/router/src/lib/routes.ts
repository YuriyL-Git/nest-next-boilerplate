export interface HomeParams {
  lang: string;
}

export const HomePage = {
  getRoute: () => {
    return `/`;
  },
};

export interface SignUpParams {
  lang: string;
}

export const SignUpPage = {
  getRoute: () => {
    return `/sign-up`;
  },
};

export interface LoginParams {
  lang: string;
}

export const LoginPage = {
  getRoute: () => {
    return `/login`;
  },
};

export interface DashboardLoginParams {
  lang: string;
}

export const DashboardLoginPage = {
  getRoute: () => {
    return `/dashboard/login`;
  },
};

export interface PageExampleParams {
  lang: string;
}

export const PageExamplePage = {
  getRoute: () => {
    return `/page-example`;
  },
};

export interface LoginWithIdParams {
  lang: string;
  id: string;
}

export const LoginWithIdPage = {
  getRoute: ({ id }: Omit<LoginWithIdParams, "lang">) => {
    return `/login/${id}`;
  },
};

export interface HomeWithIdSlugParams {
  lang: string;
  id: string;
  _slug: string[];
}

export const HomeWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<HomeWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/${id}/${__slug}`;
  },
};

export interface LoginWithIdSlugParams {
  lang: string;
  id: string;
  _slug: string[];
}

export const LoginWithIdSlugPage = {
  getRoute: ({ id, _slug }: Omit<LoginWithIdSlugParams, "lang">) => {
    const __slug = _slug.join("/");
    return `/login/${id}/${__slug}`;
  },
};
