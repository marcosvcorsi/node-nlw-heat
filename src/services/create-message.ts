import { Message } from ".prisma/client";
import { IService } from "../contracts";
import { MessagesRepository } from "../database/prisma/repositories/messages";

type Params = {
  text: string;
  userId: string;
}

export class CreateMessageService implements IService<Params, Promise<Message>> {
  constructor(
    private readonly messagesRepository: MessagesRepository,
  ) {}

  async execute({ text, userId }: Params): Promise<Message> {
    return this.messagesRepository.create({
      text,
      user_id: userId,
    });
  }
}