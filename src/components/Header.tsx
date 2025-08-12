import React, { useState } from 'react';
import { Menu, X, Sun, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "5535999353971";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre energia solar da Soluti Energia.";

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/LogoNova%20(2).png" alt="Soluti Energia" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Início
            </a>
            <a href="#gere-energia" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Gere Sua Energia
            </a>
            <a href="#kits-marketplace" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Kits Solares
            </a>
            <a href="#economize" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Economize Sem Instalar
            </a>
            <a href="#cases" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Cases de Sucesso
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-yellow-600">
                Início
              </a>
              <a href="#gere-energia" className="block px-3 py-2 text-gray-700 hover:text-yellow-600">
                Gere Sua Energia
              </a>
              <a href="#kits-marketplace" className="block px-3 py-2 text-gray-700 hover:text-yellow-600">
                Kits Solares
              </a>
              <a href="#economize" className="block px-3 py-2 text-gray-700 hover:text-yellow-600">
                Economize Sem Instalar
              </a>
              <a href="#cases" className="block px-3 py-2 text-gray-700 hover:text-yellow-600">
                Cases de Sucesso
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-green-600 text-white rounded-lg text-center font-semibold"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;