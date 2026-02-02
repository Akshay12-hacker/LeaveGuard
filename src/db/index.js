import mongoose from "mongoose";
import {DB_Name} from "../constants/requestStatus";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;