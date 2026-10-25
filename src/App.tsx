import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { About, Contact, Experience, Footer, Projects, Skills, Work } from './components/Sections';
import { CursorGlow, ScrollProgress, usePrefersReducedMotion } from './components/ui';

export function App(): JSX.Element {
  const reduced = usePrefersReducedMotion();
  return (
    <>
      <ScrollProgress />
      {!reduced && <CursorGlow />}
      <div className="bg-grid" aria-hidden={true} />
      <Nav />
      <main>
        <Hero reduced={reduced} />
        <About />
        <Experience />
        <Work />
        <Skills reduced={reduced} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
