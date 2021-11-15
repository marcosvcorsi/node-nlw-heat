import { Request, Response } from "express";
import { IController } from "../contracts";
import { makeProfileUserService } from "../factories/services/profile-user";

export class ProfileUserController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request;
    
    const profileUserService = makeProfileUserService();

    const user = await profileUserService.execute({ id: String(userId) })

    return response.json(user);
  }
}