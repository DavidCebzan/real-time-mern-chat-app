import { Request, Response } from "express";
import {IUser} from '../types/db'
import User from "../models/user.model";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken";

type SignupBody = IUser & {confirmPassword: string}

export const signup = async (req: Request, res: Response) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body as SignupBody;
        
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"});
        }
        
        const user = await User.findOne({username});
        
        if(user) {
            return res.status(400).json({error: "User already exists"});
        }

        const profilePic = `${gender}-picture::${username}`;
        
        // Hash pasword here
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        });


        if(!newUser) {
            return res.status(400).json({
                error: "Invalid user data"
            })
        }

        // generate jwt token
        generateTokenAndSetCookie(newUser._id, res);

        // save the user to the db
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
           fullName: newUser.fullName,
           username: newUser.username,
           profilePic: newUser.profilePic,
        });

    } catch (error) {
        console.log('Error in signup controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const login = async (req: Request, res: Response) => {
    console.log('Login')
    try {
        const {username, password} = req.body as IUser;

        const user = await User.findOne({username});

        if(!user) {
            return res.status(400).json({error: 'Invalid username or password'}); 
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({error: 'Invalid username or password'}); 
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
           fullName: user.fullName,
           username: user.username,
           profilePic: user.profilePic,
        });


    } catch (error) {
        console.log('Error in login controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const logout = (req: Request, res: Response) => {
    try {
        res.cookie('jwt', "", {maxAge: 0});

        res.status(200).json({message: 'Looged out successfully'});
    } catch (error) {
        console.log('Error in login controller', JSON.stringify(error));
        res.status(500).json({error: 'Internal Server Error'});
    }
}
