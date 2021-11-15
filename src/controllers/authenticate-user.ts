import { Request, Response } from "express";
import { GithubApi } from "../api/github";
import { IController } from "../contracts";
import { AuthenticateUserService } from "../services/authenticate-user";

export class AuthenticateUserController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const authenticateUserService = new AuthenticateUserService(
      new GithubApi(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET),
    );

    await authenticateUserService.execute({ code: String(code) });
    
    return response.send();
  }
}