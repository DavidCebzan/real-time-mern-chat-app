import mongoose, { Types } from "mongoose";

export interface IUser extends mongoose.Document {
    fullName: string,
    username: string,
    password: string,
    gender: 'male' | 'female',
    profilePic?: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface IMessage extends mongoose.Document {
    senderId: Types.ObjectId,
    recieverId: Types.ObjectId,
    message: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface IConversation extends mongoose.Document {
    participants: Types.ObjectId[],
    messages: Types.ObjectId[],
    createdAt?: string,
    updatedAt?: string,
}