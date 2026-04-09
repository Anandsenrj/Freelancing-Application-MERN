import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Project.find());
});

router.post("/", async (req, res) => {
  const p = new Project(req.body);
  await p.save();
  res.json(p);
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ msg: "deleted" });
});

export default router;
