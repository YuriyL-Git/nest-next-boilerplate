import { randomBytes } from "crypto";
import { updateEnvFile } from "./update-env-keys";

const secret_keys = ["COOKIE_SECRET", "JWT_SECRET"];
const envFiles = [".env", ".local.env"];

for (const envFile of envFiles) {
  const keyValuesList = secret_keys.map((key) => ({
    key,
    value: randomBytes(32).toString("hex"),
  }));
  updateEnvFile(envFile, keyValuesList);
}
