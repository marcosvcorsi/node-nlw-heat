import { Router } from "express";
import { authenticateRouter } from "./authenticate.routes";
import { githubRouter } from "./github.routes";

const routes = Router();

routes.use('/github', githubRouter);
routes.use('/authenticate', authenticateRouter);

export { routes }; 