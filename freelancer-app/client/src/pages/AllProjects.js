import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  useEffect(() => { load(); }, []);

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    load();
  };

  const apply = async (p) => {
    await axios.post("http://localhost:5000/api/applications", {
      projectTitle: p.title,
      proposal: "I can do this project",
      skills: ["React"],
      bidAmount: p.budget - 500
    });
    alert("Applied");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 text-dark">
        <h2>Projects</h2>

        {projects.map(p => (
          <div className="card p-3 my-2">
            <h5>{p.title}</h5>
            <p>{p.description}</p>
            <p>Budget ₹{p.budget}</p>

            <button onClick={() => apply(p)} className="btn btn-success m-1">
              Apply
            </button>

            <button onClick={() => deleteProject(p._id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
