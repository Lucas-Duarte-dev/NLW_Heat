import {GetLast3MessagesUseCase} from "./GetLast3MessagesUseCase";
import {GetLast3MessageController} from "./GetLast3MessageController";

const getLast3MessageUseCase = new GetLast3MessagesUseCase();

const getLast3MessageController = new GetLast3MessageController(getLast3MessageUseCase);

export {getLast3MessageController};