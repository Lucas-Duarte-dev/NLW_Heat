import {ProfileUserUseCase} from "./ProfileUserUseCase";
import {ProfileUserController} from "./ProfileUserController";


const profileUserUseCase = new ProfileUserUseCase();

const profileUserController =  new ProfileUserController(profileUserUseCase);

export {profileUserController};