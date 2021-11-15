import { UsersRepository } from "../../database/prisma/repositories/users";

const usersRepository = new UsersRepository();

export const makeUsersRepository = () => usersRepository;