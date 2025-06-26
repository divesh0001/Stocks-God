import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'bot', text: data.reply }]);
    } catch {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error contacting chatbot.' }]);
    }
  };

  return (
    <div style={{ background: '#222', color: '#fff', padding: 16, borderRadius: 8, maxWidth: 400 }}>
      <div style={{ minHeight: 200, marginBottom: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <b>{msg.sender === 'user' ? 'You' : 'Bot'}:</b> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, marginRight: 8, padding: 4 }}
          placeholder="Type your message..."
        />
        <button type="submit" style={{ padding: '4px 12px' }}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;