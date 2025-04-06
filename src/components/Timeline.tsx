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

const newEvents = [
  {
    date: "April 2025",
    title: "Universal Tariffs Implemented",
    description: "Trump's 10% universal tariff takes effect, causing economic disruptions and retaliatory measures from key trading partners."
  },
  {
    date: "April 2025",
    title: "Nationwide Protests",
    description: "Large-scale 'Hands Off' protests erupt across the U.S., opposing Trump's policies and tariffs."
  },
  {
    date: "April 2025",
    title: "Meeting with Netanyahu",
    description: "Trump meets with Israeli Prime Minister Netanyahu amidst ongoing geopolitical tensions."
  },
  {
    date: "April 2025",
    title: "Global Tensions Rise",
    description: "Experts warn that escalating trade wars and geopolitical conflicts could lead to broader global instability."
  }
];

const Timeline: React.FC<TimelineProps> = ({ events, className }) => {
  const updatedEvents = [...events, ...newEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={cn("relative pl-12", className)}>
      {/* Timeline line */}
      <div className="absolute top-0 left-4 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded"></div>
      
      {updatedEvents.map((event, index) => (
        <AnimatedSection 
          key={index} 
          delay={index * 150} 
          className="mb-12 relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-3 top-[6px] w-7 h-7 bg-white border-4 border-primary rounded-full z-10"></div>
          
          <div className="pl-6">
            <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
              {event.date}
            </span>
            <h3 className="text-xl font-serif font-medium my-2">
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
