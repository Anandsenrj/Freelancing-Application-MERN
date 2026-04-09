import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      title,
      description: "Demo",
      budget
    });
    alert("Created");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 text-dark">
        <input className="form-control my-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)} />

        <input className="form-control my-2"
          placeholder="Budget"
          onChange={(e) => setBudget(e.target.value)} />

        <button className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
