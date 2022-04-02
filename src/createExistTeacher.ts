import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso React JS",
      duration: 120,
      description: "Curso React JS O melhor",
      teacher: {
        connect: {
          id: "e2ee5520-cc7f-4e9c-a415-703fd298efb8",
        },
      },
    },
  });
  console.log(result);
}

main();
