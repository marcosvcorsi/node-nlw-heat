import { Message } from ".prisma/client";
import { prismaClient } from "..";

export class MessagesRepository {
  async create(data: Omit<Message, "id" | "created_at">): Promise<Message> {
    const message = await prismaClient.message.create({
      data,
      include: {
        user: true,
      }
    });

    return message;
  }
}