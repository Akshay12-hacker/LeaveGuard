import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_Name } from "./constants/requestStatus";
import connectDB from "./db/index.js";
import {app} from './app.js'



dotenv.config();
connectDB()
.then(()=>
{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
    .catch((error)=>{
        console.error("Error connecting to the database", error);
        process.exit(1);
    })

})