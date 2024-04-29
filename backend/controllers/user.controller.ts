import { Request, Response } from "express";
import { IUser } from "../types/db";
import User from "../models/user.model";

interface CustomRequest extends Request {
    user?: IUser;
}

export const getAllUsers = async (req: CustomRequest, res: Response) => {
    try {    
       const logedInUserId = req.user?._id;

        // get all user but not our own user
        // if we want all users then delete the object inside find function
        const allUsers = await User.find({ _id: {$ne: logedInUserId}}).select('-password');

        res.status(200).json(allUsers);
    } catch (error) {
        console.log('Error in getAllUsers controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}