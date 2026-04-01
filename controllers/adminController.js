import Job from "../models/Job.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

export const approveJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
  res.json(job);
};

export const rejectJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
  res.json(job);
};