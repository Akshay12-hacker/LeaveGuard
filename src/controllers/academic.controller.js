import * as academicService from "../services/academic.service.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

export const createProgram = async (req, res) => {
  const program = await academicService.createProgram(req.body);
  res.status(201).json(new ApiResponse(201, program));
};

export const createSpecialization = async (req, res) => {
  const specialization = await academicService.createSpecialization(req.body);
  res.status(201).json(new ApiResponse(201, specialization));
};

export const createSubject = async (req, res) => {
  const subject = await academicService.createSubject(req.body);
  res.status(201).json(new ApiResponse(201, subject));
};

export const assignMentor = async (req, res) => {
  const assignment = await academicService.assignMentor(req.body);
  res.status(201).json(new ApiResponse(201, assignment));
};

export const assignTeacher = async (req, res) => {
  const assignment = await academicService.assignTeacher(req.body);
  res.status(201).json(new ApiResponse(201, assignment));
};
