import Navbar from "../components/Navbar";

export default function FreelancerDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Freelancer Dashboard</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h4>Projects</h4>
              <h2>3</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h4>Applications</h4>
              <h2>5</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h4>Funds</h4>
              <h2>₹5000</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
