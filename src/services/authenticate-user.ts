import { GithubApi } from '../api/github';
import { IService } from '../contracts';

type Params = {
  code: string;
}

type Result = void;

export class AuthenticateUserService implements IService<Params, Result> {
  constructor(
    private readonly githubApi: GithubApi,
  ) {}

  async execute({ code }: Params): Promise<Result> {
    const data = await this.githubApi.fetchUserData({
      code, 
    })

    console.log(data);
  }
}