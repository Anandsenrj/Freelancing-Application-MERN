import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/applications")
      .then(res => setApps(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4 fade-in text-dark">
        <h2>My Applications</h2>

        {apps.map((a, i) => (
          <div key={i} className="card p-3 mb-3 shadow">
            
            <h5>{a.projectTitle}</h5>
            <p>{a.proposal}</p>

            <div>
              {a.skills.map((s, idx) => (
                <span key={idx} className="badge bg-light text-dark m-1">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-2">
              Budget: ₹{a.budget}
            </p>

            <p>
              Status:
              <span className={`ms-2 badge ${
                a.status === "Accepted" ? "bg-success" : "bg-warning"
              }`}>
                {a.status}
              </span>
            </p>

          </div>
        ))}
      </div>
    </>
  );
}
