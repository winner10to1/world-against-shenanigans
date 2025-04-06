import React from 'react';
import { cn } from "@/lib/utils";
import { Skull, Globe2, Bomb } from 'lucide-react';

interface SymbolRowProps {
  className?: string;
  visible?: boolean;
}

const SymbolRow: React.FC<SymbolRowProps> = ({ className, visible = true }) => {
  if (!visible) return null;

  return (
    <div className={cn(
      "flex items-center justify-center gap-12 py-8",
      "animate-fade-in",
      className
    )}>
      {/* NZ symbol */}
      <div className="w-26 h-16 flex items-center justify-center">
        <img
          src="/nz.png"
          alt="Nazi Symbol"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Skull symbol */}
      <div className="animate-pulse">
        <Skull className="w-16 h-16 text-gray-900" />
      </div>

      {/* Earth symbol */}
      <div className="animate-spin-slow">
        <Globe2 className="w-16 h-16 text-blue-600" />
      </div>

      {/* Explosion symbol */}
      <div className="animate-pulse">
        <Bomb className="w-16 h-16 text-red-600" />
      </div>
    </div>
  );
};

export default SymbolRow;

// Add to tailwind.config.ts:
// animation: {
//   'spin-slow': 'spin 10s linear infinite',
//   'fade-in': 'fadeIn 0.5s ease-in-out',
// },
// keyframes: {
//   fadeIn: {
//     '0%': { opacity: '0' },
//     '100%': { opacity: '1' },
//   },
// },