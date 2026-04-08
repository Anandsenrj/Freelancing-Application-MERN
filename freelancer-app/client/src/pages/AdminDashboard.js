import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Admin Dashboard</h2>

        <div className="row text-center">
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h4>Total Users</h4>
              <h2>10</h2>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h4>Total Projects</h4>
              <h2>6</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
