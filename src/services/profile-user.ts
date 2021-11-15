import { User } from ".prisma/client";
import { IService } from "../contracts";
import { UsersRepository } from "../database/prisma/repositories/users";

type Params = {
  id: string;
}

type Result = Promise<User | undefined>;

export class ProfileUserService implements IService<Params, Result> {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) { }

  async execute({ id }: Params): Result {
    const user = await this.usersRepository.findById(id);

    return user;
  }
}