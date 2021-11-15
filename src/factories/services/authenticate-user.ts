import { AuthenticateUserService } from "../../services/authenticate-user";
import { makeGithubApi } from "../api/github";
import { makeJwtProvider } from "../providers/jwt";
import { makeUsersRepository } from "../repositories/users";

export const makeAuthenticateUserService = (): AuthenticateUserService => {
  return new AuthenticateUserService(
    makeGithubApi(),
    makeUsersRepository(),
    makeJwtProvider(),
  );
}