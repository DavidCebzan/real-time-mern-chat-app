import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.log('Error in getMessages controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}