import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';

export type Section = 'home' | 'projects' | 'skills' | 'about';

function App() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section>('home');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
    
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement; // Explicit cast
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.id as Section;
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(sectionId);
        }
      });
    };    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Cursor />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar currentSection={currentSection} onNavigate={(section) => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <main className="bg-black">
        <section id="home" className="min-h-screen">
          <Hero onEnter={() => {
            const projectsSection = document.getElementById('projects');
            projectsSection?.scrollIntoView({ behavior: 'smooth' });
          }} />
        <section id="about" className="min-h-screen">
          <About />
        </section>
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
      </main>
    </>
  );
}

export default App;