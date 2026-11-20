import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FocusAreas from './components/sections/FocusAreas';
import AiSection from './components/sections/AiSection';
import Projects from './components/sections/Projects';
import Competitions from './components/sections/Competitions';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './context/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      <a
        href="#focus"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <AiSection />
        <Projects />
        <Competitions />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
