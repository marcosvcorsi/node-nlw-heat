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

  async findLastMessages(take: number): Promise<Message[]> {
    const messages = await prismaClient.message.findMany({
      take,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true,
      }
    })

    return messages;
  }
}