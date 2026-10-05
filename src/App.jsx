import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CodeSnippet from './components/CodeSnippet';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <div
        className={`min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <main className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-12 py-8 md:py-16">
          {!loading && (
            <>
              <Hero />
              <CodeSnippet />
              <About />
              <Projects />
              <Contact />
            </>
          )}
        </main>
        <footer className="py-12 text-center">
          <div className="container mx-auto px-6 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Aadarsh Jha. Built with passion & precision.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
