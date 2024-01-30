import Header from "./components/Header/Header";

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
      <Header />
      <Intro />
      <Experience />
      <Education />
      {/* <Certifications/> */}
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
