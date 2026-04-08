import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="display-2 fw-bold">SB Works</h1>
        <p className="lead">Hire & Work with the Best</p>

        <a href="/projects" className="btn btn-light btn-lg m-2">Browse</a>
        <a href="/login" className="btn btn-warning btn-lg m-2">Start</a>
      </div>
    </>
  );
}
