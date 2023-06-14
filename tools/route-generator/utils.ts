export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toPascalCase(str: string) {
  return str.split("-").map(capitalize).join("");
}

export const getRouteData = (path: string) => {
  const params = path
    .match(/(?<!\[)\[(?!\[)(?!\.\.).+?\]/g)
    .map((param) => param.replace(/\[|\]/g, ""));
  const [slug] = path.match(/\[?\[\.\.\..+\]/g) || [];

  let route = path;
  let paramsInterface = "";
  let routeName = path;
  for (const param of params) {
    route =
      param === "lang"
        ? route.replace("/[lang]", "")
        : route.replace(`[${param}]`, `$\{${param}}`);
    paramsInterface = paramsInterface + `${param}:string;`;

    routeName = routeName.replace(`/[${param}]`, "");
  }

  if (slug) {
    route = route.replace(`${slug}`, `\${__slug}`);
    paramsInterface = paramsInterface + `_slug:string[];`;
    routeName = routeName.replace(`/${slug}`, "");
  }

  const subrouteNames = routeName
    .split("/")
    .filter((str) => str)
    .map((subroute) => toPascalCase(subroute));

  const baseRouteName = `${subrouteNames.pop() || "Home"}`;
  route = route || "/";

  return {
    baseRouteName,
    path,
    params,
    paramsInterface,
    slug,
    route,
    subrouteName: subrouteNames.pop(),
  };
};

export type RouteData = ReturnType<typeof getRouteData>;

function groupBy(routeData: RouteData[], property: keyof RouteData) {
  return routeData.reduce((acc, obj) => {
    const key = obj[property] as string;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {} as Record<string, RouteData[]>);
}

function validateRoutes(routeData: RouteData[]) {
  const groupItems = groupBy(routeData, "baseRouteName");
  return Object.values(groupItems).find((item) => item.length > 1) || false;
}

export const getUniqueRouteNames = (routeData: RouteData[]) => {
  const result: RouteData[] = [];

  const routeDataNamed = routeData.map((item) => {
    const paramsList = item.params
      .filter((param) => param !== "lang")
      .map((param) => capitalize(param))
      .join("");
    const params = paramsList ? `With${paramsList}` : "";
    item.baseRouteName = `${item.baseRouteName}${params}${item.slug ? "Slug" : ""}`;
    return item;
  });

  const groupItems = groupBy(routeDataNamed, "baseRouteName");

  for (const [, routeItems] of Object.entries(groupItems)) {
    if (routeItems.length === 1) {
      result.push(routeItems[0]);
      continue;
    }

    routeItems.forEach((item) => {
      if (item.subrouteName) {
        item.baseRouteName = `${item.subrouteName}${item.baseRouteName}`;
      }
      result.push(item);
    });
  }

  const validationFailed = validateRoutes(result);
  if (validationFailed) {
    throw new Error(
      `ROUTE NAMES DUPLICATED: ` +
        validationFailed.map((item) => item.baseRouteName).join(" <---> "),
    );
  }

  return result;
};

export const getTypesData = (uniqueRouteData: RouteData[]) => {
  return uniqueRouteData.map((routeData) => {
    const interfaceName = `${routeData.baseRouteName}Params`;
    const getParams = `Omit<${interfaceName}, "lang">`;

    const requiredParams = routeData.params.filter((param) => param !== "lang");
    const params = requiredParams.join(", ") + `${routeData.slug ? ", _slug" : ""}`;
    const slugJoin = routeData.slug ? `const __slug = _slug.join('/');` : "";
    const isPropsAvailable = requiredParams.length > 0 || !!routeData.slug;
    const getProps = isPropsAvailable ? `{${params}}: ${getParams}` : "";

    const hookNavigateParams = isPropsAvailable ? `{${params}}` : "";

    const returnRouteResult = `\`${routeData.route}\``;
    const getRouteFunc = `getRoute: (${getProps}) => {
        ${slugJoin}
        return ${returnRouteResult};
      }`;
    return {
      interface: `export interface ${interfaceName} {
       ${routeData.paramsInterface}
    }`,
      routeObject: `export const ${routeData.baseRouteName}Page = {
      ${getRouteFunc}
    };`,
      hookObject: `${routeData.baseRouteName}: {
      ${getRouteFunc},
      navigate: (${getProps}) => {
        router.push(${routeData.baseRouteName}Page.getRoute(${hookNavigateParams}));
      }
      }
      `,
      params: `${getProps ? interfaceName : ""}`,
    };
  });
};
