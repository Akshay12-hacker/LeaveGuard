import { Router } from "express";
import { approveRequest, rejectRequest } from "../controllers/approval.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/:id/approve", verifyJWT, approveRequest);
router.post("/:id/reject", verifyJWT, rejectRequest);

export default router;
