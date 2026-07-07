import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import './AIChatbot.css';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'سلام! من دستیار هوشمند پلتفرم سلامت (Health OS) هستم. چطور می‌توانم درباره این پروپوزال راهنمایی‌تان کنم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // In a real scenario, we would send the full conversation history. 
      // For this demo, we send the last user message + context.
      const prompt = `You are the AI assistant for a modern Health OS (Digital Twin & Multi-Agent) platform proposal. 
      Answer in Persian. Be concise, professional, and friendly. 
      User asks: ${input}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        const botText = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'model', text: botText }]);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'متأسفانه در برقراری ارتباط با سرور هوش مصنوعی خطایی رخ داد. لطفاً مجدداً تلاش کنید.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button className="chatbot-toggle-btn animate-bounce-slow" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
          <span className="chatbot-badge"></span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window animate-slide-up">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <Bot size={24} className="chatbot-header-icon" />
              <div>
                <h3>دستیار هوشمند</h3>
                <p>Health OS AI</p>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-wrapper ${msg.role}`}>
                <div className="message-bubble">
                  {msg.role === 'model' && <Bot size={16} className="message-icon" />}
                  {msg.role === 'user' && <User size={16} className="message-icon" />}
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-wrapper model">
                <div className="message-bubble loading">
                  <Loader2 size={16} className="animate-spin" />
                  <p>در حال فکر کردن...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input 
              type="text" 
              placeholder="سوال خود را بپرسید..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
