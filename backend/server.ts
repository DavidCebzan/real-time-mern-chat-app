import express, { Request, Response } from "express";

import authRoutes from './routes/auth.routes'
import connectToMongoDB from "./db/connectToMongoDb";
import config from "./config/config";


const app = express();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use('/api/auth', authRoutes); 

app.get("/", (req: Request , res: Response) => {
        // root route http://localhost:5000/
        res.send("Hello world!!!!!!!")
});

app.listen(config.PORT, () => {
    connectToMongoDB();
    console.log(`app runing on port ${config.PORT}`)
})