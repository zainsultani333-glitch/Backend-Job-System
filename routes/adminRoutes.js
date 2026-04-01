import express from "express";
import { getAllUsers, getAllJobs, approveJob, rejectJob } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", protect, isAdmin, getAllUsers);
router.get("/jobs", protect, isAdmin, getAllJobs);
router.put("/approve/:id", protect, isAdmin, approveJob);
router.put("/reject/:id", protect, isAdmin, rejectJob);

export default router;