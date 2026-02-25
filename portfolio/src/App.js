import React from 'react';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import Product from './sections/Product';
import Values from './sections/Values';
import Curation from './sections/Curation';
import Studio from './sections/Studio';
import { useActiveSection } from './hooks/useActiveSection';

const SECTIONS = ['home', 'product', 'values', 'curation', 'studio'];

function App() {
  const activeSection = useActiveSection(SECTIONS);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const main = document.getElementById('main-content');
      main.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <main id="main-content">
        <Home />
        <Product />
        <Values />
        <Curation />
        <Studio />
      </main>
    </div>
  );
}

export default App;
