import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "Angular",
          description: "Curso de angular",
          teacher: {
            connect: {
              id: "7534bd98-d6f2-4618-baab-962445b8793f",
            },
          },
        },
      },
      module: {
        create: {
          name: "Binds",
          description: "Tipos de bind",
        },
      },
    },
  });
  console.log(result);
}

main();
