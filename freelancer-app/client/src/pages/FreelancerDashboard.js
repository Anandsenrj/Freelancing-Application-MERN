import Navbar from "../components/Navbar";
import { useState } from "react";

export default function FreelancerDashboard() {
  const [skills, setSkills] = useState("React, Node");
  const [desc, setDesc] = useState("MERN Developer");

  return (
    <>
      <Navbar />

      <div className="container mt-4 text-dark">
        <h2>Dashboard</h2>

        <div className="card p-4">
          <h5>Skills</h5>
          <input className="form-control"
            value={skills}
            onChange={(e) => setSkills(e.target.value)} />

          <h5 className="mt-3">Description</h5>
          <textarea className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)} />

          <button className="btn btn-success mt-2">Update</button>
        </div>
      </div>
    </>
  );
}
