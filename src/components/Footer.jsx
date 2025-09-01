import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-white py-8 mt-16 overflow-hidden animate-fadeInUp">
      {/* Gradiente igual ao header */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full z-0" style={{background: 'linear-gradient(120deg, #06060c 0%, #06060d 60%, #0B3C49 100%)', opacity: 0.98}} />
      <div className="relative max-w-7xl mx-auto px-4 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          {/* Instagram */}
          <a href="https://www.instagram.com/marcospvc1990" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F58529"/>
                  <stop offset="50%" stopColor="#DD2A7B"/>
                  <stop offset="100%" stopColor="#515BD4"/>
                </linearGradient>
              </defs>
              <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/fmarcoscomercial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors">
            <svg className="w-6 h-6" fill="#1877F3" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/>
            </svg>
          </a>
        </div>
        <div className="text-left text-sm opacity-80">
          <div>
            <span>CNPJ: 18.832.898/0001-20</span>
            <span className="ml-4">(85) 3371-0186</span>
          </div>
          <div>2025 MARCOS PVC LTDA. Todos os direitos reservados.</div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;