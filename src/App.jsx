import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255, 255, 255, 0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="tech">
            <Tech />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
