import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[80vh] text-white text-center px-4 pt-32 pb-16 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Gradiente decorativo com as cores da logomarca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(120deg, #06060c 0%, #06060d 60%, #0B3C49 100%)',
          opacity: 0.96,
        }}
      />
      <div className="relative z-10">
        {/* Conteúdo principal do Hero */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Vendas e Montagem de Forro PVC, divisórias para sua residência, loja ou empresa!
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
        </motion.div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
          <a
            href="https://wa.me/5585987352175"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 border border-[#25D366] bg-gradient-to-r from-[#06060c] via-[#0B3C49] to-[#25D366] text-white hover:from-[#0B3C49] hover:to-[#06060c] transition-all duration-200 min-w-[260px] justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="#25D366" d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.142 1.6 5.94L.057 23.25a1 1 0 0 0 1.193 1.193l5.31-1.543A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 0 1-5.063-1.39l-.36-.21-3.15.917.917-3.15-.21-.36A9.93 9.93 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.8-2.2-.6a1 1 0 0 0-1 .26l-.6.6a7.72 7.72 0 0 1-3.6-3.6l.6-.6a1 1 0 0 0 .26-1l-.6-2.2A1 1 0 0 0 9 6H7a1 1 0 0 0-1 1 10 10 0 0 0 10 10 1 1 0 0 0 1-1v-2a1 1 0 0 0-.8-1z"/>
            </svg>
            Fale pelo WhatsApp
          </a>
          <a
            href="https://www.instagram.com/marcospvc1990"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="font-bold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 border border-[#515BD4] bg-gradient-to-r from-[#06060c] via-[#0B3C49] to-[#515BD4] text-white hover:from-[#0B3C49] hover:to-[#06060c] transition-all duration-200 min-w-[140px] justify-center"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="ig-gradient-hero" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F58529"/>
                  <stop offset="50%" stopColor="#DD2A7B"/>
                  <stop offset="100%" stopColor="#515BD4"/>
                </linearGradient>
              </defs>
              <path fill="url(#ig-gradient-hero)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
            Conheça-nos no Instagram
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

