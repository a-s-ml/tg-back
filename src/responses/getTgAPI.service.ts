import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { ChatMemberInterface } from "src/interfaces/types/ChatMember.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { UserProfilePhotosInterface } from "src/interfaces/types/UserProfilePhotos.interface"
import { ChatInterface } from "src/interfaces/types/Chat.interface"

@Injectable()
export class GetTgService {
	async tgGetChat(id: bigint): Promise<ChatInterface> {
		try {
			const getchat = await axios.get(
				`${process.env.BASE_URL}getChat?chat_id=${id}`
			)
			console.log(getchat.data.result)
			return getchat.data.result
		} catch (error) {
			console.log(error)
		}
	}

	async tgGetChatAdministrators(id: bigint): Promise<ChatMemberInterface> {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatAdministrators?chat_id=${id}`
			)
		} catch (error) {
			console.log(error)
		}
	}

	async tgGetChatMember(chat_id: bigint, user_id: bigint): Promise<ChatMemberInterface> {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatMember?chat_id=${chat_id}&user_id=${user_id}`
			)
		} catch (error) {
			console.log(error)
		}
	}

	async tgGetChatMemberCount(id: bigint): Promise<number> {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getChatMemberCount?chat_id=${id}`
			)
		} catch (error) {
			console.log(error)
		}
	}

	async tgGetFilePhoto(unic_id: string) {
		axios.get(`${process.env.BASE_URL}getFile?file_id=${unic_id}`)
		.then(async function (res1) {
			await this.tgGetFile(res1.data.result.file_path)
		})
		.catch(function (error) {
		  console.log(error);
		})
	}

	async tgGetFile(patch: string) {
		console.log(patch)
		axios.get(`${process.env.FILE_URL}/${patch}`)
		.then(function (res) {
			return res
		})
		.catch(function (error) {
		  console.log(error);
		})
	}

	async tgGetUserProfilePhotos(id: bigint): Promise<UserProfilePhotosInterface> {
		try {
			return await axios.get(
				`${process.env.BASE_URL}getUserProfilePhotos?user_id=${id}&offset=0&limit=1`
			)
		} catch (error) {
			console.log(error)
		}
	}

	async tgGetMe(): Promise<UserInterface> {
		try {
			return await axios.get(`${process.env.BASE_URL}Getme`)
		} catch (error) {
			console.log(error)
		}
	}
}
