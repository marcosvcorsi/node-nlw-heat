import { CreateMessageService } from "../../services/create-message"
import { makeMessagesRepository } from "../repositories/messages"

export const makeCreateMessageService = (): CreateMessageService => {
  return new CreateMessageService(
    makeMessagesRepository(),
  )
}