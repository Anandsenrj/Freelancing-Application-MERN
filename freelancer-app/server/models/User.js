import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userType: { type: String, default: "freelancer" }
});

export default mongoose.model("User", userSchema);
