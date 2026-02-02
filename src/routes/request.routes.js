import { Router } from "express";
import {
  createRequest,
  getMyRequests,
  getRequestTimeline,
} from "../controllers/request.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createRequest);
router.get("/me", verifyJWT, getMyRequests);
router.get("/:id/timeline", verifyJWT, getRequestTimeline);

export default router;
