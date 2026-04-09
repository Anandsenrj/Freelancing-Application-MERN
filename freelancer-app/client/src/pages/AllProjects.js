import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>All Projects</h2>

        <div className="row">
          {projects.map(p => (
            <div className="col-md-4" key={p._id}>
              <div className="card p-3 my-2 shadow text-dark">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
                <p><b>Budget: ₹{p.budget}</b></p>

                <button className="btn btn-danger" onClick={() => deleteProject(p._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
