import { getRouteData, getTypesData, getUniqueRouteNames } from "./utils";
import { glob } from "glob";
const chokidar = require("chokidar");
const appFolder = "apps/web/app";
import * as fs from "node:fs/promises";
import * as path from "path";
import { HOOK_IMPORTS, HOOK_WRAPPER_END, HOOK_WRAPPER_START } from "./consts";

const encoding = "utf8";
const routerPath = path.join(__dirname, "..", "..", "libs/web/router/src/lib");
const routerFile = path.join(routerPath, "routes.ts");
const hookFile = path.join(routerPath, "use-app-router.ts");

const generateRoutes = async () => {
  const pagePaths = (await glob(`./${appFolder}/\\[lang\\]/**/page.tsx`)).map((file) =>
    file.replace(appFolder, "").replace("/page.tsx", ""),
  );

  const routeData = pagePaths.map((path) => getRouteData(path));
  const uniqueRouteData = getUniqueRouteNames(routeData);
  const typesData = getTypesData(uniqueRouteData);
  const routesFileResult = typesData
    .map((item) => `${item.interface} ${item.routeObject} \n \n`)
    .join("");

  const hookProps = typesData.map((item) => `${item.hookObject} \n `).join(", \n");
  const importPagesList = routeData.map((item) => `${item.baseRouteName}Page`);
  const importParamsList = typesData.map((item) => item.params).filter((param) => param);

  const hooksFileResult = `
  ${HOOK_IMPORTS}\n
  import { ${importPagesList.join(", ")}, ${importParamsList.join(
    ", ",
  )} } from "./routes";
  ${HOOK_WRAPPER_START}\n
   ${hookProps}
   ${HOOK_WRAPPER_END}`;

  fs.writeFile(routerFile, routesFileResult, encoding);
  fs.writeFile(hookFile, hooksFileResult, encoding);
};

generateRoutes();

chokidar
  .watch(appFolder)
  .on("add", async () => {})
  .on("unlink", async () => {});
