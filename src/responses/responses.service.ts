import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { EventEmitter2 } from "@nestjs/event-emitter"

import { SendPollMethod } from "src/interfaces/metods/sendPoll.method"
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method"
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method"
import { EditMessageTextMethod } from "src/interfaces/metods/editMessageText.method"
import { EditMessageCaptionMethod } from "src/interfaces/metods/editMessageCaption.method"
import { AnswerCallbackQueryMethod } from "src/interfaces/metods/answerCallbackQuery.method"
import { editMessageReplyMarkupMethod } from "src/interfaces/metods/editMessageReplyMarkup.method"

@Injectable()
export class ResponsesService {
	constructor(private eventEmitter: EventEmitter2) {}

	async sendMessage(message: SendMessageMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_MESSAGE}
			chat_id=${message.chat_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.editMessageText\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.sendMessage",
				eventText
			)
		}
	}

	async editMessageText(message: EditMessageTextMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_MESSAGE}
			message_id=${message.message_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.editMessageText\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.editMessageText",
				eventText
			)
		}
	}

	async sendPoll(message: SendPollMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_POLL}
			chat_id=${message.chat_id}
			&question=${message.question}
			&options=${JSON.stringify(message.options)}
			&correct_option_id=${message.correct_option_id}
			&type=quiz
			&is_anonymous=${message.is_anonymous}
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.sendPoll\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.sendPoll",
				eventText
			)
		}
	}

	async editMessageCaption(message: EditMessageCaptionMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_POLL}
			message_id=${message.message_id}
			&caption=${message.caption}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.editMessageCaption\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.editMessageCaption",
				eventText
			)
		}
	}

	async sendPhoto(message: SendPhotoMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_PHOTO}
			chat_id=${message.chat_id}
			&caption=${message.caption}
			&photo=${message.photo}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.sendPhoto\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.sendPhoto",
				eventText
			)
		}
	}

	async editMessageReplyMarkup(message: editMessageReplyMarkupMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_PHOTO}
			message_id=${message.message_id}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.editMessageReplyMarkup\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.editMessageReplyMarkup",
				eventText
			)
		}
	}

	async answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryMethod) {
		try {
			const response = await axios.get(
				`
			${process.env.SEND_ANSWER_CALLBACKQUERY}
			callback_query_id=${answerCallbackQuery.callback_query_id}
			&text=${answerCallbackQuery.text}
			&show_alert=true
			`
			)
			return response.data.result
		} catch (error) {
			const eventText: string = `
			errorResponse.answerCallback\n
			callback_query_id: ${answerCallbackQuery.callback_query_id}\n
			error: ${JSON.stringify(error.response.data)}
			`
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				eventText
			)
		}
	}
}
