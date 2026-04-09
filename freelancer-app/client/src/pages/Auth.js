import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });

      if (res.data.userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/freelancer");
      }

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-4 mx-auto text-dark" style={{ maxWidth: "400px" }}>
          <h3 className="text-center">Login</h3>

          <input className="form-control my-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)} />

          <input type="password" className="form-control my-2"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)} />

          <button className="btn btn-primary w-100 mt-2" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
