import mongoose from "mongoose";

const approvalSchema = new mongoose.Schema(
    {
        request: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Request",
            required: true,
        },

        approver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role: {
            type: String,
            enum: [
                "MENTOR",
                "TEACHER",
                "ADMIN", 
            ],
            required: true,
        },
        decision: {
            type: String,
            enum:["APPROVED","REJECTED"],
            required: true,
        },
        remarks: {
            type: String,
        },
        approvedAt:{
            type: Date,
            default: Date.now,
        },
    }, {timestamps: true}
);

export const Approval = mongoose.model("Approval", approvalSchema);