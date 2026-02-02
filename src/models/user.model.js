import mongoose from "mongoose";
import {ROLES} from "../constants/roles.js";

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required: true,
            trim: true,
        },
        avatar:{
            type: String,
        },
        scholarId:{
            type:Number,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        role:{
            type:String,
            enum: Object.values(ROLES),
            required: true,
        },
        isActive:{
            type: Boolean,
            default: true,
        },
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Program",
        },
        specialization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Specialization",
        },
        semester: {
            type: Number,
            required: true,
            min: 1,
            max: 10,
        }
    },{timestamps:true}
)

export const User = mongoose.model("User", userSchema);