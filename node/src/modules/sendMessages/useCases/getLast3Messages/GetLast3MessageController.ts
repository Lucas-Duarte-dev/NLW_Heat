import {Request, Response} from "express";
import {GetLast3MessagesUseCase} from "./GetLast3MessagesUseCase";

class GetLast3MessageController {

    constructor(private getLast3MessageUseCase: GetLast3MessagesUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const messages = await this.getLast3MessageUseCase.execute();

        return response.json(messages);
    }
}

export {GetLast3MessageController};