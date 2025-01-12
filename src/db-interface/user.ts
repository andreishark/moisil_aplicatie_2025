import { prisma } from "./db";

export default async function prismaExample() {
  await prisma.user.create({
    data: {
      name: "Elliott",
      email: "xelliottx@example-user.com",
    },
  });
}
