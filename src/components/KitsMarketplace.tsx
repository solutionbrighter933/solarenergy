import React, { useState } from 'react';
import { ShoppingCart, Zap, CheckCircle, AlertTriangle, Wrench, Phone, Star, Filter, Grid, List, Sun, Settings } from 'lucide-react';

const KitsMarketplace = () => {
  const [visualizacao, setVisualizacao] = useState<'grid' | 'lista'>('grid');
  const [filtroOrdem, setFiltroOrdem] = useState('preco-menor');

  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const kits = [
    {
      id: 1,
      paineis: 4,
      potencia: '2,2kWp',
      inversor: '2kW Monofásico',
      economia: 'R$ 150-250/mês',
      preco: 4490,
      descricao: '4 painéis solares 550W + inversor WEG 2kW monofásico + estrutura de fixação para telhado',
      ideal: 'Residências pequenas com baixo consumo',
      exemplos: 'Perfeito para: 1 geladeira, 1 TV, iluminação LED e pequenos eletrodomésticos',
      area: '8m²',
      producao: '200 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 2,
      paineis: 6,
      potencia: '3,3kWp',
      inversor: '3kW Monofásico',
      economia: 'R$ 300-400/mês',
      preco: 6580,
      descricao: '6 painéis solares 550W + inversor WEG 3kW monofásico + estrutura de fixação para telhado',
      ideal: 'Residências médias com consumo moderado',
      exemplos: 'Ideal para: Casa com 2-3 quartos, ar-condicionado ocasional, todos os eletrodomésticos',
      area: '12m²',
      producao: '350 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 3,
      paineis: 8,
      potencia: '4,4kWp',
      inversor: '3kW Monofásico',
      economia: 'R$ 400-500/mês',
      preco: 7980,
      descricao: '8 painéis solares 550W + inversor WEG 3kW monofásico + estrutura de fixação para telhado',
      ideal: 'Residências grandes com alto consumo',
      exemplos: 'Perfeito para: Casa com 3-4 quartos, ar-condicionado, chuveiro elétrico, piscina pequena',
      area: '16m²',
      producao: '450 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png',
      popular: true
    },
    {
      id: 4,
      paineis: 10,
      potencia: '5,5kWp',
      inversor: '4kW Monofásico',
      economia: 'R$ 550-650/mês',
      preco: 9890,
      descricao: '10 painéis solares 550W + inversor WEG 4kW monofásico + estrutura de fixação para telhado',
      ideal: 'Residências grandes com consumo elevado',
      exemplos: 'Ideal para: Casa grande, múltiplos ar-condicionados, aquecedor elétrico, home office',
      area: '20m²',
      producao: '600 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 5,
      paineis: 12,
      potencia: '6,6kWp',
      inversor: '5kW Monofásico',
      economia: 'R$ 700-800/mês',
      preco: 11980,
      descricao: '12 painéis solares 550W + inversor WEG 5kW monofásico + estrutura de fixação para telhado',
      ideal: 'Residências de luxo com alto consumo',
      exemplos: 'Perfeito para: Casa com piscina aquecida, múltiplos ares, sauna, alto consumo geral',
      area: '24m²',
      producao: '750 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 6,
      paineis: 14,
      potencia: '7,7kWp',
      inversor: '6kW Monofásico',
      economia: 'R$ 800-900/mês',
      preco: 13980,
      descricao: '14 painéis solares 550W + inversor WEG 6kW monofásico + estrutura de fixação para telhado',
      ideal: 'Pequenos comércios e estabelecimentos',
      exemplos: 'Ideal para: Loja, consultório, escritório, padaria, salão de beleza',
      area: '28m²',
      producao: '850 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 7,
      paineis: 16,
      potencia: '8,8kWp',
      inversor: '6kW Monofásico',
      economia: 'R$ 900-1.000/mês',
      preco: 15980,
      descricao: '16 painéis solares 550W + inversor WEG 6kW monofásico + estrutura de fixação para telhado',
      ideal: 'Comércios médios e estabelecimentos maiores',
      exemplos: 'Perfeito para: Restaurante, academia, farmácia, supermercado pequeno',
      area: '32m²',
      producao: '950 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 8,
      paineis: 20,
      potencia: '11kWp',
      inversor: '8kW Monofásico',
      economia: 'R$ 1.100-1.300/mês',
      preco: 19890,
      descricao: '20 painéis solares 550W + inversor WEG 8kW monofásico + estrutura de fixação para telhado',
      ideal: 'Grandes estabelecimentos comerciais',
      exemplos: 'Ideal para: Indústria pequena, hotel, clínica, laboratório, gráfica',
      area: '40m²',
      producao: '1.200 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    },
    {
      id: 9,
      paineis: 26,
      potencia: '14,3kWp',
      inversor: '10kW Monofásico',
      economia: 'R$ 1.500-1.700/mês',
      preco: 25980,
      descricao: '26 painéis solares 550W + inversor WEG 10kW monofásico + estrutura de fixação para telhado',
      ideal: 'Indústrias pequenas e grandes consumidores',
      exemplos: 'Perfeito para: Fábrica, frigorífico, posto de gasolina, concessionária',
      area: '52m²',
      producao: '1.600 kWh/mês',
      imagem: '/ChatGPT Image 12 de ago. de 2025, 13_10_13.png'
    }
  ];

  const kitsOrdenados = [...kits].sort((a, b) => {
    switch (filtroOrdem) {
      case 'preco-menor':
        return a.preco - b.preco;
      case 'preco-maior':
        return b.preco - a.preco;
      case 'potencia-menor':
        return a.paineis - b.paineis;
      case 'potencia-maior':
        return b.paineis - a.paineis;
      default:
        return 0;
    }
  });

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(preco);
  };

  return (
    <div id="kits-marketplace" className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Marketplace de Kits Solares
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Kits completos com painéis solares e inversores WEG. 
              Equipamentos de alta qualidade para sua instalação solar.
            </p>
            
            {/* Aviso Importante */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 max-w-4xl mx-auto rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Importante: Kits Vendidos Separadamente
                  </h3>
                  <p className="text-yellow-700">
                    Os kits solares <strong>NÃO incluem serviços de instalação ou engenharia</strong>. 
                    São vendidos apenas os equipamentos. Para instalação profissional, 
                    solicite orçamento separado com nossos especialistas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros e Controles */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={filtroOrdem}
                onChange={(e) => setFiltroOrdem(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="preco-menor">Menor Preço</option>
                <option value="preco-maior">Maior Preço</option>
                <option value="potencia-menor">Menor Potência</option>
                <option value="potencia-maior">Maior Potência</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setVisualizacao('grid')}
                className={`p-2 rounded-lg ${visualizacao === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setVisualizacao('lista')}
                className={`p-2 rounded-lg ${visualizacao === 'lista' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={visualizacao === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {kitsOrdenados.map((kit) => (
              <div key={kit.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${kit.popular ? 'ring-2 ring-green-500' : ''} ${visualizacao === 'lista' ? 'flex' : ''}`}>
                {kit.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      MAIS VENDIDO
                    </span>
                  </div>
                )}

                <div className={visualizacao === 'lista' ? 'w-1/3' : 'w-full'}>
                  <img
                    src={kit.imagem}
                    alt={`Kit Solar ${kit.paineis} painéis`}
                    className={`object-cover ${visualizacao === 'lista' ? 'w-full h-full' : 'w-full h-48'}`}
                  />
                </div>

                <div className={`p-6 ${visualizacao === 'lista' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        Kit {kit.potencia}
                      </h3>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {kit.descricao}
                    </p>

                    {/* Seção "Para Quem é Este Kit?" */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 Para Quem é Este Kit?</h4>
                      <p className="text-blue-800 font-semibold text-sm mb-1">{kit.ideal}</p>
                      <p className="text-blue-700 text-sm">{kit.exemplos}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Área necessária:</span>
                        <p className="font-semibold text-gray-900">{kit.area}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Produção mensal:</span>
                        <p className="font-semibold text-green-600">{kit.producao}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Economia mensal:</span>
                        <p className="font-bold text-green-600 text-lg">{kit.economia}</p>
                      </div>
                    </div>

                    {/* Especificações Técnicas */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">🔧 O que vem no kit:</h4>
                        <img 
                          src="/logo-weg-equipamentos.png" 
                          alt="WEG" 
                          className="h-8 w-auto"
                        />
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Sun className="h-3 w-3 text-blue-600" />
                          </div>
                          {kit.paineis} painéis solares 550W
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <Zap className="h-3 w-3 text-green-600" />
                          </div>
                          Inversor WEG {kit.inversor}
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <Grid className="h-3 w-3 text-yellow-600" />
                          </div>
                          Estrutura de fixação para telhado
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <Settings className="h-3 w-3 text-purple-600" />
                          </div>
                          Cabos e conectores inclusos
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-gray-900 mb-1">
                        {formatarPreco(kit.preco)}
                      </p>
                      <p className="text-gray-600">apenas equipamentos</p>
                    </div>

                    <div className="space-y-3">
                      {/* Botão RECOMENDADO - Engenharia + Instalação */}
                      <div className="relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ RECOMENDADO
                          </span>
                        </div>
                        <a
                          href={getWhatsAppLink(`Gostaria de orçamento para ENGENHARIA + INSTALAÇÃO do Kit Solar ${kit.potencia} (${kit.paineis} painéis). Podem me ajudar com um projeto completo?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors text-center block flex items-center justify-center text-lg shadow-lg"
                        >
                          <Wrench className="h-5 w-5 mr-2" />
                          Garantir Minha Instalação Segura
                        </a>
                      </div>
                      
                      {/* Botão Secundário - Comprar Kit */}
                      <a
                        href={getWhatsAppLink(`Tenho interesse no Kit Solar ${kit.potencia} (${kit.paineis} painéis) por ${formatarPreco(kit.preco)}. Gostaria de mais informações!`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center block flex items-center justify-center"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Comprar Kit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Engenharia e Instalação */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <Wrench className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precisa de Instalação Profissional?
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              <strong>⚠️ ATENÇÃO:</strong> Instalação inadequada pode causar incêndios, choques elétricos e perda da garantia dos equipamentos.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nossos engenheiros certificados garantem instalação 100% segura e dentro das normas técnicas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">🛡️ Segurança Garantida</h3>
                <p className="text-gray-600 text-sm">Instalação dentro das normas ABNT</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">📋 Projeto + Homologação</h3>
                <p className="text-gray-600 text-sm">Tudo aprovado na distribuidora</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">✅ Garantia Total</h3>
                <p className="text-gray-600 text-sm">5 anos instalação + 25 anos painéis</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 text-left">
              <h4 className="font-semibold text-red-800 mb-2">🚨 Riscos da Instalação Amadora:</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Risco de incêndio por conexões inadequadas</li>
                <li>• Perda total da garantia dos equipamentos</li>
                <li>• Sistema pode não ser homologado pela distribuidora</li>
                <li>• Problemas estruturais no telhado</li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink("Quero garantir uma instalação 100% segura e profissional para meu kit solar. Podem me ajudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center shadow-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              Garantir Minha Instalação Segura
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Dúvidas Frequentes sobre os Kits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">O que está incluso no kit?</h3>
              <p className="text-gray-700 text-sm">
                Painéis solares JA SOLAR, inversor WEG, estrutura de fixação, 
                cabos CC e CA, conectores e manual de instalação.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Preciso de instalador?</h3>
              <p className="text-gray-700 text-sm">
                Sim! A instalação deve ser feita por profissional certificado. 
                Oferecemos serviço de instalação separadamente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Qual a garantia dos equipamentos?</h3>
              <p className="text-gray-700 text-sm">
                Painéis: 25 anos de garantia de performance. 
                Inversor: 5 anos de garantia do fabricante WEG.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Como escolher o kit ideal?</h3>
              <p className="text-gray-700 text-sm">
                Baseie-se no seu consumo mensal em kWh. Nossos consultores 
                podem ajudar a dimensionar o kit perfeito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitsMarketplace;