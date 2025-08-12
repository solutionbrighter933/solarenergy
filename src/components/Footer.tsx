import React from 'react';
import { Sun, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "5535999353971";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre energia solar da Soluti Energia.";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img src="/LogoNova%20(2).png" alt="Soluti Energia" className="h-16 w-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando o futuro energético do Brasil com soluções solares 
              inteligentes e sustentáveis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/solutienergia" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossas Soluções</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#gere-energia"
                  onClick={() => {
                    window.location.hash = 'gere-energia';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos Personalizados
                </a>
              </li>
              <li>
                <a 
                  href="#kits-marketplace"
                  onClick={() => {
                    window.location.hash = 'kits-marketplace';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kits Solares
                </a>
              </li>
              <li>
                <a 
                  href="#economize"
                  onClick={() => {
                    window.location.hash = 'economize';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Energia por Assinatura
                </a>
              </li>
              <li>
                <a 
                  href="#cases"
                  onClick={() => {
                    window.location.hash = 'cases';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cases de Sucesso
                </a>
              </li>
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Segmentos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#gere-energia"
                  onClick={() => {
                    window.location.hash = 'gere-energia';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Residencial
                </a>
              </li>
              <li>
                <a 
                  href="#gere-energia"
                  onClick={() => {
                    window.location.hash = 'gere-energia';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Comercial
                </a>
              </li>
              <li>
                <a 
                  href="#gere-energia"
                  onClick={() => {
                    window.location.hash = 'gere-energia';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industrial
                </a>
              </li>
              <li>
                <a 
                  href="#gere-energia"
                  onClick={() => {
                    window.location.hash = 'gere-energia';
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Agronegócio
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (35) 99935-3971
              </a>
              <a
                href="mailto:contato@solutienergia.com.br"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@solutienergia.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Soluti Energia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#politica-privacidade"
                onClick={() => {
                  window.location.hash = 'politica-privacidade';
                  window.scrollTo(0, 0);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#termos-uso"
                onClick={() => {
                  window.location.hash = 'termos-uso';
                  window.scrollTo(0, 0);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="#politica-privacidade"
                onClick={() => {
                  window.location.hash = 'politica-privacidade';
                  window.scrollTo(0, 0);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Fixo no Footer */}
      <div className="bg-yellow-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-lg font-bold text-white">
                Pronto para economizar na sua conta de luz?
              </h3>
              <p className="text-yellow-100">
                Faça sua simulação gratuita agora mesmo!
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Quero fazer uma simulação gratuita de energia solar!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Simular Agora
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;