import { PhotoSizeDto } from "./PhotoSize.dto"

export class UserProfilePhotosDto {
	total_count: number
	photos: Array<Array<PhotoSizeDto>>
}
