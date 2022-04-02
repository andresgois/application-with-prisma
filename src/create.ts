import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 120,
      name: "Curso PHP",
      description: "Curso PHP UTD",
    },
  });

  console.log(result);
}

main();
