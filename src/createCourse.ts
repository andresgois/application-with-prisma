import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java 17",
      duration: 500,
      description: "Curso",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Andre Gois",
          },
          create: {
            name: "Andre Gois",
          },
        },
      },
    },
  });
  console.log(result);
}

main();
