import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEOHead from './components/SEOHead';
import Analytics from './components/Analytics';
// ...removido Farmacia...
import './index.css';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Services />
        {/* ...removido Farmacia... */}
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

