import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="rounded-2xl p-1 mb-4 flex flex-col h-full" style={{background: 'linear-gradient(120deg, #06060c 0%, #06060d 60%, #0B3C49 100%)'}}>
            <div className="bg-white rounded-2xl p-8 flex-1">
              <h3 className="text-2xl font-bold text-logo-dark-1 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">
                      AV PADRE JOSE HOLANDA DO VALE, 1990<br />
                      BAIRRO PIRATININGA<br />
                      MARACANAÚ - CE, 61905-292
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 text-xl">🏢</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CNPJ</h4>
                    <p className="text-gray-600">18.832.898/0001-20</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(85) 3371-0186</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 text-xl flex items-center min-w-[1.5em] justify-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.75a1 1 0 0 0 1.22 1.22l4.75-1.3A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 10-10A10 10 0 0 1 12 22Zm5.2-7.8-2.2-.6a1 1 0 0 0-1 .26l-.6.6a7.72 7.72 0 0 1-3.6-3.6l.6-.6a1 1 0 0 0 .26-1l-.6-2.2A1 1 0 0 0 9 6H7a1 1 0 0 0-1 1 10 10 0 0 0 10 10 1 1 0 0 0 1-1v-2a1 1 0 0 0-.8-1Z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">(85) 98735-2175</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mapa ao lado */}
          <div className="rounded-2xl p-1 mb-4 flex items-center justify-center h-full" style={{background: 'linear-gradient(120deg, #06060c 0%, #06060d 60%, #0B3C49 100%)'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.695141969905!2d-38.629737925496215!3d-3.8754036439366444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7536b535cd997%3A0x285896c2e730ae74!2sMarcos%20PVC!5e0!3m2!1spt-BR!2sbr!4v1753376536878!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', minWidth: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Marcos PVC"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;