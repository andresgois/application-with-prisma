import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "1023a31c-ae83-403b-af83-956e9d6b763b",
    },
    include: {
      modules: true,
    },
  });
  console.log(result);
  console.log(JSON.stringify(result));
}

main();
