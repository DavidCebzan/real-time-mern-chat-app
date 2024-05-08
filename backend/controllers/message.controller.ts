import { Request, Response } from "express";
import { IUser } from "../types/db";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";
import { getRevieverSocketId, io } from "../socket/socket";

interface CustomRequest extends Request {
    user?: IUser;
}

export const sendMessage = async (req: CustomRequest, res: Response) => {
    try {
        console.log('Send', req.params.id);
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

        // run in parallel
        await Promise.all([conversation.save(),  newMessage.save()]);
        
        // SOCKET IO FUNCTIONALITY
        const recieverSocketId = getRevieverSocketId(recieverId);

        if(recieverSocketId) {
            // io.to(socketId).emit() emit events to a specific client;
            io.to(recieverSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log('Error in sendMessage controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const getMessages = async (req: CustomRequest, res: Response) => {
    try {   
        console.log('Get messages');

        const {id: userToGetMessagesFrom} = req.params as {id: string};
        const ownId = req.user?._id

        const conversation = await Conversation.findOne({
            participants:{ $all: [userToGetMessagesFrom, ownId]}
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages;

        res.status(200).json(messages);   
    } catch (error) {
        console.log('Error in getMessages controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}