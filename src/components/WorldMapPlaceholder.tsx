import React from 'react';

const WorldMapPlaceholder: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-full"
      style={{ background: '#f8f9fa' }}
    >
      {/* World map simplified outlines - countries shown as basic shapes */}
      <g className="countries">
        {/* North America */}
        <path
          d="M200 50 L350 50 L400 150 L350 250 L200 300 L150 250 L175 150 Z"
          className="us-shape"
          fill="#dc2626"
          stroke="#444"
          strokeWidth="1"
        />
        
        {/* Canada */}
        <path
          d="M200 25 L400 25 L350 50 L200 50 L175 150 L200 25"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Mexico and Central America */}
        <path
          d="M200 300 L350 250 L300 350 L200 350 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* South America */}
        <path
          d="M250 350 L350 350 L400 500 L200 500 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Greenland */}
        <path
          d="M400 25 L500 25 L475 75 L425 75 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Europe */}
        <path
          d="M450 75 L550 75 L600 150 L500 200 L450 150 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Africa */}
        <path
          d="M450 200 L600 200 L650 400 L500 450 L450 350 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Asia */}
        <path
          d="M600 50 L900 50 L900 300 L600 300 L550 200 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />

        {/* Australia */}
        <path
          d="M750 350 L900 350 L900 450 L800 450 Z"
          fill="#e5e7eb"
          stroke="#444"
          strokeWidth="1"
        />
      </g>

      {/* Pulsing effect covering US, Canada, and Greenland */}
      <circle
        cx="350"
        cy="100"
        r="200"
        fill="none"
        stroke="#dc2626"
        strokeWidth="3"
        opacity="0.3"
        className="animate-ping"
      />

      {/* Legend */}
      <g transform="translate(50, 450)">
        <rect x="0" y="0" width="20" height="20" fill="#dc2626" />
        <text x="30" y="15" fill="#374151" fontSize="14" className="font-medium">Global Bully</text>
      </g>

      {/* Label on US */}
      <text x="275" y="150" fill="#fff" fontSize="16" textAnchor="middle" className="font-bold">
        Bully
      </text>
    </svg>
  );
};

export default WorldMapPlaceholder;