import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-4 text-dark">
        <div className="row text-center">

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h5>Current Projects</h5>
              <h3>1</h3>
              <button className="btn btn-outline-danger">View</button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h5>Completed</h5>
              <h3>2</h3>
              <button className="btn btn-outline-danger">View</button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h5>Applications</h5>
              <h3>2</h3>
              <button className="btn btn-outline-danger">View</button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h5>Funds</h5>
              <h3>₹4200</h3>
            </div>
          </div>

        </div>

        <div className="card p-4 mt-4">
          <h5>My Skills</h5>

          {["Python","JavaScript","React","Node"].map(s=>(
            <span key={s} className="badge bg-light text-dark m-1">{s}</span>
          ))}

          <p className="mt-3">
            I am a MERN developer with strong backend + frontend skills.
          </p>

          <button className="btn btn-success">Update</button>
        </div>
      </div>
    </>
  );
}
