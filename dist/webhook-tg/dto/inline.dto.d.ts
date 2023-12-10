import { LocationDto } from "./Location.dto";
import { UserDto } from "./user.dto";
export declare class InlineDto {
    id: string;
    from: UserDto;
    query: string;
    offset: string;
    chat_type: string;
    location: LocationDto;
}
