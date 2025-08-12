import React from 'react';
import { ArrowRight, Zap, Home, Factory, Leaf, Star, Users, Award, Sun, Shield, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="inicio" className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Economize até <span className="text-yellow-600">95%</span> na sua conta de luz
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Descubra como a energia solar pode transformar sua economia. 
                Mais de 5.000 clientes já economizam milhares por mês.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink("Quero fazer uma simulação gratuita da minha economia com energia solar!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
                >
                  Simular Minha Economia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={getWhatsAppLink("Gostaria de falar com um especialista sobre energia solar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-colors text-center"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/head.webp"
                alt="Família feliz economizando com energia solar"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">R$ 2.847</p>
                    <p className="text-gray-600">economia média/mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Parceria de Confiança WEG */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Qualidade e Desempenho Garantidos com a Tecnologia WEG
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Somos integradores oficiais da WEG, líder brasileira em tecnologia. 
              Isso significa mais segurança, eficiência e a melhor garantia para o seu investimento solar.
            </p>
            
            {/* Logo WEG Centralizada */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda - Logo WEG e Produtos */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-2xl shadow-2xl text-white h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Tecnologia WEG
                  </h3>
                  <p className="text-green-100 text-sm">
                    Equipamentos de alta performance
                  </p>
                </div>
                
                <div className="space-y-8">
                  {/* Inversor WEG */}
                  <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-25 hover:bg-opacity-20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg">
                        <img
                          src="/Inversor.png"
                          alt="Inversor WEG"
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">Inversores WEG</h4>
                        <p className="text-green-100 text-sm">
                          Máxima eficiência e confiabilidade
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-green-200 text-xs">Garantia 5 anos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Painéis Solares */}
                  <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-25 hover:bg-opacity-20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg">
                        <img
                          src="/Painel.webp"
                          alt="Painel Solar"
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">Painéis Solares</h4>
                        <p className="text-green-100 text-sm">
                          Alta eficiência energética
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-green-200 text-xs">Garantia 25 anos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Carregadores Elétricos */}
                  <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-25 hover:bg-opacity-20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg">
                        <img
                          src="/Carregador.jpg"
                          alt="Carregador Elétrico WEG"
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">Carregadores Elétricos</h4>
                        <p className="text-green-100 text-sm">
                          Mobilidade elétrica inteligente
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-green-200 text-xs">Futuro sustentável</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Benefícios */}
            <div>
              {/* Logo WEG */}
              <div className="text-center mb-8">
                <img
                  src="/weg-logo-0-1-1024x434.png"
                  alt="WEG - Tecnologia Nacional"
                  className="h-32 mx-auto mb-4"
                />
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-center">
                    <Award className="h-6 w-6 mr-3" />
                    <div className="text-center">
                      <h4 className="text-lg font-bold">Integrador Oficial WEG</h4>
                      <p className="text-green-100 text-sm">Certificação e garantia total</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Tecnologia 100% Nacional
                    </h3>
                    <p className="text-gray-700">
                      Equipamentos desenvolvidos no Brasil pela WEG, com mais de 60 anos 
                      de experiência em tecnologia industrial de ponta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Garantia até 25 Anos
                    </h3>
                    <p className="text-gray-700">
                      A maior garantia do mercado, respaldada pela solidez e tradição 
                      da WEG, líder em soluções tecnológicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Kit Completo Otimizado
                    </h3>
                    <p className="text-gray-700">
                      Todos os componentes perfeitamente integrados e testados, 
                      garantindo máxima eficiência e performance do sistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Soluções para o Futuro
                    </h3>
                    <p className="text-gray-700">
                      Preparado para mobilidade elétrica com carregadores WEG, 
                      transformando sua casa em um ecossistema energético completo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA da Seção */}
          <div className="text-center mt-12">
            <a
              href={getWhatsAppLink("Quero conhecer as soluções com tecnologia WEG e fazer minha simulação!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Award className="mr-3 h-6 w-6" />
              Conhecer Soluções WEG
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Direcionamento - 3 Soluções */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha a Solução Ideal Para Você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos 3 modelos de negócio para atender diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solução 1 - Projetos Personalizados */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <Home className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Projeto Completo</h3>
                <p className="text-gray-700">Instalação personalizada com garantia total</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Projeto sob medida
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Equipamentos de ponta com tecnologia e garantia WEG
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Instalação completa
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Garantia de 25 anos
                </li>
              </ul>
              <a
                onClick={() => {
                  window.location.hash = 'gere-energia';
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Ver Projetos Personalizados
              </a>
            </div>

            {/* Solução 2 - Kits + Engenharia */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition-shadow border-2 border-green-200">
              <div className="text-center mb-6">
                <Factory className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kits Solares</h3>
                <p className="text-gray-700">Equipamentos de qualidade para sua instalação</p>
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  MAIS POPULAR
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Kits com qualidade e eficiência WEG
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  9 opções de potência
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Estruturas de fixação inclusas
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Instalação opcional
                </li>
              </ul>
              <a
                onClick={() => {
                  window.location.hash = 'kits-marketplace';
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
              >
                Ver Marketplace de Kits
              </a>
            </div>

            {/* Solução 3 - Energia por Assinatura */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <Leaf className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Energia por Assinatura</h3>
                <p className="text-gray-700">Economize sem instalar nada</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Zero investimento inicial
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Sem instalação
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Economia imediata
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Sem manutenção
                </li>
              </ul>
              <a
                onClick={() => {
                  window.location.hash = 'economize';
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Economizar Sem Instalar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cases Reais de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Conheça histórias reais de clientes que transformaram suas contas de luz
            </p>
          </div>

          {/* Números de Impacto */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-gray-900">150+</p>
                <p className="text-gray-600">Projetos Instalados</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-yellow-600 mx-auto mb-4 text-3xl font-bold">R$</div>
                <p className="text-3xl font-bold text-gray-900">1M+</p>
                <p className="text-gray-600">Economizados/Ano</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-gray-900">95%</p>
                <p className="text-gray-600">Redução Máxima</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-gray-900">5MWp</p>
                <p className="text-gray-600">Potência Total</p>
              </div>
            </div>
          </div>

          {/* Cases Reais */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <img
                  src="Fazenda-Luciano.JPG"
                  alt="Fazenda Luciano"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  AGRONEGÓCIO
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fazenda Luciano</h3>
              <p className="text-gray-600 text-sm mb-3">Silvianópolis - MG</p>
              <p className="text-gray-700 mb-4">
                "Melhor investimento que já fiz! R$ 8.250 de economia mensal me permitiu expandir a fazenda e contratar mais funcionários."
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Economia/ano:</span>
                  <p className="font-bold text-green-600">R$ 99.000</p>
                </div>
                <div>
                  <span className="text-gray-500">Redução:</span>
                  <p className="font-bold text-green-600">95%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <img
                  src="Laticinio-Dois-Jota.JPG"
                  alt="Laticínio Dois Jota"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  COMERCIAL
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Laticínio Dois Jota</h3>
              <p className="text-gray-600 text-sm mb-3">Silvianópolis - MG</p>
              <p className="text-gray-700 mb-4">
                "A energia solar transformou nosso laticínio! Economizamos R$ 6.700 mensais e conseguimos ser mais competitivos no mercado."
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Economia/ano:</span>
                  <p className="font-bold text-green-600">R$ 80.865</p>
                </div>
                <div>
                  <span className="text-gray-500">Redução:</span>
                  <p className="font-bold text-green-600">93%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <img
                  src="Casa-Fatima.JPG"
                  alt="Casa Fátima"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  RESIDENCIAL
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Casa Fátima</h3>
              <p className="text-gray-600 text-sm mb-3">Pouso Alegre - MG</p>
              <p className="text-gray-700 mb-4">
                "Energia solar foi a melhor decisão para nossa família! Conta de luz quase zerada e mais dinheiro para outras prioridades."
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Economia/ano:</span>
                  <p className="font-bold text-green-600">R$ 13.200</p>
                </div>
                <div>
                  <span className="text-gray-500">Redução:</span>
                  <p className="font-bold text-green-600">88%</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final da Seção */}
          <div className="text-center mt-12">
            <a
              href="#cases"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition-colors inline-flex items-center"
            >
              Ver Todos os 150+ Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;