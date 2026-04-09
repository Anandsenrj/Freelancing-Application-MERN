import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,

  // ✅ NEW
  skills: [String],
  description: String
});

export default mongoose.model("User", userSchema);
