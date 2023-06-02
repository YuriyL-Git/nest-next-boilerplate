const fs = require("fs").promises;

const encoding = "utf8";
const pathToPublicFolder = "./apps/web/public";
const pathToFile = "./apps/web/i18n/publicFiles.gen.json";

setTimeout(async () => {
  await generatePublicFilesList();
}, 0);

async function generatePublicFilesList() {
  const publicFiles = (await fs.readdir(pathToPublicFolder)).map((file) => `/${file}`);
  const result = JSON.stringify({ publicFiles }, null, 2);
  fs.writeFile(pathToFile, result, encoding);
}
