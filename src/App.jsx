import "./App.css";   // ⭐⭐ THIS WAS MISSING ⭐⭐

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
