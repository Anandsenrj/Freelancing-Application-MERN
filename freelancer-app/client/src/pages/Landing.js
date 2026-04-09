import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay d-flex flex-column text-white">
        
        {/* Navbar */}
        <div className="d-flex justify-content-between p-4">
          <h3 className="fw-bold">SB Works</h3>
          <Link to="/login" className="btn btn-outline-light">Sign In</Link>
        </div>

        {/* Hero Content */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center flex-grow-1 fade-in">
          <h1 className="display-3 fw-bold">
            Empower Your Journey
          </h1>

          <p className="w-50 mt-3">
            Connect freelancers with clients. Build projects, collaborate and grow your career.
          </p>

          <Link to="/projects" className="btn btn-primary btn-lg mt-3">
            Explore Projects
          </Link>
        </div>

      </div>
    </div>
  );
}
