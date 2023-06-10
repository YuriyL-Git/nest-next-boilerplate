import { updateEnvFile } from "./update-env-keys";

const branchName = process.argv[2];
console.log("Branch name = ", branchName);

if (branchName === "production") {
  updateEnvFile(".env", [
    {
      key: "CORS_ENABLED",
      value: "true",
    },
  ]);
}
