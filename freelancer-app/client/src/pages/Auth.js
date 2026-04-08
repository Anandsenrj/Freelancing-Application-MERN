import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password
    });

    if (res.data.userType === "admin") {
      navigate("/admin");
    } else {
      navigate("/freelancer");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-4 mx-auto shadow" style={{ maxWidth: "400px" }}>
          <h3 className="text-center mb-3">Login</h3>

          <input
            className="form-control my-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control my-2"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100 mt-3" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
