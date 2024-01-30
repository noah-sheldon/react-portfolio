import React from "react";
import project1Logo from "./project1.png";
import project2Logo from "./project2.png";
import project3Logo from "./project3.png";
import project4Logo from "./project4.png";
import project5Logo from "./project5.png";
import "./Project.css";

const Projects: React.FC = () => {
  return (
    <>
      <div className="container mt-2">
        <h1 id="projects" className="display-4 mb-4">
          Projects
        </h1>
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <img
                src={project1Logo}
                className="card-img-top"
                alt="Project 1 Image"
              />
              <div className="card-body">
                <h5 className="card-title mb-3">
                  nutriScript: A Nutrition Planner
                </h5>
                <a href="https://github.com/noah-sheldon/nutriScript">
                  <button className="btn btn-primary me-5 source-btn">
                    Source Code
                  </button>
                </a>
                <a href="https://noah-sheldon.github.io/nutriScript/">
                  <button className="btn btn-success deploy-btn">
                    Deployed App
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={project2Logo}
                className="card-img-top"
                alt="Project 2 Image"
              />
              <div className="card-body">
                <h5 className="card-title mb-3">Code Quiz: JavaScript</h5>
                <a href="https://github.com/noah-sheldon/code-quiz">
                  <button className="btn btn-primary me-5 source-btn">
                    Source Code
                  </button>
                </a>
                <a href="https://noah-sheldon.github.io/code-quiz/">
                  <button className="btn btn-success deploy-btn">
                    Deployed App
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={project3Logo}
                className="card-img-top"
                alt="Project 3 Image"
              />
              <div className="card-body">
                <h5 className="card-title mb-3">Daily Planner</h5>
                <a href="https://github.com/noah-sheldon/daily-planner">
                  <button className="btn btn-primary me-5 source-btn">
                    Source Code
                  </button>
                </a>
                <a href="https://noah-sheldon.github.io/daily-planner/">
                  <button className="btn btn-success deploy-btn">
                    Deployed App
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={project4Logo}
                className="card-img-top"
                alt="Project 4 Image"
              />
              <div className="card-body">
                <h5 className="card-title mb-3">Weather Dashboard</h5>
                <a href="https://github.com/noah-sheldon/weather-dashboard">
                  <button className="btn btn-primary me-5 source-btn">
                    Source Code
                  </button>
                </a>
                <a href="https://noah-sheldon.github.io/weather-dashboard/">
                  <button className="btn btn-success deploy-btn">
                    Deployed App
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={project5Logo}
                className="card-img-top"
                alt="Project 5 Image"
              />
              <div className="card-body">
                <h5 className="card-title mb-3">Password Generator</h5>
                <a href="https://github.com/noah-sheldon/password-generator">
                  <button className="btn btn-primary me-5 source-btn">
                    Source Code
                  </button>
                </a>
                <a href="https://github.com/noah-sheldon/password-generator">
                  <button className="btn btn-success deploy-btn">
                    Deployed App
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
