import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config/config";
import User from "../models/user.model";
import { IUser } from "../types/db";

interface CustomRequest extends Request {
    user?: IUser;
}

export const protectRoute = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        
        const token = req.cookies.jwt;

        if(!token) {
           return res.status(401).json({error: 'Unauthorized - No Token Provided'});
        }

        const jwtSecret = config.JWT_SECRET;

        if(!jwtSecret) {
            console.log('Missing jwt secret')
            return;
        }

        const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

        if(!decoded) {
            return res.status(401).json({error: 'Unauthorized - Invalid Token'});
         }

        const user = await User.findById(decoded.userId).select('-password');

        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        req.user = user;

        next();
    } catch (error) {
        console.log('Error in protectRoute controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}