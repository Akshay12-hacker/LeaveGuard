import mongoose from "mongoose";

const specializationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
});

export const Specialization = mongoose.model(
  "Specialization",
  specializationSchema
);
