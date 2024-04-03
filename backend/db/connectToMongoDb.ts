import mongoose from "mongoose";
import config from "../config/config";

const connectToMongoDB = async () => {
    try {
       if(!config.MONGO_DB_URI) {
            console.log('Missing MONGO_DB_URI');
        return;
       }
        await mongoose.connect(config.MONGO_DB_URI);
        console.log('Connected to mongo DB');
       
    } catch (error) {
        console.log('Error connection to MongoDB', JSON.stringify(error));
    }
}

export default connectToMongoDB;