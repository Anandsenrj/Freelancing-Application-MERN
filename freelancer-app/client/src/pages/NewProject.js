import React, { useState } from "react";
import axios from "axios";

export default function NewProject() {
  const [title, setTitle] = useState("");

  const createProject = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      title,
      description: "Test",
      budget: 1000
    });
    alert("Project Created");
  };

  return (
    <div>
      <h2>Create Project</h2>
      <input onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <button onClick={createProject}>Submit</button>
    </div>
  );
}
