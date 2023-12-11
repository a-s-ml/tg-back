export interface ChatDbDto {
	id: number
	chat: bigint
	type: string
	bot: number
	date: Date
	referral: bigint
	question_type: number
	time: number
}
