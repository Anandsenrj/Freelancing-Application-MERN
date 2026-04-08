import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FreelancerDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects/stats")
      .then(res => setStats(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Dashboard</h2>

        <div className="card p-4 text-center text-dark">
          <h4>Total Projects</h4>
          <h1>{stats.totalProjects}</h1>
        </div>
      </div>
    </>
  );
}
