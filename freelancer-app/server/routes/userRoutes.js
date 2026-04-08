router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Dummy admin
  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({ email, userType: "admin" });
  }

  // Normal user
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ email, userType: "freelancer" });
  }

  res.json({ email, userType: "freelancer" });
});
