import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso Node JS",
      duration: 200,
      description: "Curso Node",
      teacher: {
        create: {
          name: "Daniele Leão",
        },
      },
    },
  });
  console.log(result);
}

main();
