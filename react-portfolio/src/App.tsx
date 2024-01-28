import Header from "./components/Header/Header";

import "./App.css";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Experience/>
      <Education/>
      <Certifications/>
    </>
  );
}

export default App;
