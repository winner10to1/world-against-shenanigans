
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from "@/lib/utils";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ events, className }) => {
  return (
    <div className={cn("relative pl-12", className)}>
      <div className="timeline-line"></div>
      
      {events.map((event, index) => (
        <AnimatedSection 
          key={index} 
          delay={index * 150} 
          className="mb-12 relative"
        >
          <div className="timeline-dot" style={{ top: '6px' }}></div>
          
          <div className="pl-6">
            <span className="text-sm font-medium text-muted-foreground">
              {event.date}
            </span>
            <h3 className="text-xl font-serif font-medium my-1">
              {event.title}
            </h3>
            <p className="text-base text-gray-700">
              {event.description}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
