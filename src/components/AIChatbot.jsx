import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import './AIChatbot.css';

const MAX_MESSAGE_LENGTH = 2000;

export default function AIChatbot() {
  const proxyUrl = import.meta.env.VITE_AI_PROXY_URL?.trim() || '';
  const isConfigured = proxyUrl.startsWith('/');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: isConfigured
        ? 'سلام! من دستیار پروپوزال Health OS هستم. لطفاً اطلاعات پزشکی یا هویتی وارد نکنید.'
        : 'دستیار هوشمند تا زمان پیکربندی یک پروکسی امن غیرفعال است.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const messageText = input.trim();
    if (!isConfigured || !messageText || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setInput('');
    setIsLoading(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        signal: controller.signal,
        body: JSON.stringify({
          message: messageText,
          context: 'health-platform-proposal'
        })
      });

      if (!response.ok) {
        throw new Error(`AI proxy returned ${response.status}`);
      }

      const data = await response.json();
      const botText = typeof data.message === 'string' ? data.message : data.text;
      if (typeof botText !== 'string' || !botText.trim()) {
        throw new Error('AI proxy returned an invalid response');
      }

      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error(error);
      const errorMessage = error.name === 'AbortError'
        ? 'زمان پاسخ‌گویی دستیار به پایان رسید. لطفاً دوباره تلاش کنید.'
        : 'ارتباط با دستیار برقرار نشد. لطفاً بعداً دوباره تلاش کنید.';
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="chatbot-toggle-btn animate-bounce-slow"
          onClick={() => setIsOpen(true)}
          aria-label="باز کردن دستیار هوشمند"
          title="دستیار هوشمند"
        >
          <MessageSquare size={24} />
          <span className="chatbot-badge" aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <section className="chatbot-window animate-slide-up" aria-label="دستیار هوشمند">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <Bot size={24} className="chatbot-header-icon" />
              <div>
                <h3>دستیار هوشمند</h3>
                <p>{isConfigured ? 'پروکسی امن فعال' : 'در انتظار پیکربندی'}</p>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="بستن دستیار هوشمند"
              title="بستن"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`message-wrapper ${message.role}`}>
                <div className="message-bubble">
                  {message.role === 'model' && <Bot size={16} className="message-icon" />}
                  {message.role === 'user' && <User size={16} className="message-icon" />}
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-wrapper model">
                <div className="message-bubble loading">
                  <Loader2 size={16} className="animate-spin" />
                  <p>در حال پردازش...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <p className="chatbot-privacy-notice" role="note">
            اطلاعات پزشکی، هویتی یا محرمانه وارد نکنید.
          </p>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder={isConfigured ? 'سؤال خود را بپرسید...' : 'دستیار پیکربندی نشده است'}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleSend()}
              disabled={isLoading || !isConfigured}
              maxLength={MAX_MESSAGE_LENGTH}
              aria-label="متن پیام برای دستیار هوشمند"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading || !isConfigured || !input.trim()}
              aria-label="ارسال پیام"
              title="ارسال پیام"
            >
              <Send size={20} />
            </button>
          </div>
        </section>
      )}
    </>
  );
}
