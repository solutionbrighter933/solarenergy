import React from 'react';
import { FileText, Scale, AlertTriangle, Shield, Phone, Mail } from 'lucide-react';

const TermosUso = () => {
  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="termos-uso" className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 text-gray-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-700">
              Condições gerais para utilização do site e serviços da Soluti Energia
            </p>
            <p className="text-gray-600 mt-4">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Aceitação dos Termos */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gray-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">1. Aceitação dos Termos</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Ao acessar e utilizar o site da <strong>Soluti Energia</strong> ou contratar nossos serviços, 
                  você concorda em cumprir e estar vinculado a estes Termos de Uso.
                </p>
                <p className="text-gray-700">
                  Se você não concordar com qualquer parte destes termos, 
                  não deve utilizar nosso site ou serviços.
                </p>
              </div>
            </div>

            {/* 2. Sobre a Soluti Energia */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Sobre a Soluti Energia</h2>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  A <strong>Soluti Energia</strong> é uma empresa especializada em soluções de energia solar, 
                  oferecendo:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Projetos personalizados de energia solar</li>
                  <li>Kits solares completos</li>
                  <li>Energia solar por assinatura</li>
                  <li>Consultoria e instalação</li>
                  <li>Manutenção e suporte técnico</li>
                </ul>
              </div>
            </div>

            {/* 3. Uso do Site */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Uso do Site</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Uso Permitido</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Navegar e visualizar o conteúdo do site</li>
                <li>Solicitar simulações e orçamentos</li>
                <li>Entrar em contato conosco</li>
                <li>Contratar nossos serviços</li>
                <li>Compartilhar conteúdo nas redes sociais</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Uso Proibido</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <p className="text-red-800 font-semibold mb-2">É expressamente proibido:</p>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li>Usar o site para fins ilegais ou não autorizados</li>
                  <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                  <li>Tentar hackear ou comprometer a segurança do site</li>
                  <li>Enviar spam ou conteúdo malicioso</li>
                  <li>Fazer engenharia reversa de qualquer parte do site</li>
                </ul>
              </div>
            </div>

            {/* 4. Serviços Oferecidos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Serviços Oferecidos</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Projetos Personalizados</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Análise de consumo</li>
                    <li>• Projeto técnico</li>
                    <li>• Instalação completa</li>
                    <li>• Garantia de 25 anos</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Kits Solares</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 9 opções de potência</li>
                    <li>• Equipamentos WEG</li>
                    <li>• Estruturas inclusas</li>
                    <li>• Instalação opcional</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Energia por Assinatura</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Zero investimento</li>
                    <li>• Sem instalação</li>
                    <li>• Economia imediata</li>
                    <li>• Sem fidelidade</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Simulações e Orçamentos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Simulações e Orçamentos</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante:</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• As simulações são <strong>estimativas</strong> baseadas em dados fornecidos</li>
                  <li>• Valores finais podem variar após análise técnica detalhada</li>
                  <li>• Orçamentos têm validade de <strong>30 dias</strong></li>
                  <li>• Simulações são <strong>gratuitas</strong> e sem compromisso</li>
                </ul>
              </div>
            </div>

            {/* 6. Contratação de Serviços */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contratação de Serviços</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Processo de Contratação</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Simulação gratuita online</li>
                <li>Análise técnica detalhada</li>
                <li>Proposta comercial personalizada</li>
                <li>Assinatura do contrato</li>
                <li>Execução do projeto</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Condições Gerais</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Todos os serviços seguem normas técnicas brasileiras</li>
                <li>Projetos são executados por profissionais certificados</li>
                <li>Equipamentos possuem garantia do fabricante</li>
                <li>Instalação possui garantia de 5 anos</li>
              </ul>
            </div>

            {/* 7. Preços e Pagamento */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Preços e Pagamento</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Formas de Pagamento</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• PIX (desconto especial)</li>
                    <li>• Cartão de crédito</li>
                    <li>• Boleto bancário</li>
                    <li>• Financiamento solar</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Política de Preços</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Preços sujeitos a alteração</li>
                    <li>• Valores fixos após contrato</li>
                    <li>• Descontos à vista disponíveis</li>
                    <li>• Parcelamento sem juros</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. Garantias */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Garantias</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nossas Garantias:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Equipamentos:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Painéis solares: 25 anos</li>
                      <li>• Inversores WEG: 5 anos</li>
                      <li>• Estruturas: 10 anos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Serviços:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Instalação: 5 anos</li>
                      <li>• Projeto: 2 anos</li>
                      <li>• Suporte técnico: Vitalício</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Responsabilidades */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Responsabilidades</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1 Da Soluti Energia</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Executar serviços com qualidade e dentro dos prazos</li>
                <li>Utilizar equipamentos certificados</li>
                <li>Fornecer suporte técnico adequado</li>
                <li>Cumprir garantias oferecidas</li>
                <li>Manter sigilo das informações do cliente</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2 Do Cliente</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer informações corretas e completas</li>
                <li>Permitir acesso à propriedade para instalação</li>
                <li>Efetuar pagamentos nos prazos acordados</li>
                <li>Seguir orientações de uso e manutenção</li>
                <li>Comunicar problemas dentro do prazo de garantia</li>
              </ul>
            </div>

            {/* 10. Limitação de Responsabilidade */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">10. Limitação de Responsabilidade</h2>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-gray-700 mb-4">
                  A Soluti Energia não se responsabiliza por:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Danos causados por uso inadequado dos equipamentos</li>
                  <li>Problemas na rede elétrica da distribuidora</li>
                  <li>Alterações nas regras de compensação elétrica</li>
                  <li>Eventos de força maior (tempestades, raios, etc.)</li>
                  <li>Danos indiretos ou lucros cessantes</li>
                </ul>
              </div>
            </div>

            {/* 11. Propriedade Intelectual */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Propriedade Intelectual</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Todo o conteúdo do site (textos, imagens, logos, vídeos) é propriedade da Soluti Energia 
                  e está protegido por direitos autorais.
                </p>
                <p className="text-gray-700">
                  É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.
                </p>
              </div>
            </div>

            {/* 12. Alterações nos Termos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Alterações nos Termos</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Estes Termos de Uso podem ser atualizados periodicamente. 
                  Alterações significativas serão comunicadas através do site. 
                  O uso continuado após as alterações constitui aceitação dos novos termos.
                </p>
              </div>
            </div>

            {/* 13. Lei Aplicável */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Lei Aplicável e Foro</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Estes Termos de Uso são regidos pelas leis brasileiras, 
                  especialmente pelo Código de Defesa do Consumidor e Marco Civil da Internet.
                </p>
                <p className="text-gray-700">
                  Eventuais disputas serão resolvidas preferencialmente por mediação, 
                  ou no foro da comarca do domicílio do consumidor.
                </p>
              </div>
            </div>

            {/* 14. Contato */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Contato</h2>
              
              <div className="bg-green-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Para dúvidas sobre estes Termos de Uso ou nossos serviços:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <a
                        href={getWhatsAppLink("Tenho dúvidas sobre os Termos de Uso da Soluti Energia.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <a
                        href="mailto:juridico@solutienergia.com.br"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        juridico@solutienergia.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosUso;