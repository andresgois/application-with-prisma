import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso Elixir",
      duration: 220,
      description: "Curso Elixir",
      fk_id_teacher: "msmfkmdsçgkkiorjotlrm",
    },
  });
  console.log(result);
}

main();
