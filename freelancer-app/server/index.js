import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);

// CONNECT MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/freelancer");

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
