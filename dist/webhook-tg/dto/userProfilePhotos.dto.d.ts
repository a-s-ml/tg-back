export declare class UserProfilePhotosDto {
    total_count: number;
    photos: Array<Array<PhotoSizeDto>>;
}
export declare class PhotoSizeDto {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size: number;
}
