import Navbar from "../components/Navbar";

export default function Applications() {
  return (
    <>
      <Navbar />

      <div className="container mt-4 text-dark">
        <h3>My Applications</h3>

        <div className="card p-3">
          <h5>Web App Project</h5>
          <p>Proposal: MERN developer with 2 years experience</p>
          <p>Status: Accepted</p>
        </div>

      </div>
    </>
  );
}
