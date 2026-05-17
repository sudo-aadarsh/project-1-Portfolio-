import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-12 py-8 md:py-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 text-center">
        <div className="container mx-auto px-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Aadarsh Jha. Built with passion & precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
