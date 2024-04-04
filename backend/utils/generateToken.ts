import jwt from 'jsonwebtoken';
import { Response } from "express";
import config from '../config/config';

const generateTokenAndSetCookie = (userId: string, res: Response) => {

    const JWT_SECRET = config.JWT_SECRET;

    if(!JWT_SECRET) {
        console.log('There is no JWT_SECRET')
        return;
    }

    const token = jwt.sign({userId}, JWT_SECRET ,{
        expiresIn: '15d'
    } );

    res.cookie('jwt', token, {
        maxAge:  15 * 24 * 60 * 60 * 1000, // 15 days in miliseconds,
        httpOnly: true, // prevent xss attacks cross-site scripting attracks
        sameSite: "strict", // crf attacks cross-site request forgery attacks
        secure: config.NODE_ENV !== 'development',
    });
}

export default generateTokenAndSetCookie;