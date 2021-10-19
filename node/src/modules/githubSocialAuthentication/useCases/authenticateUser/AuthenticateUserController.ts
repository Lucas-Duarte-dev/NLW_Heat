import {Request, Response} from "express";
import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase";

class AuthenticateUserController {

    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const {code} = request.body;

        try {
            const result = await this.authenticateUserUseCase.execute(code);

            return response.json(result);
        } catch (err) {
            return response.json(err.message);
        }
    }
}

export {AuthenticateUserController};