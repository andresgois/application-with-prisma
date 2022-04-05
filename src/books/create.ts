import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetuta limpa",
      author_id: "4058cad5-109d-46d7-abb4-8ac60d64c1ab",
    },
  });
  console.log(result);
}

main();
