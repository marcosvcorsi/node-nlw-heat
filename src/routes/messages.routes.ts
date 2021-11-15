import { Router } from "express";
import { CreateMessageController } from "../controllers/create-message";
import { FindLastMessagesController } from "../controllers/find-last-messages";
import { ensureAuthenticate } from "../middlewares/ensure-authenticate";

const messagesRouter = Router();

const createMessageController = new CreateMessageController();
const findLastMessages = new FindLastMessagesController();

messagesRouter.get('/last', findLastMessages.handle);
messagesRouter.post("/", ensureAuthenticate, createMessageController.handle);

export { messagesRouter };