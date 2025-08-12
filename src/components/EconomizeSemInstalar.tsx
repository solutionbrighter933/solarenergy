import React, { useState } from 'react';
import { Leaf, CheckCircle, ArrowRight, DollarSign, Clock, Shield, HelpCircle, Minus, Plus, Calculator, MapPin, Zap, Users, Award, Play } from 'lucide-react';

const EconomizeSemInstalar = () => {
  const [calculadoraEtapa, setCalculadoraEtapa] = useState(1);
  const [calculadoraData, setCalculadoraData] = useState({
    valorConta: '',
    estado: ''
  });
  const [resultadoEconomia, setResultadoEconomia] = useState({
    economiaPercentual: 0,
    economiaMensal: 0,
    economiaAnual: 0
  });

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const calcularEconomia = () => {
    const valor = parseFloat(calculadoraData.valorConta);
    if (valor && calculadoraData.estado) {
      // Desconto fixo de 20% para todos os clientes
      const percentualEconomia = 20;
      const economiaMensal = valor * (percentualEconomia / 100);
      const economiaAnual = economiaMensal * 12;

      setResultadoEconomia({
        economiaPercentual: percentualEconomia,
        economiaMensal: Math.round(economiaMensal),
        economiaAnual: Math.round(economiaAnual)
      });

      setCalculadoraEtapa(2);
    }
  };

  const handleFinalSubmit = () => {
    const message = `🌱 ENERGIA POR ASSINATURA - ANÁLISE GRATUITA

📊 RESULTADO DA SIMULAÇÃO:
• Valor atual da conta: R$ ${calculadoraData.valorConta}
• Estado: ${calculadoraData.estado}
• Economia estimada: ${resultadoEconomia.economiaPercentual}% (R$ ${resultadoEconomia.economiaMensal}/mês)
• Economia anual: R$ ${resultadoEconomia.economiaAnual}

👤 DADOS PARA CONTATO:
• Nome: ${formData.nome}
• Telefone: ${formData.telefone}
• Email: ${formData.email}

Quero fazer uma análise detalhada e receber uma proposta personalizada!`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  const faqs = [
    {
      question: "Como funciona a energia por assinatura?",
      answer: "Você assina um plano mensal e recebe créditos de energia limpa diretamente na sua conta de luz, sem precisar instalar painéis solares. A economia aparece automaticamente na sua fatura."
    },
    {
      question: "Preciso instalar alguma coisa na minha casa?",
      answer: "Não! Esse é o grande diferencial. Você não instala nada. A energia solar é gerada em nossas fazendas solares e os créditos são injetados diretamente na sua conta pela distribuidora."
    },
    {
      question: "Qual é o investimento inicial?",
      answer: "Zero investimento inicial! Você paga apenas uma mensalidade que é sempre menor que sua economia na conta de luz. Ou seja, você economiza desde o primeiro mês."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não há fidelidade. Você pode cancelar a qualquer momento sem multas ou taxas. Mas garantimos que você não vai querer cancelar quando ver a economia."
    },
    {
      question: "Como sei que vou economizar mesmo?",
      answer: "Fazemos uma análise detalhada do seu histórico de consumo e garantimos por contrato que sua economia será sempre maior que o valor da assinatura. Se não for, devolvemos a diferença."
    },
    {
      question: "Funciona em qualquer cidade?",
      answer: "Atendemos em mais de 500 cidades do Brasil. Durante a análise, verificamos se sua cidade está na nossa área de cobertura e qual a melhor fazenda solar para atender você."
    }
  ];

  const regioes = [
    { nome: 'São Paulo', cidades: '180+ cidades', status: 'ativo' },
    { nome: 'Minas Gerais', cidades: '120+ cidades', status: 'ativo' },
    { nome: 'Rio de Janeiro', cidades: '85+ cidades', status: 'ativo' },
    { nome: 'Paraná', cidades: '95+ cidades', status: 'ativo' },
    { nome: 'Goiás', cidades: '70+ cidades', status: 'ativo' },
    { nome: 'Bahia', cidades: '60+ cidades', status: 'expansao' }
  ];

  return (
    <div id="economize" className="pt-16">
      {/* Hero Section Otimizada */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                Zero Investimento • Economia Imediata
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Economize <span className="text-green-600">até 40%</span> na Conta de Luz
                <br />
                <span className="text-2xl lg:text-3xl text-gray-700">Sem Instalar Nada</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Energia solar por assinatura: você recebe créditos de energia limpa 
                direto na sua conta, sem obras, sem instalação, sem complicação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  onClick={() => document.getElementById('calculadora-economia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Minha Economia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={getWhatsAppLink("Quero saber mais sobre energia por assinatura sem instalação!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Imagem alinhada com a proposta: pessoa satisfeita com conta reduzida */}
              <img
                src="/Fazenda_Solar1.webp"
                alt="Fazenda solar gerando energia limpa"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">30%</p>
                    <p className="text-gray-600">economia média/mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Melhorado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona a Energia por Assinatura
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simples, rápido e sem complicação. Veja como você pode economizar sem instalar nada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Análise Gratuita</h3>
              <p className="text-gray-700">
                Analisamos seu histórico de consumo e calculamos sua economia potencial 
                sem nenhum custo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assinatura Personalizada</h3>
              <p className="text-gray-700">
                Criamos um plano sob medida para seu perfil, garantindo economia 
                desde o primeiro mês
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economia Automática</h3>
              <p className="text-gray-700">
                Os créditos de energia limpa aparecem automaticamente na sua conta 
                de luz todo mês
              </p>
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Vantagens da Energia por Assinatura
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Zero Investimento</h4>
                  <p className="text-gray-700 text-sm">Sem custos iniciais ou instalação</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Economia Imediata</h4>
                  <p className="text-gray-700 text-sm">Comece a economizar no primeiro mês</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sem Fidelidade</h4>
                  <p className="text-gray-700 text-sm">Cancele quando quiser, sem multas</p>
                </div>
              </div>
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">100% Limpa</h4>
                  <p className="text-gray-700 text-sm">Energia renovável e sustentável</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: De Onde Vem a Sua Economia */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              De Onde Vem a Sua Economia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossas fazendas solares que geram energia limpa para você
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="/Fazenda-solar-Nortis-Energia.jpeg"
                  alt="Fazenda Solar Nortis Energia gerando energia limpa"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fazendas Solares Estrategicamente Localizadas
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Geração Distribuída</h4>
                    <p className="text-gray-700">
                      Nossas fazendas solares geram energia limpa que é injetada na rede elétrica 
                      e convertida em créditos para sua conta de luz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compartilhamento Inteligente</h4>
                    <p className="text-gray-700">
                      Uma única fazenda solar atende centenas de clientes, reduzindo custos 
                      e maximizando a eficiência energética.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tecnologia de Ponta</h4>
                    <p className="text-gray-700">
                      Equipamentos de última geração com monitoramento 24/7 garantem 
                      máxima produção e confiabilidade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">15+</p>
                    <p className="text-gray-600 text-sm">Fazendas Solares</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">50MW</p>
                    <p className="text-gray-600 text-sm">Capacidade Instalada</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">3.000+</p>
                    <p className="text-gray-600 text-sm">Clientes Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Veja Onde Já Estamos Gerando Economia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Veja Onde Já Estamos Gerando Economia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Presente em mais de 500 cidades brasileiras e em constante expansão
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Simulação de mapa do Brasil */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Nacional</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {regioes.map((regiao, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{regiao.nome}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          regiao.status === 'ativo' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {regiao.status === 'ativo' ? 'Ativo' : 'Expansão'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{regiao.cidades}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sua Cidade Está na Nossa Área de Cobertura?
              </h3>
              <p className="text-gray-700 mb-6">
                Verificamos automaticamente se atendemos sua região durante a análise gratuita. 
                Estamos em constante expansão para levar energia limpa e economia para todo o Brasil.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Regiões com Maior Economia:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span><strong>Sudeste:</strong> Até 40% de economia</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span><strong>Centro-Oeste:</strong> Até 35% de economia</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span><strong>Sul:</strong> Até 35% de economia</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span><strong>Nordeste:</strong> Até 30% de economia</span>
                  </li>
                </ul>
              </div>

              <a
                href="javascript:void(0)"
                onClick={() => document.getElementById('calculadora-economia')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Verificar Minha Região
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora Interativa de 3 Etapas */}
      <section id="calculadora-economia" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <Calculator className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Calculadora de Economia
              </h2>
              <p className="text-gray-700">
                Descubra em segundos quanto você pode economizar
              </p>
            </div>

            {/* Etapa 1: Dados Básicos */}
            {calculadoraEtapa === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Valor médio da sua conta de luz *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">R$</span>
                      <input
                        type="number"
                        required
                        value={calculadoraData.valorConta}
                        onChange={(e) => setCalculadoraData({...calculadoraData, valorConta: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                        placeholder="500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Seu estado *
                    </label>
                    <select
                      required
                      value={calculadoraData.estado}
                      onChange={(e) => setCalculadoraData({...calculadoraData, estado: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    >
                      <option value="">Selecione seu estado</option>
                      {estados.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={calcularEconomia}
                  disabled={!calculadoraData.valorConta || !calculadoraData.estado}
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Calculator className="mr-3 h-6 w-6" />
                  Calcular Minha Economia
                </button>
              </div>
            )}

            {/* Etapa 2: Resultado da Economia */}
            {calculadoraEtapa === 2 && (
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🎉 Sua Economia Calculada!
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-green-600">{resultadoEconomia.economiaPercentual}%</p>
                      <p className="text-gray-600">de economia</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-green-600">R$ {resultadoEconomia.economiaMensal}</p>
                      <p className="text-gray-600">por mês</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-green-600">R$ {resultadoEconomia.economiaAnual}</p>
                      <p className="text-gray-600">por ano</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Comparação:</h4>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600">Conta atual</p>
                        <p className="text-xl font-bold text-red-600">R$ {calculadoraData.valorConta}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-gray-600">Nova conta</p>
                        <p className="text-xl font-bold text-green-600">
                          R$ {parseFloat(calculadoraData.valorConta) - resultadoEconomia.economiaMensal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCalculadoraEtapa(3)}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                  Quero Essa Economia!
                </button>

                <button
                  onClick={() => setCalculadoraEtapa(1)}
                  className="block mx-auto text-gray-600 hover:text-gray-800 text-sm"
                >
                  ← Recalcular
                </button>
              </div>
            )}

            {/* Etapa 3: Dados para Contato */}
            {calculadoraEtapa === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Última Etapa: Seus Dados
                  </h3>
                  <p className="text-gray-700">
                    Para finalizar, precisamos de alguns dados para enviar sua proposta personalizada
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Seu nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Garantia de Economia</h4>
                      <p className="text-gray-700 text-sm">
                        Garantimos por contrato que sua economia mensal será sempre maior que o valor da assinatura. 
                        Se não for, devolvemos a diferença!
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleFinalSubmit}
                  disabled={!formData.nome || !formData.telefone}
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Leaf className="mr-3 h-6 w-6" />
                  Receber Proposta Personalizada
                </button>

                <div className="flex justify-center space-x-4 text-sm">
                  <button
                    onClick={() => setCalculadoraEtapa(2)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    ← Ver resultado
                  </button>
                  <button
                    onClick={() => setCalculadoraEtapa(1)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    ← Recalcular
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Otimizado */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre energia por assinatura
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-green-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-green-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-700 mb-6">
                Fale diretamente com nossos especialistas e esclareça todas suas questões
              </p>
              <a
                href={getWhatsAppLink("Tenho algumas dúvidas sobre energia por assinatura. Podem me ajudar?")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomizeSemInstalar;