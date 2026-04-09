import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-glass shadow-sm px-4">
      <Link className="navbar-brand fw-bold text-danger" to="/">
        SB Works
      </Link>

      <div className="ms-auto">
        <Link className="btn btn-outline-dark m-1" to="/">Home</Link>
        <Link className="btn btn-outline-dark m-1" to="/dashboard">Dashboard</Link>
        <Link className="btn btn-outline-dark m-1" to="/projects">Projects</Link>
        <Link className="btn btn-outline-dark m-1" to="/my-projects">My Projects</Link>
        <Link className="btn btn-outline-dark m-1" to="/applications">Applications</Link>
        <Link className="btn btn-warning m-1" to="/login">Login</Link>
      </div>
    </nav>
  );
}
