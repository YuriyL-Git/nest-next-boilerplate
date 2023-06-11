import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { UserCreateInput } from "@libs/api/generated-db-types";
import { environment } from "../../libs/shared/environement/src/index";
import { updateEnvFile } from "../env-update/update-env-keys";
const prisma = new PrismaClient();

const { nextServerPassword } = environment;

const nextServerAccount: UserCreateInput = {
  name: "Next_Server",
  email: "next_server@gmail.com",
  password: nextServerPassword,
};

const users: UserCreateInput[] = [
  {
    name: "John Doe",
    email: "johndoetest@gmail.com",
    // 123456
    password: "$2b$10$T16..if03x0ux11X5MkXIui7NiEguLsrfP2EXr0WCx8kfCRRUxp7a",
  },
  {
    name: "John Smith",
    email: "johnSmithtest@gmail.com",
    // 123456
    password: "$2b$10$T16..if03x0ux11X5MkXIui7NiEguLsrfP2EXr0WCx8kfCRRUxp7a",
  },
];

async function main() {
  const { id } = await prisma.user.create({
    data: nextServerAccount,
  });

  updateEnvFile(".env", [
    {
      key: "NEXT_SERVER_ACCOUNT_ID",
      value: id,
    },
  ]);

  await Promise.all(
    users.map((user) => {
      return prisma.user.create({
        data: user,
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  });
