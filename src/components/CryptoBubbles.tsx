import React, { useEffect, useState } from 'react';
import { Bitcoin, Coins, Zap, Landmark, TrendingUp, Shield, LucideIcon } from 'lucide-react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  icon: LucideIcon;
  size: number;
  delay: number;
  duration: number;
}

export const CryptoBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const cryptoIcons = [Bitcoin, Coins, Zap, Landmark, TrendingUp, Shield];

  useEffect(() => {
    // Create bubbles positioned around the text area
    const newBubbles: Bubble[] = [];
    
    // Define positions around where "Krypto-Recovery" text appears
    // These positions are relative to the text container
    const positions = [
      { x: -80, y: -40 },  // Top left
      { x: 50, y: -60 },   // Top right
      { x: -100, y: 20 },  // Middle left
      { x: 80, y: 30 },    // Middle right
      { x: -60, y: 80 },   // Bottom left
      { x: 40, y: 90 },    // Bottom right
    ];

    positions.forEach((pos, index) => {
      newBubbles.push({
        id: index,
        x: pos.x,
        y: pos.y,
        icon: cryptoIcons[index % cryptoIcons.length],
        size: Math.random() * 8 + 16, // 16-24px
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2, // 3-5s
      });
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((bubble) => {
        const Icon = bubble.icon;
        return (
          <div
            key={bubble.id}
            className="absolute animate-pulse"
            style={{
              left: `calc(50% + ${bubble.x}px)`,
              top: `calc(50% + ${bubble.y}px)`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-gradient-glass backdrop-blur-md border border-white/30 flex items-center justify-center shadow-glass animate-[cryptoFloat_3s_ease-in-out_infinite]"
              style={{
                boxShadow: '0 0 20px hsl(214 100% 60% / 0.4), var(--shadow-glass)',
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            >
            <Icon 
              className="text-white"
              size={bubble.size * 0.5}
              style={{
                filter: 'drop-shadow(0 0 8px hsl(214 100% 60% / 0.8))',
              }}
            />
            </div>
          </div>
        );
      })}
      
    </div>
  );
};