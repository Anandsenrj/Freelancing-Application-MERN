import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <Link className="navbar-brand" to="/">SB Works</Link>

        <div>
          <Link className="btn btn-outline-light m-1" to="/projects">Projects</Link>
          <Link className="btn btn-outline-light m-1" to="/new-project">Post</Link>
          <Link className="btn btn-outline-light m-1" to="/freelancer">Dashboard</Link>
          <Link className="btn btn-outline-light m-1" to="/chat">Chat</Link>
          <Link className="btn btn-warning m-1" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
