import { Request, Response } from "express";
import { IUser } from "../types/db";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

interface CustomRequest extends Request {
    user?: IUser;
}

export const sendMessage = async (req: CustomRequest, res: Response) => {
    try {
        console.log('NESTO', req.params.id);
        const {message} = req.body as {message: string};
        const {id: recieverId} = req.params as {id: string};

        const ownUser = req.user;

        if(!ownUser) {
            return 
        }

        const senderId = ownUser._id;

      let conversation =  await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            }
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        };

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY

        // run in parallel
        await Promise.all([conversation.save(),  newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log('Error in sendMessage controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}