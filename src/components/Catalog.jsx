import React from 'react';

const catalog = [
  {
    title: 'Forros em PVC',
    image: '/src/assets/forro-pvc.jpg',
    description: 'Forros de PVC de alta qualidade para residências, lojas e empresas. Diversas cores e acabamentos.'
  },
  {
    title: 'Divisórias em PVC',
    image: '/src/assets/divisoria-pvc.jpg',
    description: 'Divisórias práticas e resistentes, ideais para ambientes comerciais e corporativos.'
  },
  {
    title: 'Portas Sanfonadas',
    image: '/src/assets/porta-sanfonada.jpg',
    description: 'Portas sanfonadas em PVC, perfeitas para otimizar espaços com praticidade e estilo.'
  },
  {
    title: 'Instalação Profissional',
    image: '/src/assets/instalacao.jpg',
    description: 'Equipe especializada para instalação de todos os produtos, garantindo acabamento impecável.'
  },
  {
    title: 'Projetos Personalizados',
    image: '/src/assets/projetos.jpg',
    description: 'Soluções sob medida para cada cliente, adaptando produtos e serviços às necessidades do seu ambiente.'
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-logo-dark-1 text-center mb-12">Catálogo de Produtos & Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-stretch">
          {catalog.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-logo-dark-2">{item.title}</h3>
              <p className="text-base text-gray-700 mb-4 text-center">{item.description}</p>
              <a href="#contact" className="mt-auto inline-block text-white px-6 py-2 rounded-lg font-semibold transition-colors bg-gradient-to-r from-[#06060c] via-[#06060d] to-[#0B3C49] hover:from-[#0B3C49] hover:to-[#06060c] shadow-lg">Solicitar Orçamento</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
