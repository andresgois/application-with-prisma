import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "1023a31c-ae83-403b-af83-956e9d6b763b",
      fk_id_module: "ef83d645-bb24-4712-a138-319d73ecc660",
    },
  });
  console.log(result);
}

main();
