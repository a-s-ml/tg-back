import 'dotenv/config'
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { AnswerCallbackQueryDto } from 'src/webhook-tg/dto/answerCallbackQuery.dto';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';

@Injectable()
export class ResponsesService {
  async sendMessage(message: SendMessageDto) {
    try {
      return await axios.get(`${process.env.SEND_MESSAGE}chat_id=${message.chat_id}&text=${encodeURI(message.text)}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=${message.disable_web_page_preview}&parse_mode=${message.parse_mode}`)
    } catch (error) {
      return error;
    }
  }
  async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto) {
    try {
      return await axios.get(`${process.env.SEND_ANSWER_CALLBACKQUERY}callback_query_id=${answerCallbackQuery.callback_query_id}&text=${encodeURI(answerCallbackQuery.text)}&parse_mode=HTML`)
    } catch (error) {
      return error;
    }
  }
}