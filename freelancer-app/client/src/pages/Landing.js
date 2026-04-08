import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="display-3 fw-bold text-primary">SB Works</h1>
        <p className="lead">Hire freelancers or work on exciting projects</p>

        <div className="mt-4">
          <a href="/projects" className="btn btn-primary btn-lg m-2">
            Browse Projects
          </a>
          <a href="/login" className="btn btn-success btn-lg m-2">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
