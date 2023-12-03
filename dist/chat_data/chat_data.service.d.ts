import { CreateChatDatumDto } from './dto/create-chat_datum.dto';
import { UpdateChatDatumDto } from './dto/update-chat_datum.dto';
export declare class ChatDataService {
    create(createChatDatumDto: CreateChatDatumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatDatumDto: UpdateChatDatumDto): string;
    remove(id: number): string;
}
