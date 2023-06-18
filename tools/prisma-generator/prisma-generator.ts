import { watch } from "chokidar";
import { exec } from "child_process";

const prismaSchema = "libs/api/data-access-db/src/lib/schema.prisma";

watch(prismaSchema).on("change", async () => {
  exec("npx prisma db push && npm run start:prisma-studio");
});
