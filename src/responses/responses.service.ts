import 'dotenv/config'
import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { AnswerCallbackQueryDto } from 'src/webhook-tg/dto/answerCallbackQuery.dto';
import { EditMessageTextDto, SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { EditMessageCaptionDto, SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { EditMessageReplyMarkupDto } from 'src/constructors/keyboard/dto/keyboard.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';

@Injectable()
export class ResponsesService {

  async sendMessage(message: SendMessageDto) {
    try {
      const response = await axios.get(`${process.env.SEND_MESSAGE}chat_id=${message.chat_id}&text=${message.text}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async editMessageText(message: EditMessageTextDto) {
    try {
      const response = await axios.get(`${process.env.SEND_MESSAGE}message_id=${message.message_id}&text=${message.text}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async sendPoll(message: SendPollDto) {
    try {
      const response = await axios.get(`${process.env.SEND_POLL}chat_id=${message.chat_id}&question=${message.question}&options=${JSON.stringify(message.options)}&correct_option_id=${message.correct_option_id}&type=quiz&is_anonymous=false&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async editMessageCaption(message: EditMessageCaptionDto) {
    try {
      const response = await axios.get(`${process.env.SEND_POLL}message_id=${message.message_id}&caption=${message.caption}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async sendPhoto(message: SendPhotoDto) {
    try {
      const response = await axios.get(`${process.env.SEND_PHOTO}chat_id=${message.chat_id}&caption=${message.caption}&photo=${message.photo}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async editMessageReplyMarkup(message: EditMessageReplyMarkupDto) {
    try {
      const response = await axios.get(`${process.env.SEND_PHOTO}message_id=${message.message_id}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=true&parse_mode=HTML`)
      return response.data
    } catch (error) {
      return error;
    }
  }


  async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto) {
    try {
      const response = await axios.get(`${process.env.SEND_ANSWER_CALLBACKQUERY}callback_query_id=${answerCallbackQuery.callback_query_id}&text=${answerCallbackQuery.text}&show_alert=true`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

  async sendLogToAdmin(data: string) {
    try {
      const response = await axios.get(`${process.env.SEND_ANSWER_CALLBACKQUERY}chat_id=-1001524297397&text=${data}`)
      return response.data
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      // console.log(error.request)
      return error;
    }
  }

}