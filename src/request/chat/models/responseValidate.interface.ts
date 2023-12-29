import { responseProgressDataInterface } from "./responseProgressData.interface";
import { responseUserDataInterface } from "./responseUserData.interface";

export class responseValidateInterface {
    validate: boolean;
    UserData: responseUserDataInterface;
    ProgressData: responseProgressDataInterface;
}

