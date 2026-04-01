import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: Number,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);