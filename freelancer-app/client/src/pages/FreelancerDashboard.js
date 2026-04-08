import Navbar from "../components/Navbar";

export default function FreelancerDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Freelancer Dashboard</h2>

        <div className="row">
          <div className="col-md-3">
            <div className="card p-3 text-center shadow">
              <h5>Projects</h5>
              <p>2</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center shadow">
              <h5>Applications</h5>
              <p>3</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center shadow">
              <h5>Funds</h5>
              <p>₹5000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
