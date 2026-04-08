import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>SB Works</h1>
      <p>Freelancing Platform</p>

      <Link to="/login">Login</Link>
      <br />
      <Link to="/projects">Browse Projects</Link>
    </div>
  );
}
