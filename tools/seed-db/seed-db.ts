import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { UserCreateInput } from "@libs/api/generated-db-types";
const prisma = new PrismaClient();

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
