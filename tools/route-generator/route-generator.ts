import { getRouteData, getTypesData, getUniqueRouteNames } from "./utils";
import { glob } from "glob";
const chokidar = require("chokidar");
const appFolder = "apps/web/app";
import * as fs from "node:fs/promises";
import * as path from "path";
import { HOOK_IMPORTS, HOOK_WRAPPER_END, HOOK_WRAPPER_START } from "./consts";
const { exec } = require("child_process");

const encoding = "utf8";
const routerPath = path.join(__dirname, "..", "..", "libs/web/router/src/lib");
const routerFile = path.join(routerPath, "routes.ts");
const hookFile = path.join(routerPath, "use-app-router.ts");
const typesFile = path.join(routerPath, "types.ts");

const generateRoutes = async () => {
  const pagePaths = (await glob(`./${appFolder}/\\[lang\\]/**/page.tsx`)).map((file) =>
    file.replace(appFolder, "").replace("/page.tsx", ""),
  );

  const routeData = pagePaths.map((path) => getRouteData(path));
  const uniqueRouteData = getUniqueRouteNames(routeData);
  const typesData = getTypesData(uniqueRouteData);

  const hookProps = typesData.map((item) => `${item.hookObject} \n `).join(", \n");
  const importPagesList = routeData.map((item) => `${item.baseRouteName}Page`);
  const importParamsList = typesData.map((item) => item.params).filter((param) => param);
  const paramsImport = `import { ${importParamsList.join(", ")} } from "./types";`;

  const typesFileResult = typesData.map((item) => `${item.interface} \n \n`).join("");
  const routesFileResult =
    `${paramsImport} \n \n` +
    typesData.map((item) => `${item.routeObject} \n \n \n`).join("");

  const hooksFileResult = `
  ${HOOK_IMPORTS}\n
  import { ${importPagesList.join(", ")}} from "./routes";
  ${paramsImport}
  ${HOOK_WRAPPER_START}\n
   ${hookProps}
   ${HOOK_WRAPPER_END}`;

  await fs.writeFile(routerFile, routesFileResult, encoding);
  await fs.writeFile(hookFile, hooksFileResult, encoding);
  await fs.writeFile(typesFile, typesFileResult, encoding);
  exec("npx prettier 'libs/web/router/src/lib/**/*.ts' --write");
};

chokidar
  .watch(appFolder)
  .on("add", async () => {
    generateRoutes();
  })
  .on("unlink", async () => {
    generateRoutes();
  });
