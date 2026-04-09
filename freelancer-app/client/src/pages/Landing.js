import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
      }}
      className="text-white"
    >
      <div className="d-flex justify-content-between p-4">
        <h3>SB Works</h3>
        <Link to="/login" className="btn btn-outline-light">
          Sign In
        </Link>
      </div>

      <div className="text-center mt-5">
        <h1 className="display-3">Empower Your Journey</h1>
        <Link to="/projects" className="btn btn-warning mt-3">
          Explore Projects
        </Link>
      </div>
    </div>
  );
}
