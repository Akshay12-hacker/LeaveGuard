import { Router } from "express";
import {
  createProgram,
  createSpecialization,
  createSubject,
  assignMentor,
  assignTeacher,
} from "../controllers/academic.controller.js";

const router = Router();

router.post("/program", createProgram);
router.post("/specialization", createSpecialization);
router.post("/subject", createSubject);
router.post("/mentor-assign", assignMentor);
router.post("/teacher-assign", assignTeacher);

export default router;
