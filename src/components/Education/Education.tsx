import React from "react";
import "./Education.css";

interface EducaitonEntry {
  degree: string;
  university: string;
  location: string;
  date: string;
  major: string;
}

const educationData: EducaitonEntry[] = [
  {
    degree: "Master of Science",
    university: "University of Bristol",
    location: "Bristol, UK",
    date: "2020 - 2021",
    major: "Data Science",
  },
  {
    degree: "Bachelor of Technology",
    university: "Karunya University",
    location: "India",
    date: "2015 - 2019",
    major: "Electronics and Communication Engineering",
  },
];

const Education: React.FC = () => {
  return (
    <div className="timeline edu-con">
      <h1 id="education" className="display-4">
        Education
      </h1>
      {educationData.map((entry, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{entry.degree}</h3>
            <h4>
              {entry.university} | {entry.location} | {entry.date}
            </h4>
            <p>
              <strong>Major:</strong> {entry.major}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
