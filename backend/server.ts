import express, { Request, Response } from "express";

import authRoutes from './routes/auth.routes'
import messageRoutes from './routes/message.routes'
import userRoutes from './routes/user.routes'

import connectToMongoDB from "./db/connectToMongoDb";
import config from "./config/config";
import cookieParser from 'cookie-parser'


const app = express();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // acces the cookies

app.use('/api/auth', authRoutes); 
app.use('/api/messages', messageRoutes); 
app.use('/api/users', userRoutes); 

app.get("/", (req: Request , res: Response) => {
        // root route http://localhost:5000/
        res.send("Hello world!!!!!!!")
});

app.listen(config.PORT, () => {
    connectToMongoDB();
    console.log(`app runing on port ${config.PORT}`)
})