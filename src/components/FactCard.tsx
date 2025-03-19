
import { useState } from 'react';
import { cn } from "@/lib/utils";

interface FactCardProps {
  title: string;
  description: string;
  date: string;
  source: string;
  category?: string;
  className?: string;
}

const FactCard = ({ 
  title, 
  description, 
  date, 
  source,
  category,
  className,
}: FactCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-subtle border border-gray-100 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300",
        "transform hover:translate-y-[-2px]",
        className
      )}
    >
      {category && (
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground mb-3">
          {category}
        </div>
      )}
      
      <h3 className="text-xl font-serif font-medium mb-2 leading-tight">{title}</h3>
      
      <div className="text-sm text-muted-foreground mb-4">
        {date}
      </div>
      
      <div className={cn(
        "text-base mb-4 overflow-hidden transition-all duration-300",
        !expanded && "line-clamp-3"
      )}>
        {description}
      </div>
      
      <div className="flex items-center justify-between">
        <a 
          href={source} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View Source
        </a>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default FactCard;
