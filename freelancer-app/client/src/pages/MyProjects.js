import Navbar from "../components/Navbar";

export default function MyProjects() {
  return (
    <>
      <Navbar />

      <div className="container mt-4 text-dark">
        <h3>My Projects</h3>

        <div className="card p-3 mb-3">
          <h5>E-commerce Website</h5>
          <p>Budget ₹8000</p>
          <p>Status: Completed</p>
        </div>

        <div className="card p-3">
          <h5>Portfolio Website</h5>
          <p>Budget ₹3000</p>
          <p>Status: Ongoing</p>
        </div>

      </div>
    </>
  );
}
