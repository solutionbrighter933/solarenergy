import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Sempre true, não pode ser desabilitado
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Verificar se o usuário já fez uma escolha sobre cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Mostrar banner após 2 segundos
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Carregar preferências salvas
      const savedPreferences = JSON.parse(cookieConsent);
      setCookiePreferences(savedPreferences);
    }
  }, []);

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCustomPreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Não permite desabilitar cookies essenciais
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-yellow-600 shadow-2xl z-50 transform transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            // Banner Principal
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start">
                <Cookie className="h-8 w-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🍪 Nós Usamos Cookies
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                    Utilizamos cookies para melhorar sua experiência, personalizar conteúdo, 
                    analisar nosso tráfego e fornecer funcionalidades de redes sociais. 
                    Ao continuar navegando, você concorda com nossa{' '}
                    <button 
                      onClick={() => {
                        window.location.hash = 'politica-privacidade';
                        setShowBanner(false);
                      }}
                      className="text-yellow-600 hover:text-yellow-700 underline font-semibold"
                    >
                      Política de Privacidade
                    </button>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Personalizar
                </button>
                <button
                  onClick={acceptEssentialOnly}
                  className="flex items-center justify-center px-4 py-2 border-2 border-yellow-600 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                >
                  Apenas Essenciais
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="flex items-center justify-center px-6 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Aceitar Todos
                </button>
              </div>
            </div>
          ) : (
            // Configurações Detalhadas
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Configurações de Cookies
                  </h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Cookies Essenciais */}
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      SEMPRE ATIVO
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Necessários para o funcionamento básico do site. 
                    Incluem navegação, segurança e funcionalidades essenciais.
                  </p>
                  <p className="text-green-700 text-xs font-semibold">
                    ✓ Não podem ser desabilitados
                  </p>
                </div>

                {/* Cookies de Performance */}
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies de Análise</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Ajudam a entender como você usa o site, quais páginas visita 
                    e como podemos melhorar sua experiência.
                  </p>
                </div>

                {/* Cookies Funcionais */}
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies Funcionais</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functional}
                        onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Lembram suas preferências e configurações para 
                    personalizar sua experiência no site.
                  </p>
                </div>

                {/* Cookies de Marketing */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies de Marketing</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Utilizados para mostrar anúncios relevantes e 
                    medir a eficácia de campanhas publicitárias.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={acceptEssentialOnly}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Apenas Essenciais
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;