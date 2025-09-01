import React, { useState } from 'react';
import logo from '../assets/logo-marcospvc.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-logo-dark-1/80 shadow-xl fixed w-full top-0 z-50 h-20 flex items-center border-b border-logo-dark-2/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="flex justify-between items-center py-2 h-20">
          {/* Logo */}
          <div className="flex items-center h-20">
            <span className="bg-[#ffeb00]/90 rounded-2xl p-1.5 md:p-3 flex items-center shadow-lg border border-logo-dark-2/10">
              <img src={logo} alt="MarcosPVC" className="max-h-14 w-auto transition-transform duration-300 hover:scale-105" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            <a href="#home" className="text-white/90 hover:text-logo-dark-2 font-semibold tracking-wide px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2 shadow-sm">
              Início
            </a>
            <a href="#services" className="text-white/90 hover:text-logo-dark-2 font-semibold tracking-wide px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2 shadow-sm">
              Serviços
            </a>
            <a href="#about" className="text-white/90 hover:text-logo-dark-2 font-semibold tracking-wide px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2 shadow-sm">
              Sobre
            </a>
            <a href="#contact" className="text-white/90 hover:text-logo-dark-2 font-semibold tracking-wide px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2 shadow-sm">
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-logo-dark-2 focus:outline-none"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Menu lateral animado, filho do overlay, não fecha ao clicar dentro */}
            <div
              className="absolute top-20 left-0 h-[calc(100vh-5rem)] w-64 max-w-[80vw] bg-[#06060c] shadow-2xl border-r border-logo-dark-2/30 px-6 pt-8 pb-6 flex flex-col space-y-2 animate-slideInLeft z-[110]"
              style={{backgroundColor:'#06060c', opacity:1, cursor: 'auto'}}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-logo-dark-2 focus:outline-none"
                aria-label="Fechar menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-white hover:text-logo-dark-2 font-semibold rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2">
                Início
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-white hover:text-logo-dark-2 font-semibold rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2">
                Serviços
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-white hover:text-logo-dark-2 font-semibold rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2">
                Sobre
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-white hover:text-logo-dark-2 font-semibold rounded transition-all duration-200 hover:bg-white/10 focus:bg-blue-500/30 focus:outline-blue-500 focus:outline-2">
                Contato
              </a>
            </div>
            {/* Animação slideInLeft */}
            <style>{`
              @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(-80px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .animate-slideInLeft {
                animation: slideInLeft 0.35s cubic-bezier(.4,0,.2,1);
              }
            `}</style>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

