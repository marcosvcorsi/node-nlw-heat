import { Message } from ".prisma/client";
import { IService } from "../contracts";
import { MessagesRepository } from "../database/prisma/repositories/messages";

type Params = {
  count: number;
}

type Result = Promise<Message[]>;

export class FindLastMessagesService implements IService<Params, Result> {
  constructor(
    private readonly messagesRepository: MessagesRepository,
  ) { }

  async execute({ count }: Params): Promise<Message[]> {
    return this.messagesRepository.findLastMessages(count);
  }
}