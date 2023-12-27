import { responseUserDataInterface } from "./responseUserData.interface";

export class responseValidateInterface {
    validate: boolean;
    UserData: responseUserDataInterface;
    groups: number;
    questions: number;
    answers: number;
}