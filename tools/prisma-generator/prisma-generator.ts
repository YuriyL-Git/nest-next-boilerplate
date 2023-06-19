import { watch } from "chokidar";
import { exec } from "child_process";

const prismaSchema = "libs/api/data-access-db/src/lib/schema.prisma";

watch(prismaSchema).on("change", async () => {
  exec(
    "npx env-cmd -f .local.env npx prisma db push --accept-data-loss && npm run start:prisma-studio",
  );
});
