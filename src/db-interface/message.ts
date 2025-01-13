import { prisma } from "./db";

export async function get_messages_page(
  page: number,
  message_per_page: number,
) {
  return await prisma.message.findMany({
    skip: page * message_per_page,
    take: message_per_page,
  });
}

export async function post_message(username: string, message: string) {
  await prisma.message.create({
    data: {
      name: username,
      message: message,
    },
  });
}
