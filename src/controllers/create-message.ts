import { Request, Response } from "express";
import { IController } from "../contracts";
import { makeCreateMessageService } from "../factories/services/create-message";
import { CreateMessageService } from "../services/create-message";

export class CreateMessageController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request;
    const { text } = request.body;

    const createMessageService = makeCreateMessageService();

    const message = await createMessageService.execute({
      text,
      userId
    });

    return response.status(201).json(message);
  }
}