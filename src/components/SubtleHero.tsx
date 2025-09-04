import React from "react";

export const SubtleHero: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="relative h-24 md:h-28 lg:h-32 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </div>
  );
};