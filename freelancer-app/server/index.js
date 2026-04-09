import Project from "./models/Project.js";

mongoose.connection.once("open", async () => {
  console.log("MongoDB Connected");

  const count = await Project.countDocuments();

  if (count === 0) {
    await Project.insertMany([
      {
        title: "Website Development",
        description: "Build a MERN website for business",
        budget: 8000
      },
      {
        title: "Mobile App UI",
        description: "Design UI for Android app",
        budget: 4000
      },
      {
        title: "Logo Design",
        description: "Create logo for startup",
        budget: 2000
      }
    ]);

    console.log("Dummy data inserted");
  }
});
