import mongoose from "mongoose";
import {REQUEST_STATUS} from "../constants/requestStatus.js"


const requestSchema = new mongoose.Schema(
    {
        student:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type:{
            type: String,
            enum: ["LEAVE", "ISSUE"],
            required: true,
        },
        leaveDates:[
            {
                type: Date,
            }
        ],
        reason: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: Object.values(REQUEST_STATUS),
            default: REQUEST_STATUS.CREATED,
        },
        escalatedToAdmin:{
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

export const Request = mongoose.model("Request", requestSchema)