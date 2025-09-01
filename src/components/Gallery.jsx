import React from 'react';

const galleryImages = [
  '/assets/obra1.jpg',
  '/assets/obra2.jpg',
  '/assets/obra3.jpg',
  '/assets/obra4.jpg',
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-logo-dark-1 text-center mb-12">Galeria de Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={src}
                alt={`Projeto PVC ${idx + 1}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
