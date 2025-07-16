import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  icon: string;
  color: string;
  size: number;
  delay: number;
  duration: number;
  side: 'left' | 'right';
}

// Real crypto icons as SVG strings with their authentic colors
const cryptoIcons = [
  {
    name: 'bitcoin',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#F7931A"/>
        <path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.017.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>
      </g>
    </svg>`,
    color: '#F7931A'
  },
  {
    name: 'ethereum',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#627EEA"/>
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/>
          <path d="M16.498 4L9 16.22l7.498-3.35z"/>
          <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/>
          <path d="M16.498 27.995v-6.028L9 17.616z"/>
          <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/>
          <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/>
        </g>
      </g>
    </svg>`,
    color: '#627EEA'
  },
  {
    name: 'litecoin',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#BFBBBB"/>
        <path fill="#FFF" d="M10.427 19.214L9 18.768l.688-2.759 1.444.424C11.548 14.347 12.474 11.094 13.707 6.5h5.079l-1.683 6.731 1.964.577-.492 1.974-1.953-.571-.338 1.356h8.1L24 19.214H10.427z"/>
      </g>
    </svg>`,
    color: '#BFBBBB'
  },
  {
    name: 'cardano',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#0033AD"/>
        <path fill="#FFF" d="M10.036 19.016c.418.059.85.148 1.288.267.419-.12.855-.208 1.288-.267a6.978 6.978 0 0 1-.644-2.997c0-1.115.26-2.169.72-3.101-.419-.058-.852-.147-1.288-.266-.42.119-.855.208-1.288.266.384.932.644 1.986.644 3.1 0 1.12-.26 2.176-.72 2.998zm6.002 5.973c1.398 0 2.54-1.14 2.54-2.54 0-1.4-1.142-2.54-2.54-2.54-1.399 0-2.54 1.14-2.54 2.54 0 1.4 1.141 2.54 2.54 2.54zm-.004-17.978c.841 0 1.528-.686 1.528-1.527 0-.842-.687-1.528-1.528-1.528-.842 0-1.528.686-1.528 1.528 0 .84.686 1.527 1.528 1.527zm8.95 8.977c.42.058.852.147 1.288.266.42-.119.855-.208 1.288-.266a6.977 6.977 0 0 0-.72-2.998 6.947 6.947 0 0 0-.644-3.101c-.419.059-.85.148-1.288.267-.419-.12-.855-.208-1.288-.267.384.932.644 1.986.644 3.1 0 1.115-.26 2.17-.72 3.102l.44-.103zm-9.89-7.503c.841 0 1.528-.686 1.528-1.527C16.622 6.116 15.936 5.43 15.094 5.43c-.842 0-1.528.686-1.528 1.528 0 .841.686 1.527 1.528 1.527zm1.898 7.503c-.42-.058-.852-.147-1.288-.266-.42.119-.855.208-1.288.266.384.932.644 1.986.644 3.1a6.977 6.977 0 0 1-.72 2.998c.419.059.85.148 1.288.267.419-.12.855-.208 1.288-.267a6.947 6.947 0 0 0-.644-3.1c0-1.114.26-2.168.72-2.998zm-8.95-8.977c.84 0 1.527-.686 1.527-1.527C9.569 6.116 8.883 5.43 8.042 5.43c-.842 0-1.528.686-1.528 1.528 0 .841.686 1.527 1.528 1.527zm15.9 8.977c.842 0 1.528-.686 1.528-1.527 0-.842-.686-1.528-1.528-1.528-.841 0-1.527.686-1.527 1.528 0 .84.686 1.527 1.527 1.527zm0 8.977c.842 0 1.528-.686 1.528-1.527 0-.842-.686-1.528-1.528-1.528-.841 0-1.527.686-1.527 1.528 0 .84.686 1.527 1.527 1.527zm-15.9 0c.84 0 1.527-.686 1.527-1.527 0-.842-.686-1.528-1.527-1.528-.842 0-1.528.686-1.528 1.528 0 .84.686 1.527 1.528 1.527z"/>
      </g>
    </svg>`,
    color: '#0033AD'
  },
  {
    name: 'binance',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#F3BA2F"/>
        <path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.26L16 26l-6.144-6.144 2.26-2.26zm9.764-5.596L24.14 14.26 21.88 16l2.26 2.26L21.88 20.52l-2.26-2.26-2.26 2.26-2.26-2.26L16 17.36l-1.596 1.596L16 20.52l2.26-2.26 2.26 2.26z"/>
      </g>
    </svg>`,
    color: '#F3BA2F'
  },
  {
    name: 'polygon',
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#8247E5"/>
        <path fill="#FFF" d="M21.092 12.693c-.369-.215-.821-.215-1.19 0l-3.377 1.95-2.287 1.315-3.377 1.95c-.369.215-.821.215-1.19 0l-2.698-1.565c-.369-.215-.595-.611-.595-1.04V12.8c0-.429.226-.825.595-1.04l2.698-1.565c.369-.215.821-.215 1.19 0l2.698 1.565c.369.215.595.611.595 1.04v1.95l2.287-1.315V11.76c0-.429-.226-.825-.595-1.04L13.54 9.155c-.369-.215-.821-.215-1.19 0L9.652 10.72c-.369.215-.595.611-.595 1.04v3.13c0 .429.226.825.595 1.04l2.698 1.565c.369.215.821.215 1.19 0l3.377-1.95 2.287-1.315 3.377-1.95c.369-.215.821-.215 1.19 0l2.698 1.565c.369.215.595.611.595 1.04v2.5c0 .429-.226.825-.595 1.04L22.475 22.5c-.369.215-.821.215-1.19 0l-2.698-1.565c-.369-.215-.595-.611-.595-1.04v-1.95l-2.287 1.315v1.95c0 .429.226.825.595 1.04l2.698 1.565c.369.215.821.215 1.19 0l2.698-1.565c.369.215.595.611.595 1.04v-3.13c0-.429-.226-.825-.595-1.04l-2.698-1.565z"/>
      </g>
    </svg>`,
    color: '#8247E5'
  }
];

export const CryptoBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const createBubble = (): Bubble => {
      const side: 'left' | 'right' = Math.random() < 0.5 ? 'left' : 'right';
      const crypto = cryptoIcons[Math.floor(Math.random() * cryptoIcons.length)];
      
      return {
        id: Date.now() + Math.random(),
        x: side === 'left' ? -120 - Math.random() * 100 : 120 + Math.random() * 100, // Position outside text area
        y: 200, // Start from bottom
        icon: crypto.svg,
        color: crypto.color,
        size: 30 + Math.random() * 20, // 30-50px
        delay: 0,
        duration: 8 + Math.random() * 4, // 8-12 seconds
        side
      };
    };

    const spawnBubbles = () => {
      setBubbles(prev => [...prev, createBubble()]);
    };

    // Create initial bubbles
    const initialBubbles = Array.from({ length: 4 }, createBubble);
    setBubbles(initialBubbles);

    // Spawn new bubbles every 3 seconds
    const interval = setInterval(spawnBubbles, 3000);

    // Clean up old bubbles every 15 seconds
    const cleanup = setInterval(() => {
      setBubbles(prev => prev.filter(bubble => Date.now() - bubble.id < 15000));
    }, 15000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute opacity-0 animate-[soapBubbleFloat_8s_ease-out_infinite]"
          style={{
            left: `calc(50% + ${bubble.x}px)`,
            bottom: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: 'translateX(-50%)',
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            zIndex: 5,
          }}
        >
          <div 
            className="w-full h-full rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.1),
                inset 0 2px 8px rgba(255,255,255,0.2),
                0 0 0 1px rgba(255,255,255,0.1)
              `,
            }}
          >
            {/* Soap bubble highlight effect */}
            <div 
              className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/40 blur-sm"
              style={{ width: `${bubble.size * 0.15}px`, height: `${bubble.size * 0.15}px` }}
            />
            <div 
              className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/60"
              style={{ width: `${bubble.size * 0.1}px`, height: `${bubble.size * 0.1}px` }}
            />
            
            {/* Crypto icon */}
            <div 
              className="relative z-10"
              style={{ 
                width: `${bubble.size * 0.6}px`, 
                height: `${bubble.size * 0.6}px`,
              }}
              dangerouslySetInnerHTML={{ __html: bubble.icon }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};