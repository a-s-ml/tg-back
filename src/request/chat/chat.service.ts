import { Injectable } from "@nestjs/common"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { GetTgService } from "src/responses/getTgAPI.service"
import { ResponsesService } from "src/responses/responses.service"
import { QuestionTypeService } from "../question-type/question-type.service"
import { TimeService } from "../time/time.service"
import { EventInterface } from "./models/events.interface"

@Injectable()
export class ChatService {
	constructor(
		private dbService: DbService,
		private questionTypeService: QuestionTypeService,
		private timeService: TimeService,
		private getTgService: GetTgService,
		private responsesService: ResponsesService,
		private eventEmitter: EventEmitter2
	) {}

	async createChat(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
	}

	async createGroup(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
	}

	async findById(id: number) {
		return await this.dbService.chat.findUnique({
			where: {
				id
			}
		})
	}

	async clean() {
		const max = await this.dbService.chat.findMany()
		for (var key in max) {
			const res = await this.responsesService.sendChatAction(
				max[key].chat,
				"typing"
			)
			if (res.ok === true) {
				console.log(max[key].chat + "true")
			}
			if (res.ok === false) {
				console.log(max[key].chat + "false")
				await this.removeByChat(max[key].chat)
			}
		}
	}

	async findByChatId(chat: bigint) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat.findUnique({
					where: {
						chat
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async findByReferal(chat: bigint) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat.findMany({
					where: {
						referral: chat
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async countByReferal(chat: bigint) {
		return await this.dbService.chat.count({
			where: {
				referral: chat
			}
		})
	}

	async update(chat: bigint, updateChatDto: Prisma.chatUpdateInput) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat.update({
					where: {
						chat
					},
					data: updateChatDto
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async updateTimeChat(chat: bigint, time: Prisma.chatUpdateInput) {
		const req = await this.dbService.chat.update({
			where: {
				chat
			},
			data: time
		})
		return await this.timeService.findOne(req.time)
	}

	async updateTypeChat(chat: bigint, question_type: Prisma.chatUpdateInput) {
		const req = await this.dbService.chat.update({
			where: {
				chat
			},
			data: question_type,
			
		})
		return await this.questionTypeService.findOne(req.question_type)
	}

	async verificationExistence(from: UserInterface) {
		const checkUser = await this.findByChatId(from.id)
		if (!checkUser) {
			await this.createChat({
				chat: from.id,
				bot: from.is_bot ? 1 : 0
			})
			const event = new EventInterface()
			event.name = "new user"
			event.description = String(from.id)
			this.eventEmitter.emit("event", event)
		}
	}

	async verificationExistenceChat(chat: ChatInterface, from: UserInterface) {
		const checkChat = await this.findByChatId(chat.id)
		if (!checkChat) {
			await this.createGroup({
				chat: chat.id,
				type: chat.type,
				referral: from.id,
				bot: chat.type ? 1 : 0
			})
			const memberCount = await this.getTgService.tgGetChatMemberCount(
				chat.id
			)
			const event = new EventInterface()
			event.name = "new group"
			event.description = String(chat.id)
			this.eventEmitter.emit("event", event)
		}
	}

	async groupInfoById(chat: bigint) {
		return await this.getTgService.tgGetChat(chat)
	}

	async groupMemberCountById(chat: bigint) {
		return await this.getTgService.tgGetChatMemberCount(chat)
	}

	async tgGetFilePhoto(unic_id: string) {
		return await this.getTgService.tgGetFilePhoto(unic_id)
	}

	async removeByChat(chat_id: bigint) {
		return await this.dbService.chat.delete({
			where: {
				chat: chat_id
			}
		})
	}

	async removeById(id: number) {
		return await this.dbService.chat.delete({
			where: {
				id
			}
		})
	}
}
