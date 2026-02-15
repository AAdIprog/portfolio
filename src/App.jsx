import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <OpenSource />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
