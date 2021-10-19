import {Router} from "express";
import {authenticateUserController} from "../../../modules/githubSocialAuthentication/useCases/authenticateUser";
import {createMessageController} from "../../../modules/sendMessages/useCases/createMessages";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated";

const routes = Router();

routes.post("/authenticate/github", (request, response) => {
    authenticateUserController.handle(request, response);
});

routes.post("/messages", ensureAuthenticated, (request, response) => {
    createMessageController.handle(request, response);
});

export {routes};