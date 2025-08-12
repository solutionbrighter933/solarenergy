import React from 'react';
import { Shield, Eye, Database, Lock, Mail, Phone } from 'lucide-react';

const PoliticaPrivacidade = () => {
  const whatsappNumber = "5535999353971";

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="politica-privacidade" className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-700">
              Transparência total sobre como tratamos seus dados pessoais
            </p>
            <p className="text-gray-600 mt-4">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Introdução */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">1. Introdução</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  A <strong>Soluti Energia</strong> está comprometida em proteger e respeitar sua privacidade. 
                  Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos 
                  suas informações pessoais quando você utiliza nosso site ou serviços.
                </p>
                <p className="text-gray-700">
                  Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
                </p>
              </div>
            </div>

            {/* 2. Informações que Coletamos */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">2. Informações que Coletamos</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Dados de Contato:</strong> Nome, telefone, e-mail, endereço</li>
                <li><strong>Dados de Consumo:</strong> Valor da conta de luz, tipo de imóvel</li>
                <li><strong>Comunicações:</strong> Mensagens enviadas via WhatsApp, formulários ou e-mail</li>
                <li><strong>Dados de Projeto:</strong> Informações sobre sua propriedade para dimensionamento solar</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Dados de Navegação:</strong> Páginas visitadas, tempo de permanência, cliques</li>
                <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de dispositivo, navegador</li>
                <li><strong>Cookies:</strong> Pequenos arquivos para melhorar sua experiência</li>
              </ul>
            </div>

            {/* 3. Como Usamos suas Informações */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">3. Como Usamos suas Informações</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Finalidades Principais</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Realizar simulações de economia solar</li>
                    <li>• Elaborar propostas personalizadas</li>
                    <li>• Prestar suporte e atendimento</li>
                    <li>• Executar projetos contratados</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Finalidades Secundárias</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Melhorar nossos serviços</li>
                    <li>• Enviar conteúdo educativo</li>
                    <li>• Cumprir obrigações legais</li>
                    <li>• Análises estatísticas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Compartilhamento de Dados */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Compartilhamento de Dados</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Importante:</h3>
                <p className="text-red-700">
                  <strong>NÃO vendemos, alugamos ou comercializamos seus dados pessoais</strong> 
                  com terceiros para fins de marketing.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compartilhamos dados apenas quando:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Prestadores de Serviço:</strong> Empresas que nos ajudam a operar (instaladores, fornecedores)</li>
                <li><strong>Obrigação Legal:</strong> Quando exigido por lei ou autoridades competentes</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos legais ou de terceiros</li>
                <li><strong>Seu Consentimento:</strong> Quando você autoriza expressamente</li>
              </ul>
            </div>

            {/* 5. Segurança dos Dados */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Segurança dos Dados</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Criptografia</h3>
                  <p className="text-gray-700 text-sm">Dados protegidos com tecnologia SSL</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Acesso Restrito</h3>
                  <p className="text-gray-700 text-sm">Apenas funcionários autorizados</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Backup Seguro</h3>
                  <p className="text-gray-700 text-sm">Armazenamento em servidores protegidos</p>
                </div>
              </div>
            </div>

            {/* 6. Seus Direitos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Seus Direitos (LGPD)</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Você tem direito a:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>✅ <strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                    <li>✅ <strong>Correção:</strong> Corrigir dados incorretos</li>
                    <li>✅ <strong>Exclusão:</strong> Solicitar remoção dos dados</li>
                    <li>✅ <strong>Portabilidade:</strong> Receber seus dados</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>✅ <strong>Oposição:</strong> Contestar o tratamento</li>
                    <li>✅ <strong>Limitação:</strong> Restringir o uso</li>
                    <li>✅ <strong>Informação:</strong> Saber como usamos</li>
                    <li>✅ <strong>Revogação:</strong> Retirar consentimento</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Política de Cookies</h2>
              
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para melhorar sua experiência em nosso site. 
                Cookies são pequenos arquivos armazenados em seu dispositivo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tipos de Cookies:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                  <p className="text-gray-700 text-sm">Necessários para o funcionamento básico do site</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Cookies de Performance</h4>
                  <p className="text-gray-700 text-sm">Ajudam a entender como você usa o site</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Cookies de Funcionalidade</h4>
                  <p className="text-gray-700 text-sm">Lembram suas preferências e configurações</p>
                </div>
              </div>
            </div>

            {/* 8. Contato */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Entre em Contato</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <a
                        href={getWhatsAppLink("Tenho dúvidas sobre a Política de Privacidade da Soluti Energia.")}
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
                        href="mailto:privacidade@solutienergia.com.br"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        privacidade@solutienergia.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Alterações */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Alterações nesta Política</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-gray-700">
                  Esta Política de Privacidade pode ser atualizada periodicamente. 
                  Notificaremos sobre mudanças significativas através do site ou por e-mail. 
                  Recomendamos revisar esta página regularmente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidade;