import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const job = await Job.create({
    ...req.body,
    createdBy: req.user.id,
    status: "pending" // 🔥 IMPORTANT
  });

  res.json(job);
};

export const getMyJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id });
  res.json(jobs);
};

export const updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) return res.status(404).json({ message: "Job not found" });

  // 🔥 Ownership check
  if (job.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed" });
  }

  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.json(updated);
};

export const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) return res.status(404).json({ message: "Job not found" });

  // 🔥 Ownership check
  if (job.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed" });
  }

  await job.deleteOne();

  res.json({ message: "Deleted successfully" });
};

export const getApprovedJobs = async (req, res) => {
  const jobs = await Job.find({ status: "approved" }).sort({ createdAt: -1 });
  res.json(jobs);
};