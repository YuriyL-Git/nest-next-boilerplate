import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { UserCreateInput } from "@libs/api/generated-db-types";
const prisma = new PrismaClient();

const users: UserCreateInput[] = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456",
  },
  {
    name: "John Smith",
    email: "johnSmith@gmail.com",
    password: "123456",
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
