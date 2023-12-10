import { PhotoSizeDto } from "./PhotoSize.dto";
export declare class DocumentDto {
    file_id: string;
    file_unique_id: string;
    thumbnail?: PhotoSizeDto;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}
