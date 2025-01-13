import { get_messages_page, post_message } from "@/db-interface/message";

export async function GET(request: Request) {
  const res = await request.json();

  if (!(Object.hasOwn(res, "page") || Object.hasOwn(res, "message_per_page"))) {
    return Response.error();
  }

  const messages = await get_messages_page(res.page, res.message_per_page);

  return Response.json({ messages: messages });
}

export async function POST(request: Request) {
  const res = await request.json();

  if (!(Object.hasOwn(res, "name") || Object.hasOwn(res, "message"))) {
    return Response.error();
  }

  await post_message(res.name, res.message);

  return Response.json({}, { status: 201 });
}
