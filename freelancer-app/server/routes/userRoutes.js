import express from "express";
import User from "../models/User.js";

const router = express.Router();

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Admin login
  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({ email, userType: "admin" });
  }

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ email, userType: user.userType });
});

export default router;
