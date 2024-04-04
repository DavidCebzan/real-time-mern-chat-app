import { Types } from "mongoose";

export interface IUser {
    fullName: string,
    username: string,
    password: string,
    gender: 'male' | 'female',
    profilePic?: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface IMessage {
    senderId: Types.ObjectId,
    recieverId: Types.ObjectId,
    message: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface IConversation {
    participants: Types.ObjectId[],
    messages: Types.ObjectId[],
    createdAt?: string,
    updatedAt?: string,
}