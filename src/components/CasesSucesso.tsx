import React, { useState } from 'react';
import { Filter, MapPin, DollarSign, Calendar, ArrowRight, Star, Play, Home, Building, Tractor } from 'lucide-react';

const CasesSucesso = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const cases = [
    {
      id: 1,
      categoria: 'agronegocio',
      nome: 'Fazenda Rogério',
      localizacao: 'Turvolândia - MG',
      imagem: '/Fazenda-Rogério.JPG',
      economiaAnual: 'R$ 19.800',
      potencia: '13,20kWp',
      payback: '2,3 anos',
      reducao: '88%',
      dataInstalacao: 'Fev 2023',
      depoimento: 'A energia solar revolucionou minha fazenda! Economizo mais de R$ 1.600 por mês e posso investir mais na produção.',
      detalhes: {
        investimento: 'R$ 65.000',
        paineis: '33 painéis 400W',
        area: '66m²',
        producao: '1.650 kWh/mês'
      }
    },
    {
      id: 2,
      categoria: 'agronegocio',
      nome: 'Fazenda Ramon',
      localizacao: 'Turvolândia - MG',
      imagem: '/Fazenda-Ramon.JPG',
      economiaAnual: 'R$ 57.750',
      potencia: '38,50kWp',
      payback: '2,7 anos',
      reducao: '91%',
      dataInstalacao: 'Mar 2023',
      depoimento: 'Incrível como a energia solar mudou nossa operação! Economizamos quase R$ 5.000 por mês e aumentamos nossa margem de lucro.',
      detalhes: {
        investimento: 'R$ 189.000',
        paineis: '96 painéis 400W',
        area: '192m²',
        producao: '4.812 kWh/mês'
      }
    },
    {
      id: 3,
      categoria: 'agronegocio',
      nome: 'Fazenda Luciano',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Fazenda-Luciano.JPG',
      economiaAnual: 'R$ 99.000',
      potencia: '66kWp',
      payback: '2,9 anos',
      reducao: '95%',
      dataInstalacao: 'Jan 2023',
      depoimento: 'Melhor investimento que já fiz! R$ 8.250 de economia mensal me permitiu expandir a fazenda e contratar mais funcionários.',
      detalhes: {
        investimento: 'R$ 324.000',
        paineis: '165 painéis 400W',
        area: '330m²',
        producao: '8.250 kWh/mês'
      }
    },
    {
      id: 4,
      categoria: 'comercial',
      nome: 'Laticínio Dois Jota',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Laticinio-Dois-Jota.JPG',
      economiaAnual: 'R$ 80.865',
      potencia: '53,90kWp',
      payback: '2,5 anos',
      reducao: '93%',
      dataInstalacao: 'Abr 2023',
      depoimento: 'A energia solar transformou nosso laticínio! Economizamos R$ 6.700 mensais e conseguimos ser mais competitivos no mercado.',
      detalhes: {
        investimento: 'R$ 264.000',
        paineis: '135 painéis 400W',
        area: '270m²',
        producao: '6.737 kWh/mês'
      }
    },
    {
      id: 5,
      categoria: 'agronegocio',
      nome: 'Fazenda João Mineiro',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Fazenda-Joao-Mineiro.JPG',
      economiaAnual: 'R$ 79.200',
      potencia: '52,80kWp',
      payback: '2,8 anos',
      reducao: '90%',
      dataInstalacao: 'Mai 2023',
      depoimento: 'Fantástico! A energia solar me deu liberdade financeira. Economizo R$ 6.600 por mês e posso focar no que amo: a agricultura.',
      detalhes: {
        investimento: 'R$ 259.000',
        paineis: '132 painéis 400W',
        area: '264m²',
        producao: '6.600 kWh/mês'
      }
    },
    {
      id: 6,
      categoria: 'comercial',
      nome: 'Brinquedoteca',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Brinquedoteca.JPG',
      economiaAnual: 'R$ 49.500',
      potencia: '33kWp',
      payback: '2,4 anos',
      reducao: '87%',
      dataInstalacao: 'Jun 2023',
      depoimento: 'A energia solar trouxe alegria não só para as crianças, mas para nosso caixa! Economizamos R$ 4.125 mensais.',
      detalhes: {
        investimento: 'R$ 162.000',
        paineis: '82 painéis 400W',
        area: '164m²',
        producao: '4.125 kWh/mês'
      }
    },
    {
      id: 7,
      categoria: 'agronegocio',
      nome: 'Fazenda Eliezer',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Fazenda-Eliezer.JPG',
      economiaAnual: 'R$ 18.150',
      potencia: '12,10kWp',
      payback: '2,6 anos',
      reducao: '85%',
      dataInstalacao: 'Jul 2023',
      depoimento: 'Pequena fazenda, grande economia! R$ 1.512 por mês a menos na conta de luz fez toda diferença no meu orçamento.',
      detalhes: {
        investimento: 'R$ 59.000',
        paineis: '30 painéis 400W',
        area: '60m²',
        producao: '1.512 kWh/mês'
      }
    },
    {
      id: 8,
      categoria: 'comercial',
      nome: 'Farmácia do Dito',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Farmacia-Dito.JPG',
      economiaAnual: 'R$ 9.900',
      potencia: '6,60kWp',
      payback: '2,2 anos',
      reducao: '82%',
      dataInstalacao: 'Ago 2023',
      depoimento: 'A energia solar foi o melhor remédio para nossa farmácia! Economizamos R$ 825 mensais e melhoramos nossa margem.',
      detalhes: {
        investimento: 'R$ 32.000',
        paineis: '16 painéis 400W',
        area: '32m²',
        producao: '825 kWh/mês'
      }
    },
    {
      id: 9,
      categoria: 'agronegocio',
      nome: 'Fazenda Afonso',
      localizacao: 'Ipuiúna - MG',
      imagem: '/Fazenda-Afonso.JPG',
      economiaAnual: 'R$ 26.400',
      potencia: '17,60kWp',
      payback: '2,7 anos',
      reducao: '89%',
      dataInstalacao: 'Set 2023',
      depoimento: 'Energia solar na fazenda é investimento certo! R$ 2.200 de economia mensal me deu mais tranquilidade financeira.',
      detalhes: {
        investimento: 'R$ 86.000',
        paineis: '44 painéis 400W',
        area: '88m²',
        producao: '2.200 kWh/mês'
      }
    },
    {
      id: 10,
      categoria: 'residencial',
      nome: 'Casa Pousada dos Campos',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Casa-Pousada-dos-campos.JPG',
      economiaAnual: 'R$ 13.200',
      potencia: '8,80kWp',
      payback: '2,9 anos',
      reducao: '86%',
      dataInstalacao: 'Out 2023',
      depoimento: 'Nossa pousada ficou ainda mais acolhedora com energia limpa! Economizamos R$ 1.100 por mês e nossos hóspedes adoram.',
      detalhes: {
        investimento: 'R$ 43.000',
        paineis: '22 painéis 400W',
        area: '44m²',
        producao: '1.100 kWh/mês'
      }
    },
    {
      id: 11,
      categoria: 'residencial',
      nome: 'Chácara Dourado',
      localizacao: 'Espírito Santo do Dourado - MG',
      imagem: '/Chacara.JPG',
      economiaAnual: 'R$ 13.200',
      potencia: '8,80kWp',
      payback: '3,0 anos',
      reducao: '84%',
      dataInstalacao: 'Nov 2023',
      depoimento: 'Vida no campo ficou ainda melhor! Nossa chácara produz energia limpa e economizamos R$ 1.100 todo mês.',
      detalhes: {
        investimento: 'R$ 43.000',
        paineis: '22 painéis 400W',
        area: '44m²',
        producao: '1.100 kWh/mês'
      }
    },
    {
      id: 12,
      categoria: 'residencial',
      nome: 'Casa Fátima',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Casa-Fatima.JPG',
      economiaAnual: 'R$ 13.200',
      potencia: '8,80kWp',
      payback: '2,8 anos',
      reducao: '88%',
      dataInstalacao: 'Dez 2023',
      depoimento: 'Energia solar foi a melhor decisão para nossa família! Conta de luz quase zerada e mais dinheiro para outras prioridades.',
      detalhes: {
        investimento: 'R$ 43.000',
        paineis: '22 painéis 400W',
        area: '44m²',
        producao: '1.100 kWh/mês'
      }
    },
    {
      id: 13,
      categoria: 'residencial',
      nome: 'Casa Ibirá',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Casa-Ibira.JPG',
      economiaAnual: 'R$ 13.800',
      potencia: '9,20kWp',
      payback: '2,9 anos',
      reducao: '87%',
      dataInstalacao: 'Jan 2024',
      depoimento: 'Incrível como nossa casa se tornou autossuficiente! R$ 1.150 de economia mensal fez toda diferença no orçamento familiar.',
      detalhes: {
        investimento: 'R$ 45.000',
        paineis: '23 painéis 400W',
        area: '46m²',
        producao: '1.150 kWh/mês'
      }
    },
    {
      id: 14,
      categoria: 'comercial',
      nome: 'Café Dourado',
      localizacao: 'Espírito Santo do Dourado - MG',
      imagem: '/Café-dourado.JPG',
      economiaAnual: 'R$ 6.600',
      potencia: '4,40kWp',
      payback: '2,3 anos',
      reducao: '79%',
      dataInstalacao: 'Fev 2024',
      depoimento: 'Nosso café ficou ainda mais especial com energia solar! Economizamos R$ 550 por mês e servimos com mais sustentabilidade.',
      detalhes: {
        investimento: 'R$ 22.000',
        paineis: '11 painéis 400W',
        area: '22m²',
        producao: '550 kWh/mês'
      }
    },
    {
      id: 15,
      categoria: 'agronegocio',
      nome: 'Fazenda Vilmar',
      localizacao: 'Turvolândia - MG',
      imagem: '/Fazenda-Vilmar.JPG',
      economiaAnual: 'R$ 33.000',
      potencia: '22kWp',
      payback: '2,6 anos',
      reducao: '91%',
      dataInstalacao: 'Mar 2024',
      depoimento: 'Energia solar revolucionou minha fazenda! R$ 2.750 de economia mensal me permitiu investir em novos equipamentos.',
      detalhes: {
        investimento: 'R$ 108.000',
        paineis: '55 painéis 400W',
        area: '110m²',
        producao: '2.750 kWh/mês'
      }
    },
    {
      id: 16,
      categoria: 'residencial',
      nome: 'Fazenda Estáquio',
      localizacao: 'Silvianópolis - MG',
      imagem: '/Fazenda-estáquio.JPG',
      economiaAnual: 'R$ 33.000',
      potencia: '22kWp',
      payback: '3,1 anos',
      reducao: '93%',
      dataInstalacao: 'Abr 2024',
      depoimento: 'Melhor investimento da minha vida! Nossa propriedade rural agora é autossuficiente e economizamos R$ 2.750 mensais.',
      detalhes: {
        investimento: 'R$ 108.000',
        paineis: '55 painéis 400W',
        area: '110m²',
        producao: '2.750 kWh/mês'
      }
    },
    {
      id: 17,
      categoria: 'comercial',
      nome: 'Lanchonete Denísio',
      localizacao: 'Santa Rita de Caldas - MG',
      imagem: '/Lanchonete-denísio.JPG',
      economiaAnual: 'R$ 26.400',
      potencia: '17,60kWp',
      payback: '2,5 anos',
      reducao: '85%',
      dataInstalacao: 'Mai 2024',
      depoimento: 'A lanchonete nunca foi tão lucrativa! Energia solar nos trouxe R$ 2.200 de economia mensal e mais competitividade.',
      detalhes: {
        investimento: 'R$ 86.000',
        paineis: '44 painéis 400W',
        area: '88m²',
        producao: '2.200 kWh/mês'
      }
    },
    {
      id: 18,
      categoria: 'residencial',
      nome: 'Casa Árvore Grande',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Casa-arvore-grande.JPG',
      economiaAnual: 'R$ 14.400',
      potencia: '9,60kWp',
      payback: '2,8 anos',
      reducao: '89%',
      dataInstalacao: 'Jun 2024',
      depoimento: 'Nossa casa embaixo da grande árvore agora produz energia limpa! R$ 1.200 de economia mensal é um alívio no orçamento.',
      detalhes: {
        investimento: 'R$ 47.000',
        paineis: '24 painéis 400W',
        area: '48m²',
        producao: '1.200 kWh/mês'
      }
    },
    {
      id: 19,
      categoria: 'residencial',
      nome: 'Casa Recanto dos Fernandes',
      localizacao: 'Pouso Alegre - MG',
      imagem: '/Casa-Recanto-Fernandes.JPG',
      economiaAnual: 'R$ 8.250',
      potencia: '5,50kWp',
      payback: '2,7 anos',
      reducao: '83%',
      dataInstalacao: 'Jul 2024',
      depoimento: 'Nosso recanto ficou ainda mais especial com energia solar! Família Fernandes economiza R$ 687 todo mês.',
      detalhes: {
        investimento: 'R$ 27.000',
        paineis: '14 painéis 400W',
        area: '28m²',
        producao: '687 kWh/mês'
      }
    }
  ];

  const casesFiltrados = filtroAtivo === 'todos' 
    ? cases 
    : cases.filter(caso => caso.categoria === filtroAtivo);

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'residencial':
        return <Home className="h-5 w-5" />;
      case 'comercial':
        return <Building className="h-5 w-5" />;
      case 'agronegocio':
        return <Tractor className="h-5 w-5" />;
      default:
        return <Home className="h-5 w-5" />;
    }
  };

  return (
    <div id="cases" className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Conheça histórias reais de clientes que transformaram suas contas de luz 
              com energia solar da Soluti Energia
            </p>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold text-green-600">5.000+</p>
                    <p className="text-gray-600">Clientes Satisfeitos</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">R$ 50M</p>
                    <p className="text-gray-600">Economizados</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">4.9/5</p>
                    <p className="text-gray-600">Avaliação Média</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFiltroAtivo('todos')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center ${
                filtroAtivo === 'todos'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              Todos os Cases
            </button>
            <button
              onClick={() => setFiltroAtivo('residencial')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center ${
                filtroAtivo === 'residencial'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home className="h-4 w-4 mr-2" />
              Residencial
            </button>
            <button
              onClick={() => setFiltroAtivo('comercial')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center ${
                filtroAtivo === 'comercial'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Building className="h-4 w-4 mr-2" />
              Comercial
            </button>
            <button
              onClick={() => setFiltroAtivo('agronegocio')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center ${
                filtroAtivo === 'agronegocio'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Tractor className="h-4 w-4 mr-2" />
              Agronegócio
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesFiltrados.map((caso) => (
              <div key={caso.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={caso.imagem}
                    alt={caso.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center ${
                      caso.categoria === 'residencial' ? 'bg-blue-600' :
                      caso.categoria === 'comercial' ? 'bg-green-600' : 'bg-orange-600'
                    }`}>
                      {getCategoriaIcon(caso.categoria)}
                      <span className="ml-1 capitalize">{caso.categoria}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Play className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{caso.nome}</h3>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{caso.localizacao}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Economia/ano</p>
                      <p className="font-bold text-green-600">{caso.economiaAnual}</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Payback</p>
                      <p className="font-bold text-blue-600">{caso.payback}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm italic">"{caso.depoimento}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div>
                      <span className="font-semibold">Potência:</span> {caso.potencia}
                    </div>
                    <div>
                      <span className="font-semibold">Redução:</span> {caso.reducao}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={getWhatsAppLink(`Gostaria de conhecer mais detalhes sobre o case ${caso.nome} e fazer um projeto similar!`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-center block"
                    >
                      Quero um Projeto Assim
                    </a>
                    <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                      Ver Detalhes Completos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos em Vídeo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos em Vídeo
            </h2>
            <p className="text-xl text-gray-600">
              Ouça diretamente de nossos clientes sobre sua experiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Depoimento Maria Silva"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 bg-white bg-opacity-20 p-4 rounded-full" />
                  <h3 className="text-xl font-bold mb-2">Maria Silva</h3>
                  <p className="text-sm">Residencial - São Paulo</p>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Depoimento João Santos"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 bg-white bg-opacity-20 p-4 rounded-full" />
                  <h3 className="text-xl font-bold mb-2">João Santos</h3>
                  <p className="text-sm">Padaria - Rio de Janeiro</p>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Depoimento Ana Costa"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 bg-white bg-opacity-20 p-4 rounded-full" />
                  <h3 className="text-xl font-bold mb-2">Ana Costa</h3>
                  <p className="text-sm">Fazenda - Goiânia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Pronto Para Ser Nosso Próximo Case de Sucesso?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Junte-se a mais de 5.000 clientes que já transformaram suas contas de luz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink("Vi os cases de sucesso e quero fazer minha simulação gratuita de energia solar!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
            >
              Fazer Minha Simulação
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={getWhatsAppLink("Gostaria de falar com um especialista sobre energia solar após ver os cases!")}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-colors text-center"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesSucesso;