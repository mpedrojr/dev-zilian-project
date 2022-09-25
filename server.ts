import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.create({
    data: {
      id: 'idjdjjdj',
      name: 'Tom Jose',
      email: 'tomjose@gmail.com'
    }
  })
console.log(user);

}

main();