import Job from "../models/Job.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate("createdBy", "name email");
  res.json(jobs);
};

export const approveJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { returnDocument: "after" } // ✅ replace new: true
  );

  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
};

export const rejectJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    { status: "rejected" },
    { returnDocument: "after" }
  );

  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
};