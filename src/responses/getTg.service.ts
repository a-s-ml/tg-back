import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"

@Injectable()
export class GetTgService {
	async tgGetChat(id: bigint) {
		try {
			const getchat = await axios.get(
				`${process.env.BASE_URL}getChat?chat_id=${id}`
			)
			console.log(getchat.data.result)
			return getchat.data.result
		} catch (error) {
			return error
		}
	}

	async tgGetChatAdministrators(id: bigint) {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatAdministrators?chat_id=${id}`
			)
		} catch (error) {
			return error
		}
	}

	async tgGetChatMember(chat_id: bigint, user_id: bigint) {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatMember?chat_id=${chat_id}&user_id=${user_id}`
			)
		} catch (error) {
			return error
		}
	}

	async tgGetChatMemberCount(id: bigint) {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatMemberCount?chat_id=${id}`
			)
		} catch (error) {
			return error
		}
	}

	async tgGetUserProfilePhotos(id: bigint) {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getUserProfilePhotos?user_id=${id}&offset=0&limit=1`
			)
		} catch (error) {
			return error
		}
	}

	async tgGetMe() {
		try {
			return await axios.get(`${process.env.BASE_URL}Getme`)
		} catch (error) {
			return error
		}
	}
}
