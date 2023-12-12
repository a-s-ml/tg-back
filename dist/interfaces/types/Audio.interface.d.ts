import { PhotoSizeInterface } from "./PhotoSize.interface";
export declare class AudioInterface {
    file_id: string;
    file_unique_id: string;
    duration: number;
    performer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumbnail?: PhotoSizeInterface;
}
