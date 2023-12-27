import { responseUserDataInterface } from "./responseUserData.interface";
import { responseUserGroupInterface } from "./responseUserGroup.interface";

export class responseValidateInterface {
    validate: boolean;
    UserData: responseUserDataInterface;
    group: any[];
}