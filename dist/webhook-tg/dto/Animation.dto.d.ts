import { PhotoSizeDto } from "./PhotoSize.dto";
export declare class AnimationDto {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail: PhotoSizeDto;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}
