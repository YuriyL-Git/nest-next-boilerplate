import { watch } from "chokidar";
import * as fs from "node:fs/promises";
import { encryptText } from "./utils";
import { envCryptedPath, envPath, encoding } from "./consts";

async function encryptEnv() {
  const content = await fs.readFile(envPath, encoding);
  const checkSum = encryptText(content);
  await fs.writeFile(envCryptedPath, checkSum, encoding);
}

watch(envPath).on("all", async () => {
  await encryptEnv();
});

encryptEnv();
