import express from "express";
import User from "../models/User.js";
const router=express.Router();

router.post("/login",async(req,res)=>{
  const user=await User.findOne({email:req.body.email});
  res.json(user||{email:req.body.email});
});

export default router;
