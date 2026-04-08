import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await axios.post("http://localhost:5000/api/users/login", { email });
    alert("Logged in!");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <h3 className="text-center">Login</h3>

          <input
            className="form-control my-3"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
