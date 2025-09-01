import React from 'react';

const endereco = {
  rua: 'Rua Exemplo, 123',
  bairro: 'Centro',
  cidade: 'Sua Cidade',
  uf: 'UF',
  cep: '00000-000',
  horario: 'Seg a Sex: 8h às 18h',
  telefone: '(99) 99999-9999',
  maps: 'https://www.google.com/maps?q=-23.55052,-46.633308',
};

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-logo-dark-1 text-center mb-8">Localização</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=-23.55052,-46.633308&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa MARCOSPVC"
            ></iframe>
          </div>
          <div className="flex-1 text-lg text-gray-700 space-y-4">
            <div><strong>Endereço:</strong> {endereco.rua}, {endereco.bairro}, {endereco.cidade} - {endereco.uf}</div>
            <div><strong>CEP:</strong> {endereco.cep}</div>
            <div><strong>Horário:</strong> {endereco.horario}</div>
            <div><strong>Telefone:</strong> <a href={`tel:${endereco.telefone.replace(/\D/g, '')}`} className="text-logo-dark-2 underline">{endereco.telefone}</a></div>
            <a href={endereco.maps} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-logo-dark-2 text-white px-6 py-2 rounded-lg font-semibold hover:bg-logo-dark-1 transition-colors">Ver no Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
