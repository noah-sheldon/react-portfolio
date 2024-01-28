import "./Header..css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold fs-2" href="#">
            Noah Sheldon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#aboutme"
              >
                About Me
              </a>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#education"
              >
                Education
              </a>
              {/* <a
                className="nav-link active text-white"
                aria-current="page"
                href="#certifications"
              >
                Certifications
              </a> */}
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
              <a className="nav-link active text-white" href="#skills">
                Skills
              </a>
              <a className="nav-link active text-white" href="#contactme">
                Contact Me
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <a
                href="https://github.com/noah-sheldon/"
                className="btn btn-github btn-lg"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=447552839576"
                className="btn btn-whatsapp btn-lg"
                target="_blank"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/noah--sheldon/"
                title="LinkedIn"
                className="btn btn-linkedin btn-lg"
              >
                <i className="fa fa-linkedin fa-fw"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
