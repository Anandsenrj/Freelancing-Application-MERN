import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>All Projects</h2>
      {projects.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
}
