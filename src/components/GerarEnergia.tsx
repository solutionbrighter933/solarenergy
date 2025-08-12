import React, { useState } from 'react';
import { Calculator, CheckCircle, ArrowRight, Sun, Home, Building, Tractor, Zap, Clock, Shield, DollarSign, CreditCard, Users, Award, MapPin, Phone } from 'lucide-react';

const GerarEnergia = () => {
  const [simulatorStep, setSimulatorStep] = useState(1);
  const [simulatorData, setSimulatorData] = useState({
    valorConta: '',
    cep: ''
  });
  const [leadData, setLeadData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });
  const [resultados, setResultados] = useState({
    economiaAnual: 0,
    tamanhoSistema: 0,
    payback: 0,
    economiaMensal: 0
  });

  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const calcularEconomia = () => {
    const valor = parseFloat(simulatorData.valorConta);
    if (valor && simulatorData.cep) {
      // Cálculos baseados em dados reais do mercado solar
      const economiaMensal = valor * 0.85; // 85% de economia média
      const economiaAnual = Math.round(economiaMensal * 12);
      const tamanhoSistema = Math.round((valor * 12) / 1200); // Aproximação kWp
      const payback = Math.round((tamanhoSistema * 4500) / (economiaMensal * 12) * 10) / 10; // Anos

      setResultados({
        economiaAnual,
        tamanhoSistema,
        payback,
        economiaMensal: Math.round(economiaMensal)
      });

      setSimulatorStep(2);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🌞 SIMULAÇÃO DE ENERGIA SOLAR - LEAD QUALIFICADO

📊 RESULTADOS DA SIMULAÇÃO:
• Valor da conta atual: R$ ${simulatorData.valorConta}
• CEP: ${simulatorData.cep}
• Economia anual: R$ ${resultados.economiaAnual.toLocaleString()}
• Sistema recomendado: ${resultados.tamanhoSistema} kWp
• Payback: ${resultados.payback} anos

👤 DADOS DO CLIENTE:
• Nome: ${leadData.nome}
• WhatsApp: ${leadData.telefone}
• E-mail: ${leadData.email}

🎯 PRÓXIMO PASSO: Agendar visita técnica gratuita para proposta oficial!`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  const projetos = [
    {
      imagem: 'Fazenda-Luciano.JPG',
      cidade: 'Silvianópolis',
      economia: '95',
      sistema: '66'
    },
    {
      imagem: 'Laticinio-Dois-Jota.JPG',
      cidade: 'Silvianópolis',
      economia: '93',
      sistema: '53.9'
    },
    {
      imagem: 'Casa-Fatima.JPG',
      cidade: 'Pouso Alegre',
      economia: '88',
      sistema: '8.8'
    }
  ];

  return (
    <div id="gere-energia" className="pt-16">
      {/* Hero Section Otimizada */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Descubra Quanto Você Pode <span className="text-yellow-600">Economizar</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-700">com Energia Solar</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Simulação gratuita em 30 segundos. Mais de 5.000 clientes já economizam milhares por mês.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Resultado instantâneo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador Interativo em 2 Etapas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-2xl">
            {simulatorStep === 1 && (
              <div>
                <div className="text-center mb-8">
                  <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Simulador Solar Inteligente
                  </h2>
                  <p className="text-gray-700">
                    Informe apenas 2 dados e descubra sua economia
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Valor médio da sua conta de luz (R$) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-gray-500 text-lg">R$</span>
                      <input
                        type="number"
                        required
                        value={simulatorData.valorConta}
                        onChange={(e) => setSimulatorData({...simulatorData, valorConta: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                        placeholder="500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      CEP da instalação *
                    </label>
                    <input
                      type="text"
                      required
                      value={simulatorData.cep}
                      onChange={(e) => setSimulatorData({...simulatorData, cep: e.target.value})}
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      placeholder="00000-000"
                      maxLength={9}
                    />
                  </div>

                  <button
                    onClick={calcularEconomia}
                    disabled={!simulatorData.valorConta || !simulatorData.cep}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-8 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transform hover:scale-105"
                  >
                    <Calculator className="mr-3 h-7 w-7" />
                    Calcular Minha Economia Agora
                    <ArrowRight className="ml-3 h-7 w-7" />
                  </button>
                </div>
              </div>
            )}

            {simulatorStep === 2 && (
              <div>
                <div className="text-center mb-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🎉 Seus Resultados Estão Prontos!
                  </h2>
                  <p className="text-gray-700">
                    Veja quanto você pode economizar com energia solar
                  </p>
                </div>

                {/* Resultados Visuais */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
                    <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-green-600">R$ {resultados.economiaAnual.toLocaleString()}</p>
                    <p className="text-gray-600 font-semibold">Economia Anual</p>
                    <p className="text-sm text-gray-500">R$ {resultados.economiaMensal}/mês</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-blue-500">
                    <Sun className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-blue-600">{resultados.tamanhoSistema} kWp</p>
                    <p className="text-gray-600 font-semibold">Tamanho do Sistema</p>
                    <p className="text-sm text-gray-500">Potência recomendada</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-500">
                    <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-purple-600">{resultados.payback} anos</p>
                    <p className="text-gray-600 font-semibold">Tempo de Payback</p>
                    <p className="text-sm text-gray-500">Retorno do investimento</p>
                  </div>
                </div>

                {/* Formulário de Captura */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                    Gostou do resultado? Receba sua Proposta Oficial Gratuita
                  </h3>
                  
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={leadData.nome}
                          onChange={(e) => setLeadData({...leadData, nome: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={leadData.telefone}
                          onChange={(e) => setLeadData({...leadData, telefone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadData.email}
                        onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-105"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Quero Minha Proposta Personalizada
                    </button>
                  </form>

                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setSimulatorStep(1)}
                      className="text-gray-600 hover:text-gray-800 text-sm underline"
                    >
                      ← Fazer nova simulação
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nossos Projetos na Prática */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Projetos na Prática
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 150 projetos instalados com resultados comprovados. 
              Veja alguns dos nossos cases de sucesso.
            </p>
          </div>

          {/* Grid Responsivo de Projetos */}
          <div className="grid md:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={projeto.imagem}
                    alt={`Projeto em ${projeto.cidade}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {projeto.economia}% economia
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700 font-semibold">{projeto.cidade} - MG</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Sistema:</span>
                      <p className="font-bold text-blue-600">{projeto.sistema} kWp</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Economia:</span>
                      <p className="font-bold text-green-600">{projeto.economia}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#cases"
              onClick={() => {
                window.location.hash = 'cases';
                window.scrollTo(0, 0);
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Ver Todos os 150+ Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Seu Projeto em 4 Passos Simples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seu Projeto em 4 Passos Simples
            </h2>
            <p className="text-xl text-gray-600">
              Do primeiro contato até você economizando na conta de luz
            </p>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative">
            {/* Linha conectora */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Passo 1 */}
              <div className="text-center relative">
               <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 shadow-lg">
                 1
               </div>
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Análise Gratuita e Proposta</h3>
                <p className="text-gray-700">
                  Simulação personalizada e proposta técnica-comercial sem custo. 
                  Tudo online em até 24h.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="text-center relative">
               <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 shadow-lg">
                 2
               </div>
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <Home className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visita Técnica e Projeto</h3>
                <p className="text-gray-700">
                  Engenheiro visita sua propriedade para medições precisas. 
                  Projeto executivo detalhado.
                </p>
              </div>

              {/* Passo 3 */}
              <div className="text-center relative">
               <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 shadow-lg">
                 3
               </div>
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <Zap className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalação Profissional</h3>
                <p className="text-gray-700">
                  Equipe certificada instala seu sistema em 1-2 dias. 
                  Homologação na distribuidora incluída.
                </p>
              </div>

              {/* Passo 4 */}
              <div className="text-center relative">
               <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 shadow-lg">
                 4
               </div>
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <DollarSign className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Economia Ativada</h3>
                <p className="text-gray-700">
                  Sistema conectado e gerando economia imediata. 
                  Monitoramento 24/7 pelo app.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="javascript:void(0)"
              onClick={() => document.querySelector('#gere-energia .bg-gradient-to-br')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center"
            >
              Começar Meu Projeto Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Financiamento Sem Complicação */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Financiamento em até 120x
            </h2>
            <p className="text-2xl text-green-600 font-semibold mb-2">
              Parcelas que cabem no seu bolso
            </p>
            <p className="text-xl text-gray-600">
              Sua economia mensal pode pagar as parcelas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <CreditCard className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Entrada Facilitada</h3>
                    <p className="text-gray-700">
                      A partir de 20% de entrada ou use seu FGTS para quitar à vista. 
                      Condições especiais para cada perfil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aprovação Rápida</h3>
                    <p className="text-gray-700">
                      Análise de crédito em até 48h. Documentação simplificada 
                      e processo 100% digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Garantia de Economia</h3>
                    <p className="text-gray-700">
                      Sistema dimensionado para que sua economia seja sempre 
                      maior que a parcela do financiamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Exemplo de Financiamento
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Valor do Sistema:</span>
                  <span className="font-bold text-gray-900">R$ 45.000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Entrada (20%):</span>
                  <span className="font-bold text-green-600">R$ 9.000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">120x de:</span>
                  <span className="font-bold text-blue-600">R$ 420</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                  <span className="text-gray-700">Sua economia mensal:</span>
                  <span className="font-bold text-yellow-600">R$ 650</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg text-center">
                <p className="text-lg font-bold text-gray-900">
                  Sobra líquida: <span className="text-green-600">R$ 230/mês</span>
                </p>
                <p className="text-sm text-gray-600">Você economiza desde o primeiro mês!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={getWhatsAppLink("Quero saber mais sobre as condições de financiamento para energia solar!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <CreditCard className="mr-3 h-6 w-6" />
              Simular Meu Financiamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final Urgência Sutil */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Mais de 200 Pessoas Já Simularam Hoje
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Não perca tempo! Quanto mais você espera, mais dinheiro perde na conta de luz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="javascript:void(0)"
              onClick={() => document.querySelector('#gere-energia .bg-gradient-to-br')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Calculator className="mr-3 h-6 w-6" />
              Fazer Minha Simulação Agora
            </a>
            <a
              href={getWhatsAppLink("Quero falar com um especialista sobre energia solar agora!")}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GerarEnergia;