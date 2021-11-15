import { GithubApi } from "../../api/github"

export const makeGithubApi = (): GithubApi => {
  return new GithubApi(
    process.env.GITHUB_CLIENT_ID,
    process.env.GITHUB_CLIENT_SECRET,
  );
}