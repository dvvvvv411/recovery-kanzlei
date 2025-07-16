import React, { useEffect, useState } from 'react';

const CryptoBubbles = () => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    crypto: string;
    size: number;
    opacity: number;
    scale: number;
  }>>([]);

  const cryptoLogos = [
    {
      name: 'Bitcoin',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#F7931A" d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z"/>
          <path fill="#FFF" d="M16.967 10.515c.24-1.59-.97-2.446-2.623-3.017l.536-2.149-1.31-.327-.522 2.092c-.344-.086-.698-.167-1.05-.246l.526-2.108-1.31-.327-.536 2.149c-.285-.065-.565-.129-.836-.196l.001-.007-1.807-.451-.348 1.396s.97.222.95.236c.529.132.625.483.608.761l-.608 2.44c.037.009.084.022.137.043l-.138-.034-.853 3.422c-.065.16-.228.402-.595.31.013.019-.95-.237-.95-.237L8.51 16.33l1.706.426c.317.08.627.163.931.24l-.541 2.174 1.31.327.536-2.15c.355.096.698.185 1.034.269l-.534 2.14 1.31.327.541-2.17c2.236.423 3.919.253 4.627-1.775.571-1.637-.028-2.583-1.21-3.197.861-.198 1.508-.763 1.681-1.928zm-3.007 4.22c-.405 1.634-3.154.751-4.044.529l.722-2.895c.89.222 3.757.663 3.322 2.366zm.406-4.244c-.37 1.487-2.662.732-3.405.547l.654-2.624c.743.185 3.137.53 2.751 2.077z"/>
        </svg>
      )
    },
    {
      name: 'Ethereum',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#627EEA" d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
        </svg>
      )
    },
    {
      name: 'USDT',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#26A17B" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
          <path fill="#FFF" d="M12.83 9.42v-.84h3.13V6.41H7.99v2.17h3.13v.84c-2.67.16-4.55.94-4.55 1.86s1.88 1.7 4.55 1.86v7.36h1.71v-7.36c2.67-.16 4.55-.94 4.55-1.86s-1.88-1.7-4.55-1.86zm0 2.91c-2.35.13-4.09-.41-4.09-.9s1.74-1.03 4.09-.9v1.8zm1.71-1.8c2.35-.13 4.09.41 4.09.9s-1.74 1.03-4.09.9v-1.8z"/>
        </svg>
      )
    },
    {
      name: 'BNB',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#F3BA2F" d="M12 2L9.09 4.91l-2.9-2.9L12 2zm6.91 6.91L16 6l-2.91 2.91L16 11.82l2.91-2.91zM12 7.09L9.09 10 12 12.91 14.91 10 12 7.09zm0 5.82L9.09 15.82l2.91 2.91L14.91 15.82 12 12.91zm0 5.82l2.91-2.91L12 15.82l-2.91 2.91L12 18.73zm-6.91-6.91L2.18 8.91 5.09 6l2.91 2.91L5.09 11.82z"/>
        </svg>
      )
    },
    {
      name: 'Cardano',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#0033AD" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3-4c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-6 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3-4c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: 'Polygon',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#8247E5" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.5 18.5l-5-2.887V9.387L10.5 6.5v12zm7-2.887l-5 2.887v-12l5 2.887v6.226z"/>
        </svg>
      )
    },
    {
      name: 'Solana',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="solanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFA3"/>
              <stop offset="100%" stopColor="#DC1FFF"/>
            </linearGradient>
          </defs>
          <path fill="url(#solanGradient)" d="M3.5 17.5c.3 0 .6-.1.8-.3L8 13.5h12c.6 0 1-.4 1-1s-.4-1-1-1H8l-3.7-3.7c-.4-.4-1.1-.4-1.5 0s-.4 1.1 0 1.5L6.1 12.5l-3.3 3.3c-.4.4-.4 1.1 0 1.5.2.2.5.3.8.3z"/>
          <path fill="url(#solanGradient)" d="M20.5 6.5c-.3 0-.6.1-.8.3L16 10.5H4c-.6 0-1 .4-1 1s.4 1 1 1h12l3.7 3.7c.4.4 1.1.4 1.5 0s.4-1.1 0-1.5L17.9 11.5l3.3-3.3c.4-.4.4-1.1 0-1.5-.2-.2-.5-.3-.8-.3z"/>
        </svg>
      )
    },
    {
      name: 'Ripple',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#23292F" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"/>
          <path fill="#FFF" d="M6.5 16.5c1.5 0 2.8-.6 3.8-1.6L12 13.2l1.7 1.7c1 1 2.3 1.6 3.8 1.6 3 0 5.5-2.5 5.5-5.5S20.5 5.5 17.5 5.5c-1.5 0-2.8.6-3.8 1.6L12 8.8l-1.7-1.7c-1-1-2.3-1.6-3.8-1.6C3.5 5.5 1 8 1 11s2.5 5.5 5.5 5.5z"/>
        </svg>
      )
    }
  ];

  const getRandomPosition = () => {
    const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let x, y;
    
    switch (side) {
      case 0: // top
        x = Math.random() * 100;
        y = -10;
        break;
      case 1: // right
        x = 110;
        y = Math.random() * 100;
        break;
      case 2: // bottom
        x = Math.random() * 100;
        y = 110;
        break;
      case 3: // left
        x = -10;
        y = Math.random() * 100;
        break;
      default:
        x = Math.random() * 100;
        y = Math.random() * 100;
    }
    
    return { x, y };
  };

  const createBubble = () => {
    const { x, y } = getRandomPosition();
    const randomCrypto = cryptoLogos[Math.floor(Math.random() * cryptoLogos.length)];
    
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      crypto: randomCrypto.name,
      svg: randomCrypto.svg,
      size: Math.random() * 30 + 40, // 40-70px
      opacity: 0,
      scale: 0
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newBubble = createBubble();
      setBubbles(prev => [...prev, newBubble]);
      
      // Animate bubble appearance
      setTimeout(() => {
        setBubbles(prev => 
          prev.map(bubble => 
            bubble.id === newBubble.id 
              ? { ...bubble, opacity: Math.random() * 0.4 + 0.6, scale: 1 }
              : bubble
          )
        );
      }, 100);
      
      // Remove bubble after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
      }, 4000);
      
    }, 800 + Math.random() * 1200); // Random interval between 800ms and 2s
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute transition-all duration-1000 ease-out"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transform: `scale(${bubble.scale}) translate(-50%, -50%)`,
            animation: `float 4s ease-in-out infinite, fadeInOut 4s ease-in-out forwards`
          }}
        >
          <div className="w-full h-full bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 shadow-glass flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full opacity-90">
              {cryptoLogos.find(crypto => crypto.name === bubble.crypto)?.svg}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoBubbles;