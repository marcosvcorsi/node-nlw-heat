import { Request, Response } from "express";
import { IController } from "../contracts";
import { makeFindLastMessagesService } from "../factories/services/find-last-messages";

export class FindLastMessagesController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit = 3 } = request.query;

    const findLastMessagesService = makeFindLastMessagesService();

    const messages = await findLastMessagesService.execute({ count: Number(limit) });

    return response.json(messages);
  }
}