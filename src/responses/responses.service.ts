import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { AnswerCallbackQueryDto } from "src/webhook-tg/dto/answerCallbackQuery.dto"
import { SendMessageDto } from "src/webhook-tg/dto/sendMessage,dto"
import { SendPollDto } from "src/webhook-tg/dto/sendPoll.dto"
import { EditMessageReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"
import { SendPhotoDto } from "src/webhook-tg/dto/sendPhoto.dto"
import { EditMessageTextDto } from "src/webhook-tg/dto/EditMessageText.dto"
import { EditMessageCaptionDto } from "src/webhook-tg/dto/EditMessageCaption.dto"

@Injectable()
export class ResponsesService {
	async sendMessage(message: SendMessageDto) {
		try {
			const url = `
			${process.env.SEND_MESSAGE}
			chat_id=${message.chat_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data.result
		} catch (error) {
			return this.sendLogToAdmin('j '+error.toJSON())
		}
	}

	async editMessageText(message: EditMessageTextDto) {
		try {
			const url = `
			${process.env.SEND_MESSAGE}
			message_id=${message.message_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			return this.sendLogToAdmin('j '+error.toJSON())
		}
	}

	async sendPoll(message: SendPollDto) {
		try {
			const url = `
			${process.env.SEND_POLL}
			chat_id=${message.chat_id}
			&question=${message.question}
			&options=${JSON.stringify(message.options)}
			&correct_option_id=${message.correct_option_id}
			&type=quiz
			&is_anonymous=${message.is_anonymous}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data.result
		} catch (error) {
			return this.sendLogToAdmin('j '+error.toJSON())
		}
	}

	async editMessageCaption(message: EditMessageCaptionDto) {
		try {
			const url = `
			${process.env.SEND_POLL}
			message_id=${message.message_id}
			&caption=${message.caption}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			return this.sendLogToAdmin('j '+error.toJSON())
		}
	}

	async sendPhoto(message: SendPhotoDto) {
		try {
			const url = `
			${process.env.SEND_PHOTO}
			chat_id=${message.chat_id}
			&caption=${message.caption}
			&photo=${message.photo}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data.result
		} catch (error) {
			return this.errorResponse(error)
		}
	}

	async editMessageReplyMarkup(message: EditMessageReplyMarkupDto) {
		try {
			const url = `
			${process.env.SEND_PHOTO}
			message_id=${message.message_id}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			const response = await axios.get(url)
			return response.data.result
		} catch (error) {
			return this.errorResponse(error)
		}
	}

	async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto) {
		try {
			const url = `
			${process.env.SEND_ANSWER_CALLBACKQUERY}
			callback_query_id=${answerCallbackQuery.callback_query_id}
			&text=${answerCallbackQuery.text}
			&show_alert=true
			`
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			return this.errorResponse(error)
		}
	}

	async sendLogToAdmin(data: string) {
		try {
			const adminChannel: bigint = -1001524297397n
			const text: string = encodeURI(data)
			const response = await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
			return response.data.result
		} catch (error) {
			return this.errorResponse(error)
		}
	}

	async errorResponse(error: any) {
		if (error.response) {
			this.sendLogToAdmin('data' + error.response.data)
			this.sendLogToAdmin('status' + error.response.status)
			this.sendLogToAdmin('headers' + error.response.headers)
		} else if (error.request) {
			this.sendLogToAdmin('request: '+error.request)
		} else {
			this.sendLogToAdmin('message: '+error.message)
		}
		this.sendLogToAdmin('config '+error.config)
	}
}
