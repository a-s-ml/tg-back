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
import { MessageTgEvent } from "./interfaces/MessageTgEvent.interface"

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
			await this.eventEmitter.emitAsync(
				"successResponse.sendMessage",
				new MessageTgEvent({
					type: "sendMessage",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.editMessageText",
				new MessageTgEvent({
					type: "editMessageText",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.sendPoll",
				new MessageTgEvent({
					type: "sendPoll",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.editMessageText",
				new MessageTgEvent({
					type: "editMessageCaption",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.sendPhoto",
				new MessageTgEvent({
					type: "sendPhoto",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.editMessageReplyMarkup",
				new MessageTgEvent({
					type: "editMessageReplyMarkup",
					message: message,
					response: response.data.result
				})
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				message
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
			await this.eventEmitter.emitAsync(
				"successResponse.answerCallback",
				response.data.result,
				answerCallbackQuery
			)
			return response.data.result
		} catch (error) {
			await this.eventEmitter.emitAsync(
				"errorResponse.answerCallback",
				error.response.data,
				answerCallbackQuery
			)
		}
	}
}
