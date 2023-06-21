import { exec } from "child_process";

exec("npx env-cmd -f .local.env npx prisma migrate status", (_, stdout) => {
  if (!stdout.includes("schema is up to date")) {
    exec("npx env-cmd -f .local.env npx prisma migrate dev --create-only");
  }
});
