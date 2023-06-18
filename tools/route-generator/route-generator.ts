import { glob } from "glob";
import * as fs from "node:fs/promises";
import * as path from "path";
import { HOOK_IMPORTS, HOOK_WRAPPER_END, HOOK_WRAPPER_START } from "./consts";
import { getRouteData, getTypesData, getUniqueRouteNames, sortByKey } from "./utils";
import { watch } from "chokidar";
const { exec } = require("child_process");

const appFolder = "apps/web/app";
const encoding = "utf8";
const routerBasePath = "libs/web/router/src/lib";
const routerPath = path.join(__dirname, "..", "..", routerBasePath);
const routerFile = path.join(routerPath, "routes.ts");
const hookFile = path.join(routerPath, "use-app-router.ts");
const typesFile = path.join(routerPath, "types.ts");

const generateRoutes = async () => {
  const pagePaths = (await glob(`./${appFolder}/\\[lang\\]/**/page.tsx`)).map((file) =>
    file.replace(appFolder, "").replace("/page.tsx", ""),
  );

  const routeData = sortByKey(
    pagePaths.map((path) => getRouteData(path)),
    "baseRouteName",
  );
  const uniqueRouteData = getUniqueRouteNames(routeData);
  const typesData = sortByKey(getTypesData(uniqueRouteData), "interface");

  const hookProps = sortByKey(typesData, "interface")
    .map((item) => `${item.hookObject} \n `)
    .join(", \n");
  const importPagesList = routeData.map((item) => `${item.baseRouteName}Page`);
  const importParamsList = typesData.map((item) => item.params).filter((param) => param);
  const paramsImport = `import { ${importParamsList.join(", ")} } from "./types";`;

  const typesFileResult = typesData.map((item) => `${item.interface} \n \n`).join("");
  const routesFileResult =
    `${paramsImport} \n \n` +
    typesData.map((item) => `${item.routeObject} \n \n \n`).join("");

  const hooksFileResult = `
  ${HOOK_IMPORTS}
  ${paramsImport}
  import { ${importPagesList.join(", ")}} from "./routes";
  ${HOOK_WRAPPER_START}\n
   ${hookProps}
   ${HOOK_WRAPPER_END}`;

  await fs.writeFile(routerFile, routesFileResult, encoding);
  await fs.writeFile(hookFile, hooksFileResult, encoding);
  await fs.writeFile(typesFile, typesFileResult, encoding);

  exec(`nx lint '${routerBasePath}/**/*.ts' --fix --all`);
  exec(`npx prettier '${routerBasePath}/**/*.ts' --write`);
};

watch(appFolder)
  .on("add", async () => {
    generateRoutes();
  })
  .on("unlink", async () => {
    generateRoutes();
  });
