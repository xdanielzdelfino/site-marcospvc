const services = [
  {
    title: 'Forros em PVC',
    icon: '🏠',
    description: 'Soluções modernas e resistentes para tetos residenciais e comerciais.'
  },
  {
    title: 'Divisórias',
    icon: '🧱',
    description: 'Ambientes personalizados e funcionais para empresas e residências.'
  },
  {
    title: 'Instalação Profissional',
    icon: '🛠️',
    description: 'Equipe especializada para garantir acabamento perfeito e durabilidade.'
  }
];

import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-logo-dark-1 text-center mb-12">Produtos & Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-logo-dark-1 text-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

