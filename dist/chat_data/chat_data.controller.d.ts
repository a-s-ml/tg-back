import { ChatDataService } from './chat_data.service';
import { CreateChatDatumDto } from './dto/create-chat_datum.dto';
import { UpdateChatDatumDto } from './dto/update-chat_datum.dto';
export declare class ChatDataController {
    private readonly chatDataService;
    constructor(chatDataService: ChatDataService);
    create(createChatDatumDto: CreateChatDatumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChatDatumDto: UpdateChatDatumDto): string;
    remove(id: string): string;
}
