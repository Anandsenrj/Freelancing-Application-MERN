import express from "express";
import Project from "../models/Project.js";
const router=express.Router();

router.get("/",async(req,res)=>{
  res.json(await Project.find());
});

router.post("/",async(req,res)=>{
  const p=new Project(req.body);
  await p.save();
  res.json(p);
});

export default router;
// GET STATS (IMPORTANT)
router.get("/stats", async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    res.json({ totalProjects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
