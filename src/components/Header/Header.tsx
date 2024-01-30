import "./Header..css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold fs-2">
            <NavLink
              to="/react-portfolio/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Noah Sheldon
            </NavLink>
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
                <NavLink
                  to="/react-portfolio/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </a>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#experience"
              >
                <NavLink
                  to="/react-portfolio/experience"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Experience
                </NavLink>
              </a>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#education"
              >
                <NavLink
                  to="/react-portfolio/education"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Education
                </NavLink>
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
                <NavLink
                  to="/react-portfolio/projects"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Projects
                </NavLink>
              </a>
              <a className="nav-link active text-white" href="#skills">
                <NavLink
                  to="/react-portfolio/skills"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Skills
                </NavLink>
              </a>
              <a className="nav-link active text-white" href="#contactme">
                <NavLink
                  to="/react-portfolio/contact"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </NavLink>
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* < pdfUrl="https://drive.google.com/file/d/1a5d5TWh809Xz8c-bBb9t-KzeVYvSOMgA/view?usp=sharing" /> */}
                <a href="https://drive.google.com/file/d/1a5d5TWh809Xz8c-bBb9t-KzeVYvSOMgA/view?usp=sharing">
                  <button className="btn btn bg-secondary me-3 mt-1">
                    {" "}
                    Download Resume
                  </button>
                </a>
              </li>
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
