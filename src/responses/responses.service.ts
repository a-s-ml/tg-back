import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method"
import { EditMessageTextMethod } from "src/interfaces/metods/editMessageText.method"
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method"
import { EditMessageCaptionMethod } from "src/interfaces/metods/editMessageCaption.method"
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method"
import { editMessageReplyMarkupMethod } from "src/interfaces/metods/editMessageReplyMarkup.method"
import { AnswerCallbackQueryMethod } from "src/interfaces/metods/answerCallbackQuery.method"

@Injectable()
export class ResponsesService {
	async sendMessage(message: SendMessageMethod) {
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
			return this.errorResponse(error, message.chat_id)
		}
	}

	async editMessageText(message: EditMessageTextMethod) {
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
			return this.errorResponse(error)
		}
	}

	async sendPoll(message: SendPollMethod) {
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
			`
			const response = await axios.get(url)
			return response.data.result
		} catch (error) {
			return this.errorResponse(error, message.chat_id)
		}
	}

	async editMessageCaption(message: EditMessageCaptionMethod) {
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
			return this.errorResponse(error)
		}
	}

	async sendPhoto(message: SendPhotoMethod) {
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
			return this.errorResponse(error, message.chat_id)
		}
	}

	async editMessageReplyMarkup(message: editMessageReplyMarkupMethod) {
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

	async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryMethod) {
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

	async errorResponse(error: any, chat: bigint = 0n) {
		if (error.response) {
			this.sendLogToAdmin(`data: ${JSON.stringify(error.response.data)}\n${chat}`)
			// this.sendLogToAdmin('status: ' + error.response.status)
			// this.sendLogToAdmin('headers ' + error.response.headers)
		} else if (error.request) {
			this.sendLogToAdmin(`request: ${JSON.stringify(error.request)}\n${chat}`)
		} else {
			this.sendLogToAdmin(`message: ${JSON.stringify(error.message)}\n${chat}`)
		}
		this.sendLogToAdmin(`config: ${JSON.stringify(error.config)}\n${chat}`)
	}
}
