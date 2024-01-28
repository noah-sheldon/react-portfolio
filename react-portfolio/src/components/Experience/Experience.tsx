import "./Experience.css";
import React from "react";

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const ExperienceData: ExperienceEntry[] = [
  {
    title: "Senior Python Developer",
    company: "BNP Paribas CIB",
    location: "London, UK",
    date: "Aug-21 Onwards",
    description: [
      "Developed and managed Python-based software (Flask and Angular) for compression tasks within the swap's domain, optimizing data and adhering to industry standards.",
      "Implemented Python scripts identifying compression opportunities for cross-currency and inflation trades, reducing notional value and risk exposure.",
      "Contributed to Angular framework development, breaking down functionalities for iterative implementation and smooth integration.",
    ],
  },
  {
    title: "Python Developer",
    company: "Definitive Healthcare",
    location: "Bangalore, KA, India",
    date: "Sept/19 – Sept/20",
    description: [
      "Utilized Pandas library for extracting, cleaning, and manipulating pharmaceutical data.",
      "Built machine learning models to predict patient risk compliance, involving comprehensive model development and validation.",
      "Translated SAS code to Python, demonstrating proficiency in both languages and data processing concepts.",
    ],
  },
  {
    title: "Intern",
    company: "Principal Financial Group",
    location: "Pune, MA, India",
    date: "Jan/19 – Sept/19",
    description: [
      "Designed and implemented a centralized portal using Java and Angular for managing and monitoring all Robotic Process Automation (RPA) bots, providing valuable insights into their performance.",
    ],
  },
];

// function Experience() {
//   return (
//     <>
//       <section>
//         <div className="container">
//           <h1 id="experience" className="about-me display-4">
//             Experience
//           </h1>
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="job-title">
//                 Senior Python Developer | BNP Paribas CIB | London, UK | 08/2021
//                 – Present
//               </div>
//               <div className="job-details">
//                 <p>
//                   Developed and managed Python-based software (Flask and
//                   Angular) for compression tasks within the swap's domain,
//                   optimizing data and adhering to industry standards.
//                 </p>
//                 <p>
//                   Implemented Python scripts identifying compression
//                   opportunities for cross-currency and inflation trades,
//                   reducing notional value and risk exposure.
//                 </p>
//                 <p>
//                   Contributed to Angular framework development, breaking down
//                   functionalities for iterative implementation and smooth
//                   integration.
//                 </p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="job-title">
//                 Python Developer | Definitive Healthcare | Bangalore, KA, India
//                 | 09/2019 – 09/2020
//               </div>
//               <div className="job-details">
//                 <p>
//                   Utilized Pandas library for extracting, cleaning, and
//                   manipulating pharmaceutical data.
//                 </p>
//                 <p>
//                   Built machine learning models to predict patient risk
//                   compliance, involving comprehensive model development and
//                   validation.
//                 </p>
//                 <p>
//                   Translated SAS code to Python, demonstrating proficiency in
//                   both languages and data processing concepts.
//                 </p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="job-title">
//                 Intern | Principal Financial Group | Pune, MA, India | 01/2019 –
//                 09/2019
//               </div>
//               <div className="job-details">
//                 <p>
//                   Designed and implemented a centralized portal using Java and
//                   Angular for managing and monitoring all Robotic Process
//                   Automation (RPA) bots, providing valuable insights into their
//                   performance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
//     </>
//   );
// }
const Experience: React.FC = () => {
  return (
    <div className="timeline">
      <h1 id="experience" className="display-4">
        Experience
      </h1>
      {ExperienceData.map((entry, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{entry.title}</h3>
            <h4>
              {entry.company} | {entry.location} | {entry.date}
            </h4>
            <ul>
              {entry.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
