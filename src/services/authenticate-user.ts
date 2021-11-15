import { User } from '.prisma/client';
import { GithubApi } from '../api/github';
import { IService } from '../contracts';
import { UsersRepository } from '../database/prisma/repositories/users';
import { JwtProvider } from '../providers/jwt';

type Params = {
  code: string;
}

type Result = {
  token: string;
  user: User,
};

export class AuthenticateUserService implements IService<Params, Promise<Result>> {
  constructor(
    private readonly githubApi: GithubApi,
    private readonly usersRepository: UsersRepository,
    private readonly jwtProvider: JwtProvider,
  ) {}

  async execute({ code }: Params): Promise<Result> {
    const userData = await this.githubApi.fetchUserData({
      code, 
    })

    const { id, avatar_url, login, name} = userData;

    let user = await this.usersRepository.findByGithubId(id);

    if (!user) {
      user = await this.usersRepository.create({
        github_id: id,
        avatar_url,
        login,
        name,
      });
    }

    const token = await this.jwtProvider.generateToken({
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id,
      }
    })

    return { token, user };
  }
}