import Job from "../models/Job.js";

export const isOwner = async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });

  if (job.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  next();
};