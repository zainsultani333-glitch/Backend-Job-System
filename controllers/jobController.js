import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const job = await Job.create({ ...req.body, createdBy: req.user.id });
  res.json(job);
};

export const getMyJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id });
  res.json(jobs);
};

export const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

export const deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const getApprovedJobs = async (req, res) => {
  const jobs = await Job.find({ status: "approved" }).sort({ createdAt: -1 });
  res.json(jobs);
};