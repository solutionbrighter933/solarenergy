import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GerarEnergia from './components/GerarEnergia';
import KitsMarketplace from './components/KitsMarketplace';
import EconomizeSemInstalar from './components/EconomizeSemInstalar';
import CasesSucesso from './components/CasesSucesso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import TermosUso from './components/TermosUso';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieConsent from './components/CookieConsent';

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('inicio');

  const renderizarPagina = () => {
    switch (paginaAtiva) {
      case 'inicio':
        return <HomePage />;
      case 'gere-energia':
        return <GerarEnergia />;
      case 'kits-marketplace':
        return <KitsMarketplace />;
      case 'economize':
        return <EconomizeSemInstalar />;
      case 'cases':
        return <CasesSucesso />;
      case 'politica-privacidade':
        return <PoliticaPrivacidade />;
      case 'termos-uso':
        return <TermosUso />;
      default:
        return <HomePage />;
    }
  };

  // Detectar mudanças na URL para navegação
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setPaginaAtiva(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Verificar hash inicial

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderizarPagina()}
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
}

export default App;