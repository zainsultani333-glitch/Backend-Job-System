import express from "express";
import { createJob, getMyJobs, updateJob, deleteJob, getApprovedJobs } from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isOwner } from "../middleware/ownershipMiddleware.js";

const router = express.Router();

router.post("/", protect, createJob);
router.get("/my", protect, getMyJobs);
router.put("/:id", protect, isOwner, updateJob);
router.delete("/:id", protect, isOwner, deleteJob);
router.get("/", getApprovedJobs);

export default router;