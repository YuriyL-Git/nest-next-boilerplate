import { updateEnvFile } from "./update-env-keys";
import * as path from "path";
import * as fs from "node:fs/promises";

const encoding = "utf8";
const domainName = process.argv[2];
const nginxPath = path.join(__dirname, "..", "nginx/nginx.conf");

fs.readFile(nginxPath, encoding).then((content) => {
  const result = content.replace(/\$\{DOMAIN_NAME}/g, domainName);
  fs.writeFile(nginxPath, result, encoding);
});

updateEnvFile(".env", [
  {
    key: "DOMAIN_NAME",
    value: domainName,
  },
]);
