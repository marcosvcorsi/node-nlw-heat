import { Router } from "express";
import { AuthenticateUserController } from "../controllers/authenticate-user";

const authenticateRouter = Router();

const authenticationController = new AuthenticateUserController();

authenticateRouter.post('/', authenticationController.handle);

export { authenticateRouter };