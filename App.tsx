import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="antialiased text-sd-black bg-white selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <GeminiChat />
    </div>
  );
};

export default App;