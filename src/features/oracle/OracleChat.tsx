import { useRef, useEffect, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useOracle } from '@/hooks/useOracle';
import { QUICK_QUESTIONS } from '@/features/oracle/oracleData';
import { OracleContactForm } from '@/components/custom/OracleContactForm';

export function OracleChat() {
  const { 
    messages, 
    input, 
    setInput, 
    handleSend, 
    handleKeyDown,
    showContactForm,
    setShowContactForm,
    handleAddMessageAndContact,
  } = useOracle();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Add thinking animation
    if (messages.length > 0) {
      setIsThinking(true);
      const timer = setTimeout(() => setIsThinking(false), 800);
      return () => clearTimeout(timer);
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <span key={j} className="hl">{part.slice(2, -2)}</span>;
        }
        return <span key={j}>{part}</span>;
      });
      return (
        <span key={i}>
          {parts}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-avatar">
          <div className="chat-avatar-pulse"></div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: '#e4e1e9', letterSpacing: '0.05em' }}>
            DANISH_ORACLE_V2.0
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#00FF41', letterSpacing: '0.1em', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>[ONLINE // READY_TO_RESPOND]</span>
            {isThinking && <Sparkles size={12} style={{ animation: 'pulse 1s ease-in-out infinite' }} />}
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.sender === 'user' ? 'user-msg' : ''}`}>
            {msg.sender === 'oracle' && <span className="sender oracle">[ORACLE]:</span>}
            {msg.sender === 'oracle' ? (
              <span className="msg-text">{renderText(msg.text)}</span>
            ) : (
              <div className="msg-bubble">{msg.text}</div>
            )}
            {msg.sender === 'user' && <span className="sender user">:[USER]</span>}
          </div>
        ))}
        {isThinking && (
          <div className="chat-msg">
            <span className="sender oracle">[ORACLE]:</span>
            <span className="msg-text" style={{ display: 'flex', gap: '0.3rem' }}>
              <span className="thinking-dot"></span>
              <span className="thinking-dot" style={{ animationDelay: '0.1s' }}></span>
              <span className="thinking-dot" style={{ animationDelay: '0.2s' }}></span>
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {showContactForm && (
        <div style={{ padding: '1rem' }}>
          <OracleContactForm 
            onClose={() => setShowContactForm(false)}
            onSuccess={handleAddMessageAndContact}
          />
        </div>
      )}

      {!showContactForm && (
        <>
          <div className="quick-questions">
            {QUICK_QUESTIONS.map((qq) => (
              <button key={qq.key} className="quick-q-btn" onClick={() => handleSend(qq.key)} title={qq.label}>
                {qq.label}
              </button>
            ))}
          </div>

          <div className="chat-input-area">
            <span className="chat-input-prompt">&gt;</span>
            <input
              className="chat-input"
              type="text"
              placeholder="ENTER_COMMAND_OR_QUERY..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoCapitalize="off"
              spellCheck="false"
            />
            <button className="chat-send-btn" onClick={() => handleSend()} title="Send message">
              <Send size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
