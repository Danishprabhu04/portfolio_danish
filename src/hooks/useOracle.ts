import { useState, useCallback } from 'react';
import { ChatMessage } from '@/types/chat';
import { ORACLE_QA, QUICK_QUESTIONS } from '@/features/oracle/oracleData';
import { matchIntent } from '@/features/oracle/intentMatcher';

const INITIAL_MESSAGE: ChatMessage = {
  sender: 'oracle',
  text: `Welcome, Guest. I hold records on Danish Prabhu K V's **experience**, **availability**, and **tech_stack**. What is your directive?`,
};

export function useOracle() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSend = useCallback((query?: string) => {
    const q = query || input.trim();
    if (!q) return;

    const intent = query ? q : matchIntent(q);
    const answer = ORACLE_QA[intent] || ORACLE_QA[matchIntent(q)];

    const userMsg: ChatMessage = { sender: 'user', text: q };
    const oracleMsg: ChatMessage = {
      sender: 'oracle',
      text: answer
        ? `Scanning data clusters...\n\n${answer}`
        : `No matching records found for "${q}". Try asking about my **experience**, **skills**, **projects**, **education**, **certifications**, **availability**, or **contact** info.`,
    };

    if (query) {
      const label = QUICK_QUESTIONS.find(qq => qq.key === query)?.label || query;
      setMessages(prev => [...prev, { sender: 'user', text: label }, oracleMsg]);
    } else {
      setMessages(prev => [...prev, userMsg, oracleMsg]);
    }
    setInput('');

    // Show contact form if intent is send_message
    if (intent === 'send_message' || matchIntent(q) === 'send_message') {
      setTimeout(() => setShowContactForm(true), 500);
    }
  }, [input]);

  const handleAddMessageAndContact = (message: string) => {
    setMessages(prev => [...prev, { sender: 'oracle', text: message }]);
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return {
    messages,
    input,
    setInput,
    handleSend,
    handleKeyDown,
    showContactForm,
    setShowContactForm,
    handleAddMessageAndContact,
  };
}
