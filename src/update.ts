import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  //const result = await prisma.courses.findFirst();
  const result = await prisma.courses.update({
    where: {
      id: "ad1dbae7-7142-4216-a58d-239554d032cf",
    },
    data: {
      duration: 300,
      name: "Curso PHP Advanced",
    },
  });

  console.log(result);
}

main();
