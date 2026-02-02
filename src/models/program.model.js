import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Program = mongoose.model("Program", programSchema);
