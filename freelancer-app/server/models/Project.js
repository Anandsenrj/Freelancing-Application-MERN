import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number
});

export default mongoose.model("Project", schema);
