import { glob } from "glob";
import * as fs from "node:fs/promises";
import * as path from "path";
import * as process from "process";

const migrationsFolder = "libs/api/data-access-db/src/lib/migrations";
const encoding = "utf8";

async function prismaMigrate() {
  const migrations = await glob(`${migrationsFolder}/**/*.sql`);

  for (const migration of migrations) {
    const migrationContent = await fs.readFile(migration, encoding);
    if (migrationContent === "-- This is an empty migration.") {
      const emptyMigrationDir = path.basename(path.dirname(migration));
      await fs.rm(`${migrationsFolder}/${emptyMigrationDir}`, {
        recursive: true,
        force: true,
      });
    }
  }

  process.exit(0);
}

prismaMigrate();
