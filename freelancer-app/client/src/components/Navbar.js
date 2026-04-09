import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <h4 className="text-danger">SB Works</h4>

      <div>
        <Link className="mx-2" to="/dashboard">Dashboard</Link>
        <Link className="mx-2" to="/projects">All Projects</Link>
        <Link className="mx-2" to="/my-projects">My Projects</Link>
        <Link className="mx-2" to="/applications">Applications</Link>
        <Link className="mx-2" to="/chat">Chat</Link>
        <Link className="mx-2" to="/login">Logout</Link>
      </div>
    </nav>
  );
}
