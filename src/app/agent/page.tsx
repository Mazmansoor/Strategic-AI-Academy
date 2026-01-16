'use client';

import { useState } from 'react';
import Link from 'next/link';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function AgentPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'intro',
      role: 'assistant',
      content:
        "I'm Zavia AI. Ask me about the curriculum, the diagnostic, or how to apply AI judgment in your work.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Agent response failed');
      }

      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: data.reply || 'I am not sure how to respond yet.',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: 'I hit a snag responding. Please try again.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-lg font-medium text-gray-900 tracking-tight">
            Strategic AI Academy
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Capabilities
            </Link>
            <Link href="/diagnostic" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Diagnostic
            </Link>
            <Link href="/agent" className="text-sm text-gray-900 font-medium">
              Zavia AI
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Zavia AI Agent</h1>
          <p className="text-gray-600">
            A private coaching assistant for navigating AI strategy, judgment, and the Zavia curriculum.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg">
          <div className="h-[420px] overflow-y-auto p-6 space-y-5 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] ${
                  message.role === 'user' ? 'ml-auto text-right' : 'mr-auto'
                }`}
              >
                <div
                  className={`inline-block px-4 py-3 rounded-lg text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-200 text-gray-700'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4 flex gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSend();
                }
              }}
              className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              placeholder="Ask Zavia AI anything..."
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isSending}
              className="bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
