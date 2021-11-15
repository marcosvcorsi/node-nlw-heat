import { Request, Response } from "express";
import { IController } from "../contracts";
import { makeAuthenticateUserService } from "../factories/services/authenticate-user";

export class AuthenticateUserController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const authenticateUserService = makeAuthenticateUserService();

    const auth = await authenticateUserService.execute({ code: String(code) });
    
    return response.json(auth);
  }
}