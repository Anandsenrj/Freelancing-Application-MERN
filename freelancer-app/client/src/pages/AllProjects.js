import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>All Projects</h2>

        <div className="row">
          {projects.map(p => (
            <div className="col-md-4" key={p._id}>
             <div className="card shadow p-3 my-3">
  <h5 className="text-primary">{p.title}</h5>
  <p>{p.description}</p>
  <p className="fw-bold">Budget: ₹{p.budget}</p>

  <button className="btn btn-outline-success">Apply</button>
</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
