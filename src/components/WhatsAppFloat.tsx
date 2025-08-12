import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  message?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ 
  message = "Olá! Gostaria de saber mais sobre energia solar da Soluti Energia." 
}) => {
  const whatsappNumber = "5535999353971";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;