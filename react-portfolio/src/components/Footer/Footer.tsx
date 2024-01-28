import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-secondary footer">
        <div className="row">
          <div className="col-md-12 my-3">
            <ul className="nav flex-row justify-content-center align-items-center box">
              <li className="nav-item box mx-3">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item box mx-3">
                <a className="nav-link text-white " href="#aboutme">
                  About Me
                </a>
              </li>
              <li className="nav-item box mx-3">
                <a className="nav-link text-white " href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item box mx-3">
                <a className="nav-link text-white " href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item box mx-3">
                <a className="nav-link text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item box mx-3">
                <a className="nav-link text-white" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
            <p className="text-white text-center my-3">
              <span className="copyright quick-links">
                Copyright &copy; Noah Sheldon
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
