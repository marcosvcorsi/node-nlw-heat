import { FindLastMessagesService } from "../../services/find-last-messages";
import { makeMessagesRepository } from "../repositories/messages";

export const makeFindLastMessagesService = (): FindLastMessagesService => {
  return new FindLastMessagesService(
    makeMessagesRepository(),
  )
}