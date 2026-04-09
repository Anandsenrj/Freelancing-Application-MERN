import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

// CREATE
router.post("/", async (req, res) => {
  const p = new Project(req.body);
  await p.save();
  res.json(p);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// STATS
router.get("/stats", async (req, res) => {
  const total = await Project.countDocuments();
  res.json({ totalProjects: total });
});

export default router;
