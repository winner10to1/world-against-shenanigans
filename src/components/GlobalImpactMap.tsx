import React from 'react';
import { cn } from "@/lib/utils";
import { MapIcon } from 'lucide-react';
import WorldMapPlaceholder from './WorldMapPlaceholder';

interface GlobalImpactMapProps {
  className?: string;
}

const GlobalImpactMap: React.FC<GlobalImpactMapProps> = ({ className }) => {
  return (
    <div
      id="global-impact"
      className={cn(
        "w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 text-center my-12",
        "border border-slate-200 shadow-sm",
        "scroll-mt-24", // Add padding for fixed header
        className
      )}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
          <MapIcon className="h-6 w-6" />
          How Does This Affect My Nation?
        </h2>
        
        <div className="relative aspect-[2/1] bg-slate-100 rounded-lg mb-4 overflow-hidden">
          <WorldMapPlaceholder />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm">
              <p className="text-lg font-medium text-slate-800">
                Global Impact Analysis
              </p>
              <p className="text-sm text-slate-600">
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Explore an interactive map showing how policies and decisions affect different regions worldwide. 
          Hover over any country to see specific impacts on trade, diplomacy, and international relations.
        </p>
      </div>
    </div>
  );
};

export default GlobalImpactMap;