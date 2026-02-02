import mongoose from "mongoose";
import {DB_NAME_} from "../constants/requestStatus.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME_}`)
        console.log("DATABASE CONNECTED")
    }catch(error){
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;