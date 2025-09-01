import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-logo-dark-1 mb-6">Sobre a MARCOS PVC</h2>
       <p className="text-lg md:text-xl text-gray-700 mb-8">
  Com 15 anos de experiência, a MARCOS PVC é referência em soluções de PVC para residências, lojas e empresas. Oferecemos forros, divisórias e uma linha completa de produtos de alta qualidade, com instalação profissional, projetos sob medida e garantia de 5 anos. Nosso compromisso é proporcionar agilidade, atendimento personalizado e acabamento impecável em cada ambiente atendido.
</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex-1">
            <h3 className="text-xl font-semibold text-logo-dark-2 mb-2">Diferenciais</h3>
            <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
              <li>Atendimento rápido e personalizado</li>
              <li>Equipe própria e qualificada</li>
              <li>Produtos certificados e garantia</li>
              <li>Orçamento sem compromisso</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex-1">
            <h3 className="text-xl font-semibold text-logo-dark-2 mb-2">Missão</h3>
            <p className="text-gray-700">Levar praticidade, beleza e durabilidade para obras e comércios locais, com produtos e projetos inovadores em PVC.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

