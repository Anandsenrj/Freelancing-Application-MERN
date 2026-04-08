import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function NewProject() {
  const [title, setTitle] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      title,
      description: "Demo project",
      budget: 1000
    });
    alert("Created");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card p-4 text-dark">
          <h3>Create Project</h3>

          <input className="form-control my-2"
            onChange={e => setTitle(e.target.value)} />

          <button className="btn btn-success" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
