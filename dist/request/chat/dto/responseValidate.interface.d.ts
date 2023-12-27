import { responseUserDataInterface } from "./responseUserData.interface";
import { responseUserGroupInterface } from "./responseUserGroup.interface";
export declare class responseValidateInterface {
    validate: boolean;
    UserData: responseUserDataInterface;
    group: responseUserGroupInterface[];
}
