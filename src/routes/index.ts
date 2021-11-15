import { Router } from "express";
import { authenticateRouter } from "./authenticate.routes";
import { githubRouter } from "./github.routes";
import { messagesRouter } from "./messages.routes";
import { profileRouter } from "./profile.routes";

const routes = Router();

routes.use('/github', githubRouter);
routes.use('/authenticate', authenticateRouter);
routes.use('/messages', messagesRouter);
routes.use('/profile', profileRouter);

export { routes }; 