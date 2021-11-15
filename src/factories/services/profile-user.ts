import { ProfileUserService } from "../../services/profile-user"
import { makeUsersRepository } from "../repositories/users"

export const makeProfileUserService = (): ProfileUserService => {
  return new ProfileUserService(
    makeUsersRepository(),
  )
}