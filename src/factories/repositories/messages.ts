import { MessagesRepository } from "../../database/prisma/repositories/messages"

const messagesRepository = new MessagesRepository();

export const makeMessagesRepository = (): MessagesRepository => messagesRepository;