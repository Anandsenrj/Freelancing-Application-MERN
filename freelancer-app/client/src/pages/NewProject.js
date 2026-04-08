import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      title,
      description: "Project description",
      budget
    });
    alert("Project Created!");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card p-4">
          <h3>Create New Project</h3>

          <input className="form-control my-2" placeholder="Title"
            onChange={e => setTitle(e.target.value)} />

          <input className="form-control my-2" placeholder="Budget"
            onChange={e => setBudget(e.target.value)} />

          <button className="btn btn-success" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
