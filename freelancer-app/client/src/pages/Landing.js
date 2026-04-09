import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />

      <div
        style={{
          height: "90vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="d-flex flex-column justify-content-center align-items-center text-white"
      >
        <h1 className="display-2 fw-bold">SB Works</h1>
        <p className="lead">Find Freelancers & Projects Easily</p>

        <a href="/login" className="btn btn-warning btn-lg mt-3">
          Sign In
        </a>
      </div>
    </>
  );
}
