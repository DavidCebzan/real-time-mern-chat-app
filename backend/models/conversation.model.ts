import mongoose, {Schema, model} from "mongoose";
import { IConversation } from "../types/db";


const conversationSchema = new Schema<IConversation>({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: []
        },
    ]
    // createdAt, updatedAt
}, {timestamps: true})

const Conversation = model<IConversation>('Conversation', conversationSchema);

export default Conversation;