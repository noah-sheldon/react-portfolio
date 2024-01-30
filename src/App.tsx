import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
// import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Project/Project";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/react-portfolio/" element={<Intro />} />
          <Route path="/react-portfolio/experience" element={<Experience />} />
          <Route path="/react-portfolio/education" element={<Education />} />
          <Route path="/react-portfolio/projects" element={<Projects />} />
          <Route path="/react-portfolio/skills" element={<Skills />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
