// @ts-ignore
const fs = require("fs").promises;
// @ts-ignore
const chokidar = require("chokidar");

// @ts-ignore
const encoding = "utf8";
const pathToPublicFolder = "./apps/web/public";
const pathToFile = "./apps/web/i18n/public-files.gen.json";

async function generatePublicFilesList() {
  const list = (await fs.readdir(pathToPublicFolder)).map((file) => `/${file}`);
  const result = JSON.stringify({ list }, null, 2);
  fs.writeFile(pathToFile, result, encoding);
}

chokidar.watch(pathToPublicFolder).on("all", () => {
  generatePublicFilesList();
});
