import { Router } from "express";
import { CreateMessageController } from "../controllers/create-message";
import { ensureAuthenticate } from "../middlewares/ensure-authenticate";

const messagesRouter = Router();

const createMessageController = new CreateMessageController();

messagesRouter.post("/", ensureAuthenticate, createMessageController.handle);

export { messagesRouter };