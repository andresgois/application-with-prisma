import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Robert C. Martin",
      books: {
        create: {
          name: "Código Limpo",
        },
      },
    },
  });
  console.log(result);
}

async function manyBooks() {
  const result = await prisma.authors.create({
    data: {
      name: "Mayk Brito",
      books: {
        createMany: {
          data: [
            { name: "Como começar a programar" },
            { name: "Como ser produtivo" },
          ],
        },
      },
    },
  });
  console.log(result);
}

manyBooks();
