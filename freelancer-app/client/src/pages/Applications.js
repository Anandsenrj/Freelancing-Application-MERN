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
      <div className="container mt-4 text-dark">
        <h2>Applications</h2>

        {apps.map(a => (
          <div className="card p-3 my-2">
            <h5>{a.projectTitle}</h5>
            <p>{a.proposal}</p>
            <p>Bid ₹{a.bidAmount}</p>
            <p>Status: {a.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}
