import { updateEnvFile } from "./update-env-keys";

updateEnvFile(".env", [
  {
    key: "CORS_ENABLED",
    value: "true",
  },
]);
