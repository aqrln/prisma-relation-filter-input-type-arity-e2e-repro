import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  await prisma.b1.findMany({
    where: {
      brf: {
        is: null,
      },
    },
  });

  await prisma.b1.findMany({
    where: {
      b2rf: {
        is: null,
      },
    },
  });

  await prisma.b2.findMany({
    where: {
      brf: {
        is: null,
      },
    },
  });

  await prisma.b2.findMany({
    where: {
      b2rf: {
        is: null,
      },
    },
  });
}

void main();
