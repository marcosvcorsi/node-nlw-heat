import axios from 'axios';

type FetchDataParams = {
  code: string;
}

export class GithubApi {
  constructor(
    private readonly clientId: string,
    private readonly clientSecret: string,
  ) { }

  async fetchUserData({ code }: FetchDataParams) {
    const { data } = await axios.post('https://github.com/login/oauth/access_token', null, {
      params: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
      },
      headers: {
        "Accept": "application/json",
      }
    });

    return data;
  }
}