import { useState, useEffect } from "react";
import { Header } from "./portfolio/Header";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Skills } from "./portfolio/Skills";
import { Projects } from "./portfolio/Projects";
import { Experience } from "./portfolio/Experience";
import { Education } from "./portfolio/Education";
import { Achievements } from "./portfolio/Achievements";
import { Contact } from "./portfolio/Contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Portfolio;