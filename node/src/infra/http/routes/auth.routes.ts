import {Router} from "express";
import {authenticateUserController} from "../../../modules/githubSocialAuthentication/useCases/authenticateUser";

const authRoutes = Router();

authRoutes.post("/github", (request, response) => {
    authenticateUserController.handle(request, response);
});

export { authRoutes }