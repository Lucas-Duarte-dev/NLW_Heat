import {Request, Response} from "express";
import {CreateMessageUseCase} from "./CreateMessageUseCase";

class CreateMessageController {

    constructor(
        private createMessageUseCase: CreateMessageUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { text } = request.body;
        const { user_id } = request;

        try {
        const result = await this.createMessageUseCase.execute(text, user_id);

        return response.json(result);
        } catch (err) {
            return response.json(err.message);
        }
    }
}

export {CreateMessageController};