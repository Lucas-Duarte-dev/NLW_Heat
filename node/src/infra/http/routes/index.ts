import { Router } from "express";
import { authenticateUserController } from "../../../modules/githubSocialAuthentication/useCases/authenticateUser";
import { createMessageController } from "../../../modules/sendMessages/useCases/createMessages";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { getLast3MessageController } from "../../../modules/sendMessages/useCases/getLast3Messages";
import { profileUserController } from "../../../modules/githubSocialAuthentication/useCases/profileUser";

const routes = Router();

routes.post("/authenticate/github", (request, response) => {
  authenticateUserController.handle(request, response);
});

routes.post("/message", ensureAuthenticated, (request, response) => {
  createMessageController.handle(request, response);
});

routes.get("/messages", (request, response) => {
  getLast3MessageController.handle(request, response);
});

routes.get("/profile", ensureAuthenticated, (request, response) => {
  profileUserController.handle(request, response);
});

export { routes };
