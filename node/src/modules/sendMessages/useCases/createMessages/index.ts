import {CreateMessageUseCase} from "./CreateMessageUseCase";
import {CreateMessageController} from "./CreateMessageController";

const createMessageUseCase = new CreateMessageUseCase();

const createMessageController = new CreateMessageController(createMessageUseCase);

export {createMessageController};