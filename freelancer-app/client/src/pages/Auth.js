import React, { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await axios.post("http://localhost:5000/api/users/login", { email });
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login / Register</h2>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={login}>Submit</button>
    </div>
  );
}
