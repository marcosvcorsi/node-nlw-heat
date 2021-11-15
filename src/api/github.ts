import axios from 'axios';

type FetchUserDataParams = {
  code: string;
}

type FetchUserTokenResponse = {
  access_token: string;
}

type FetchUserDataResponse = {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
}

export class GithubApi {
  constructor(
    private readonly clientId: string,
    private readonly clientSecret: string,
  ) { }

  async fetchUserData({ code }: FetchUserDataParams): Promise<FetchUserDataResponse> {
    const { data: userTokenResponse } = await axios.post<FetchUserTokenResponse>('https://github.com/login/oauth/access_token', null, {
      params: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
      },
      headers: {
        "Accept": "application/json",
      }
    });

    const { data: userData } = await axios.get<FetchUserDataResponse>('https://api.github.com/user', {
      headers: { 
        authorization: `Bearer ${userTokenResponse.access_token}`,
      }
    });

    return userData;
  }
}