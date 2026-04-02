import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: {
    min: { type: Number },
    max: { type: Number },
    currency: { type: String, default: "PKR" },
    isNegotiable: { type: Boolean, default: false }
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"], // ya jo tum chaho
    default: "pending"
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);