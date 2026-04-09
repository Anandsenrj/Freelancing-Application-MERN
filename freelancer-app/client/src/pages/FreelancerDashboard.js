import Navbar from "../components/Navbar";
import { useState } from "react";

export default function FreelancerDashboard() {
  const [skills, setSkills] = useState("React, Node");
  const [desc, setDesc] = useState("I am a MERN developer");

  const updateProfile = () => {
    alert("Profile Updated!");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4 text-dark">
        <h2>Freelancer Dashboard</h2>

        <div className="card p-4 shadow">
          <h4>Profile</h4>

          <label>Skills</label>
          <input
            className="form-control my-2"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <label>Description</label>
          <textarea
            className="form-control my-2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="btn btn-success mt-2" onClick={updateProfile}>
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}
