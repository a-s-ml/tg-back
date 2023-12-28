import "dotenv/config"
import axios, { AxiosError } from "axios"
import { Injectable } from "@nestjs/common"
import { ChatMemberInterface } from "src/interfaces/types/ChatMember.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { UserProfilePhotosInterface } from "src/interfaces/types/UserProfilePhotos.interface"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { HttpService } from "@nestjs/axios"
import { catchError, firstValueFrom } from "rxjs"

@Injectable()
export class GetTgService {
	constructor(private httpService: HttpService) {}

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

	async tgGetChatMember(
		chat_id: bigint,
		user_id: bigint
	): Promise<ChatMemberInterface> {
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

	async tgGetFilePhoto(unic_id: string): Promise<any> {
		const { data } = await firstValueFrom(
			this.httpService.get(`${process.env.BASE_URL}getFile?file_id=${unic_id}`).pipe(
				catchError((error: AxiosError) => {
					console.log(error.response.data)
					throw "error"
				})
			)
		)
		return data.result.file_path
	}

	async tgGetUserProfilePhotos(
		id: bigint
	): Promise<UserProfilePhotosInterface> {
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
