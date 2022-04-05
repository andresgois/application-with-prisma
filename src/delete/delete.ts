import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "a4401f16-7d06-42d6-9e50-6c4f5e721933",
    },
  });
  console.log(result);
}

main();
