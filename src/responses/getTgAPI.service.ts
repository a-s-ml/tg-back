import "dotenv/config"
import axios, { AxiosError } from "axios"
import { Injectable } from "@nestjs/common"
import { ChatMemberInterface } from "src/interfaces/types/ChatMember.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { UserProfilePhotosInterface } from "src/interfaces/types/UserProfilePhotos.interface"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { HttpService } from "@nestjs/axios"
import { catchError, firstValueFrom } from "rxjs"
import { createWriteStream } from "fs"

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
			this.httpService
				.get(`${process.env.BASE_URL}getFile?file_id=${unic_id}`)
				.pipe(
					catchError((error: AxiosError) => {
						console.log(error.response.data)
						throw "error"
					})
				)
		)

		const response = await axios.get(
			`${process.env.FILE_URL}/${data.result.file_path}`,
			{
				responseType: "blob" 
			}
		)
		return Buffer.from(response.data, 'binary').toString('base64')


		// return axios({
		// 	method: 'GET',
		// 	url: `${process.env.FILE_URL}/${data.result.file_path}`,
		// 	responseType: 'blob'
		//   })
		//   .then(response => {
		// 	if (response) {
		// 	  const file = new Blob([response.data], {type:'image/png'})
		// 	  return file
		// 	}
		// 	return Promise.reject('An unknown error occurred');
		//   });



		//   return axios({
		// 	method: 'get',
		// 	url: 'https://bit.ly/2mTM3nY',
		// 	responseType: 'stream'
		//   })
		// 	.then(function (response) {
		// 	  response.data.pipe(createWriteStream('ada_lovelace.jpg'))
		// 	});

			// return axios({
			// 	method: 'get',
			// 	url: 'https://bit.ly/2mTM3nY',
			// 	responseType: 'arraybuffer'
			//   })
			//   .then(response => { return Buffer.from(response.data, 'binary').toString('base64')})


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
