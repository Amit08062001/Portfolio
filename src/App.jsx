import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import TopProgress from "./components/TopProgress";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      <TopProgress />
      
      <Navbar />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;