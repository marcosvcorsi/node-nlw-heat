import { Router } from "express";
import { ProfileUserController } from "../controllers/profile-user";
import { ensureAuthenticate } from "../middlewares/ensure-authenticate";

const profileRouter = Router();

const profileUserController = new ProfileUserController();

profileRouter.get('/', ensureAuthenticate, profileUserController.handle);

export { profileRouter };