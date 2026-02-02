import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  code: {
    type: String,
  },

  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },

  specialization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Specialization",
    required: true,
  },

  semester: {
    type: Number,
    required: true,
  },
});

export const Subject = mongoose.model("Subject", subjectSchema);
