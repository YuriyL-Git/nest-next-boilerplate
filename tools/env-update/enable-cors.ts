import { updateEnvFile } from "./update-env-keys";

const branchName = process.argv[2];

if (branchName === "production") {
  updateEnvFile(".env", [
    {
      key: "CORS_ENABLED",
      value: "true",
    },
  ]);
}
