import Project from "./models/Project.js";

mongoose.connection.once("open", async () => {
  const count = await Project.countDocuments();

  if (count === 0) {
    await Project.insertMany([
      {
        title: "Logo Design",
        description: "Design logo for startup",
        budget: 2000
      },
      {
        title: "Website Development",
        description: "Build MERN website",
        budget: 8000
      }
    ]);
  }
});
