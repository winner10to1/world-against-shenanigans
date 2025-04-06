import React from 'react';
import { cn } from "@/lib/utils";

interface LogoTextProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LogoText: React.FC<LogoTextProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="font-semibold text-primary">World</span>
      <span className="mx-2">Against</span>
      <div className={cn(
        "inline-flex items-center justify-center",
        "bg-white rounded-full",
        "border-[10px] border-red-600",
        "px-4 py-23",
        "shadow-sm"
      )}>
        <span className={cn(
          "font-serif font-black text-black",
          sizes[size]
        )}>
          Trump
        </span>
      </div>
    </div>
  );
};

export default LogoText;