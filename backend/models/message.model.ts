import mongoose, {Schema, model} from "mongoose";
import { IMessage } from "../types/db";


const messageSchema = new Schema<IMessage>({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true
    }
    // createdAt, updatedAt
}, {timestamps: true})

const Message = model<IMessage>('Message', messageSchema);

export default Message;