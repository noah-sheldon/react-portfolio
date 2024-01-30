import "./Intro.css";
import profilePicture from "./profile_picture.jpg";
import { NavLink } from "react-router-dom";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="jumbotron">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="profile-picture"
          />
          <h1 id="aboutme" className="about-me display-4">
            About Me
          </h1>
          <p className="lead">
            Results-oriented Python developer with 4 years of experience in
            designing, developing, and maintaining software applications.
            Proficient in leveraging Python's capabilities to deliver
            high-quality, efficient, and scalable solutions. Adept at
            collaborating with cross-functional teams to achieve project goals
            and meet deadlines. Experienced with the full software development
            cycle, including architecting scalable platforms, object-oriented
            programming, and agile methodologies. Skilled in utilizing
            JSON-based REST APIs in Flask and effectively monitoring projects
            using JIRA. Hands-on experience with Git for version control.
            Demonstrated excellence in debugging, problem-solving, and
            practicing test-driven development (TDD). Conducted code reviews and
            implemented best pythonic practices to ensure code quality.
          </p>

          <p>
            <a className="btn btn-contact btn-lg text-white" role="button">
              <NavLink to="/react-portfolio/contact" end>
                Contact Me Now
              </NavLink>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
