import * as fs from "node:fs/promises";
import { decryptText } from "./utils";
import { envCryptedPath, encoding, envPath } from "./consts";
import * as process from "process";
import * as path from "path";

async function decryptEnv() {
  const envFilePath = path.join(__dirname, "..", "..", ".env");
  const encryptedData = await fs.readFile(envCryptedPath, encoding);

  const arg = process.argv[2];
  const encryptionKey = arg === "local" ? process.env.ENV_ENCRYPTION_KEY : arg;
  const result = decryptText(encryptedData, encryptionKey);
  fs.writeFile(envFilePath, result, encoding);
}

decryptEnv();
