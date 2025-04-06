import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Evidence } from '@/types/evidence';
import { formatDate, formatVerificationDate, getVerificationBadge } from '@/lib/evidence-utils';
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

interface FactCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  verification: Evidence['verification'];
  className?: string;
}

const FactCard = ({
  title,
  description,
  date,
  category,
  verification,
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
      <div className="flex items-center justify-between mb-3">
        {category && (
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {category}
          </div>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={cn(
                "inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border",
                getVerificationBadge(verification.status).className
              )}>
                <span>{getVerificationBadge(verification.status).icon}</span>
                {getVerificationBadge(verification.status).label}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Last verified: {formatVerificationDate(verification.lastVerified)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <h3 className="text-xl font-serif font-medium mb-2 leading-tight">{title}</h3>

      <div className="text-sm text-muted-foreground mb-4">
        {formatDate(date)}
      </div>

      <div className={cn(
        "text-base mb-4 overflow-hidden transition-all duration-300",
        !expanded && "line-clamp-3"
      )}>
        {description}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {verification.sources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              {source.type === 'factCheck' && <span title="Fact Check">🔍</span>}
              {source.type === 'archive' && <span title="Archived Source">📚</span>}
              {source.type === 'primary' && <span title="Primary Source">📄</span>}
              {source.title || 'View Source'}
            </a>
          ))}
        </div>

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
