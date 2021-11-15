import { User } from ".prisma/client";
import { prismaClient } from "..";

export class UsersRepository {
  async findByGithubId(githubId: number): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        github_id: githubId,
      }
    })

    return user;
  }

  async create(data: Omit<User, "id">): Promise<User> {
    const user = await prismaClient.user.create({
      data,
    });

    return user;
  }
}