import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FreelancerDashboard() {
  const [skills, setSkills] = useState("");
  const [desc, setDesc] = useState("");

  const email = "test@gmail.com"; // dummy user

  // LOAD DATA
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${email}`)
      .then(res => {
        setSkills(res.data?.skills?.join(", ") || "");
        setDesc(res.data?.description || "");
      });
  }, []);

  // UPDATE
  const update = async () => {
    await axios.put("http://localhost:5000/api/users/update", {
      email,
      skills: skills.split(","),
      description: desc
    });

    alert("Profile Updated!");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4 fade-in text-dark">
        <h2>Freelancer Dashboard</h2>

        <div className="card p-4 shadow">
          <h5>My Skills</h5>

          <input
            className="form-control my-2"
            placeholder="React, Node, Python"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <h5>Description</h5>

          <textarea
            className="form-control my-2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="btn btn-success mt-2" onClick={update}>
            Update Profile
          </button>
        </div>

        {/* SHOW SKILLS AS BADGES */}
        <div className="mt-3">
          {skills.split(",").map((s, i) => (
            <span key={i} className="badge bg-light text-dark m-1">
              {s.trim()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
