import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="display-3 fw-bold">SB Works</h1>
        <p className="lead">Connect with top freelancers worldwide</p>

        <a href="/projects" className="btn btn-primary btn-lg m-2">Browse Projects</a>
        <a href="/login" className="btn btn-success btn-lg m-2">Get Started</a>
      </div>
    </>
  );
}
