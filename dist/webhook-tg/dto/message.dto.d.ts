import { ChatDto } from "./chat.dto";
import { LocationDto } from "./location.dto";
import { UserDto } from "./user.dto";
export declare class MessageDto {
    message_id: number;
    message_thread_id?: number;
    from?: UserDto;
    sender_chat?: ChatDto;
    date: number;
    chat: ChatDto;
    forward_from?: UserDto;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_sender_name?: string;
    forward_date?: number;
    is_topic_message?: boolean;
    is_automatic_forward?: boolean;
    reply_to_message?: MessageDto;
    via_bot?: UserDto;
    edit_date?: number;
    has_protected_content?: boolean;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: object;
    animation?: object;
    audio?: object;
    document?: object;
    photo?: object;
    sticker?: object;
    story?: object;
    video?: object;
    video_note?: object;
    voice?: object;
    caption?: string;
    caption_entities?: object;
    has_media_spoiler?: boolean;
    contact?: object;
    dice?: object;
    game?: object;
    poll?: object;
    venue?: object;
    location?: LocationDto;
    new_chat_members?: object;
    left_chat_member?: UserDto;
    new_chat_title?: string;
    new_chat_photo?: object;
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    message_auto_delete_timer_changed?: object;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: MessageDto;
    invoice?: object;
    successful_payment?: object;
    user_shared?: object;
    chat_shared?: object;
    connected_website?: string;
    write_access_allowed?: object;
    passport_data?: object;
    proximity_alert_triggered?: object;
    forum_topic_created?: object;
    forum_topic_edited?: object;
    forum_topic_closed?: object;
    forum_topic_reopened?: object;
    general_forum_topic_hidden?: object;
    general_forum_topic_unhidden?: object;
    video_chat_scheduled?: object;
    video_chat_started?: object;
    video_chat_ended?: object;
    video_chat_participants_invited?: object;
    web_app_data?: object;
    reply_markup?: object;
}
