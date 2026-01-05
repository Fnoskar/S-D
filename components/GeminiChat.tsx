import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateEngineeringAdvice } from '../services/geminiService';

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bună! Sunt asistentul virtual S&D Design. Cu ce te pot ajuta legat de proiectul tău de construcții?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const responseText = await generateEngineeringAdvice(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-sd-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 group"
        aria-label="Deschide Asistent Virtual"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold uppercase py-2 px-3 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Întreabă un Inginer AI
           </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] bg-white shadow-2xl border border-gray-200 z-50 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-sd-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot size={20} />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide">Consultant Virtual</h3>
                <p className="text-[10px] text-gray-400">Powered by Gemini AI</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 text-sm rounded-lg shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-sd-black text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-gray-500" />
                  <span className="text-xs text-gray-500">Analizez cererea...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Întreabă despre structură, avize..."
                className="w-full bg-gray-100 p-3 pr-10 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black resize-none h-12 scrollbar-hide"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sd-black hover:text-gray-600 disabled:opacity-30 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2">
              AI-ul poate face greșeli. Consultă un inginer pentru decizii finale.
            </p>
          </div>
        </div>
      )}
    </>
  );
};