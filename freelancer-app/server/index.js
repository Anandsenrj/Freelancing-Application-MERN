import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import projectRoutes from "./routes/projectRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import Project from "./models/Project.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/freelancer");

mongoose.connection.once("open", async () => {
  console.log("MongoDB Connected");

  // Dummy data
  const count = await Project.countDocuments();
  if (count === 0) {
    await Project.insertMany([
      {
        title: "E-commerce Website",
        description: "Build MERN stack ecommerce app",
        budget: 8000
      },
      {
        title: "Portfolio Website",
        description: "Create personal portfolio",
        budget: 3000
      },
      {
        title: "Mobile App UI",
        description: "Design Android UI",
        budget: 4000
      }
    ]);
    console.log("Dummy data added");
  }
});

// Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
