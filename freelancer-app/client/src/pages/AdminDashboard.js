import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Admin Dashboard</h2>

        <div className="row">
          <div className="col-md-3">
            <div className="card p-3 text-center shadow">
              <h5>Users</h5>
              <p>10</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center shadow">
              <h5>Projects</h5>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
