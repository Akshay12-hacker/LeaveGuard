import mongoose from "mongoose";

const academicAssignmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  role: {
    type: String,
    enum: ["MENTOR", "TEACHER"],
    required: true,
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

  subject: {
    type: String, // only for teachers
  },
});

export const AcademicAssignment = mongoose.model(
  "AcademicAssignment",
  academicAssignmentSchema
);
