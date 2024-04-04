import {Schema, model} from "mongoose";
import { IUser } from "../types/db";

const userSchema = new Schema<IUser>({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    profilePic: {
        type: String,
        default: ''
    }
})

const User = model<IUser>('User', userSchema);

export default User;