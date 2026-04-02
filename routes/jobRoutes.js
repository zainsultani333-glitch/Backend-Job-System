import express from "express";
import { createJob, getMyJobs, updateJob, deleteJob, getApprovedJobs } from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isOwner } from "../middleware/ownershipMiddleware.js";
import { approveJob, rejectJob, getAllUsers, getAllJobs } from "../controllers/adminController.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, createJob);
router.get("/my", protect, getMyJobs);
router.put("/:id", protect, isOwner, updateJob);
router.delete("/:id", protect, isOwner, deleteJob);
router.get("/", getApprovedJobs);
router.put("/:id/approve", protect, isAdmin, approveJob);
router.put("/:id/reject", protect, isAdmin, rejectJob);

export default router;