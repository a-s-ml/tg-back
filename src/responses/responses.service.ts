import 'dotenv/config'
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { AnswerCallbackQueryDto } from 'src/webhook-tg/dto/answerCallbackQuery.dto';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';

@Injectable()
export class ResponsesService {
  async sendMessage(message: SendMessageDto) {
    try {
      return await axios.get(`${process.env.SEND_MESSAGE}chat_id=${message.chat_id}&text=${message.text}&reply_markup=${JSON.stringify(message.reply_markup)}`)
    } catch (error) {
      return error;
    }
  }
  async sendPoll(message: SendPollDto) {
    try {
      return await axios.get(`${process.env.SEND_POLL}chat_id=${message.chat_id}&question=${message.question}&options=${JSON.stringify(message.options)}&correct_option_id=${message.correct_option_id}`)
    } catch (error) {
      return error;
    }
  }
  async sendPhoto(message: SendPhotoDto) {
    try {
      return await axios.get(`${process.env.SEND_PHOTO}chat_id=${message.chat_id}&caption=${message.caption}&photo=${message.photo}&reply_markup=${JSON.stringify(message.reply_markup)}`)
    } catch (error) {
      return error;
    }
  }
  async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto) {
    try {
      return await axios.get(`${process.env.SEND_ANSWER_CALLBACKQUERY}${(answerCallbackQuery)}`)
    } catch (error) {
      return error;
    }
  }
}