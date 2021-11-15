import { Message } from ".prisma/client";
import { Server } from "socket.io";
import { IService } from "../contracts";
import { MessagesRepository } from "../database/prisma/repositories/messages";

type Params = {
  text: string;
  userId: string;
}

export class CreateMessageService implements IService<Params, Promise<Message>> {
  constructor(
    private readonly messagesRepository: MessagesRepository,
    private readonly socket: Server,
  ) { }


  async execute({ text, userId }: Params): Promise<Message> {
    const message = await this.messagesRepository.create({
      text,
      user_id: userId,
    });

    this.socket.emit("new_message", message);

    return message;
  }
}