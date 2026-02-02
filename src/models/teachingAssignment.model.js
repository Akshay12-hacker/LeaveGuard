import mongoose from "mongoose";

const teachingAssignmentSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
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

  semester: {
    type: Number,
    required: true,
  },
});

export const TeachingAssignment = mongoose.model(
  "TeachingAssignment",
  teachingAssignmentSchema
);
