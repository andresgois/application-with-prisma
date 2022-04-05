import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "Spring Boot 2",
      description: "Spring",
      courses: {
        create: {
          course: {
            connect: {
              id: "1023a31c-ae83-403b-af83-956e9d6b763b",
            },
          },
        },
      },
    },
  });
  console.log(result);
}

main();
