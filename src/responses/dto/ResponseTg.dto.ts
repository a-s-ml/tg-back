import { MessageDto } from "src/webhook-tg/dto/Message.dto";

export interface ResponseTgDto {
    ok: boolean;
    result: MessageDto;
  }