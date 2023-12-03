import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDatumDto } from './create-chat_datum.dto';

export class UpdateChatDatumDto extends PartialType(CreateChatDatumDto) {}
