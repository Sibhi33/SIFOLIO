import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [chat, setChat] = useState([{
    type: 'bot',
    message: "Hi! I'm Sibhi's portfolio assistant. Feel free to ask me anything about Sibhi, his work, or just chat! 👋"
  }]);
  const [particles, setParticles] = useState([]);
  const chatRef = useRef(null);

  const handleResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! Great to meet you! How can I help you today?";
    }
    
    if (lowerInput.includes('skills') || lowerInput.includes('tech')) {
      return "Sibhi is proficient in Full Stack Development including React, Node.js, Python, and Cloud technologies. Would you like specific details about any area?";
    }
    
    if (lowerInput.includes('project')) {
      return "Sibhi has worked on various exciting projects! These include e-commerce platforms, real-time applications, and AI integrations. Which area interests you most?";
    }
    
    if (lowerInput.includes('background')) {
      return "Sibhi is a Full Stack Developer with several years of experience in building scalable web applications. He's particularly passionate about cloud architecture and AI integration.";
    }
    
    if (lowerInput.includes('dark')) {
      setIsDarkMode(!isDarkMode);
      return `Theme switched! How's the new look?`;
    }
    
    return `That's an interesting question about ${input}! Let me tell you what I know about that...`;
  };

  const handleTerminalInput = (e) => {
    if (e.key === 'Enter' && terminalInput.trim()) {
      const newChat = [...chat, 
        { type: 'user', message: terminalInput },
        { type: 'bot', message: handleResponse(terminalInput) }
      ];
      setChat(newChat);
      setTerminalInput('');
      
      // Create new interactive particle
      const newParticle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      };
      setParticles(prev => [...prev, newParticle]);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  const removeParticle = (id) => {
    setParticles(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900 border backdrop-blur-xl text-white' : 'text-black'}`}>
      {/* Interactive background particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 bg-blue-500 rounded-full cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          style={{ left: particle.x, top: particle.y }}
          onClick={() => removeParticle(particle.id)}
        />
      ))}
      
      <div className="max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="text-center mb-8">
          <p className="text-blue-500 text-xl">Hola! Welcome to my Portfolio</p>
          <h1 className="text-6xl font-bold mt-4 text-white">S I B H I 👾</h1>
          <p className="mt-4 text-lg text-gray-400">Full Stack Developer | Cloud Engineer | Tech Innovator</p>
        </div>

        <div className={`w-full max-w-2xl p-6 rounded-lg border shadow-lg ${
          isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-gray-50/90 border-gray-200'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          
          <div ref={chatRef} className="max-h-96 overflow-y-auto mb-4">
            {chat.map((msg, idx) => (
              <div key={idx} className={`mb-4 ${msg.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-gray-200 text-black'
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleTerminalInput}
            className="w-full bg-transparent border-none outline-none font-mono"
            placeholder="Ask me anything..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;