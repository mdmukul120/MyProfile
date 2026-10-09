import React from 'react';

// Luxury Gold Crest Monogram SVG
export const GoldCrest: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="goldGradientCrest" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="35%" stopColor="#E6C875" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#996F19" />
      </linearGradient>
      <linearGradient id="goldDarkCrest" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A2413" />
        <stop offset="100%" stopColor="#151208" />
      </linearGradient>
    </defs>
    {/* Outer Luxury Octagon / Shield */}
    <polygon
      points="24,2 38,8 46,20 46,32 36,44 12,44 2,32 2,20 10,8"
      fill="url(#goldDarkCrest)"
      stroke="url(#goldGradientCrest)"
      strokeWidth="1.5"
    />
    {/* Inner Concentric Contour */}
    <polygon
      points="24,7 34,12 40,21 40,30 32,39 16,39 8,30 8,21 14,12"
      fill="none"
      stroke="url(#goldGradientCrest)"
      strokeWidth="0.75"
      strokeDasharray="2 2"
      opacity="0.8"
    />
    {/* Stylized Monogram "M" / Crown */}
    <path
      d="M17 31V19L24 25L31 19V31"
      stroke="url(#goldGradientCrest)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="14" r="2" fill="url(#goldGradientCrest)" />
  </svg>
);

// Verified Executive Seal with radiating rays
export const GoldVerifiedBadge: React.FC<{ className?: string; size?: number; tooltip?: string }> = ({
  className = '',
  size = 24,
  tooltip = 'Verified Executive Architect'
}) => (
  <span className="inline-flex items-center" title={tooltip}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="40%" stopColor="#E6C875" />
          <stop offset="80%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6211" />
        </linearGradient>
      </defs>
      {/* 12-point scalloped starburst seal */}
      <path
        d="M12 1L14.7 3.4L18.2 3.1L19.8 6.4L23.1 7.9L22.8 11.5L24 14.8L21.6 17.5L21.3 21.1L17.8 21.5L15.3 23.9L12 22.7L8.7 23.9L6.2 21.5L2.7 21.1L2.4 17.5L0 14.8L1.2 11.5L0.9 7.9L4.2 6.4L5.8 3.1L9.3 3.4L12 1Z"
        fill="url(#goldBadgeGrad)"
      />
      {/* Dark inner circle for high contrast checkmark */}
      <circle cx="12" cy="12.5" r="7.5" fill="#0E0F14" />
      {/* Sharp Checkmark */}
      <path
        d="M8.5 12.5L10.8 14.8L15.5 10.1"
        stroke="url(#goldBadgeGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// 5-Star Golden SVG Rating
export const GoldStarRating: React.FC<{ rating?: number; size?: number }> = ({ rating = 5, size = 16 }) => {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < rating ? '#D4AF37' : '#2A2C35'}
          stroke="#AA8022"
          strokeWidth="0.5"
          className="transition-transform hover:scale-110"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
};

// Interactive Golden Radar Competency Chart SVG
export const GoldRadarSkillChart: React.FC<{
  skills: { name: string; nameBn: string; level: number }[];
  isBengali?: boolean;
}> = ({ skills, isBengali = false }) => {
  const size = 320;
  const center = size / 2;
  const radius = 100;
  const angleStep = (Math.PI * 2) / skills.length;

  // Grid levels (20%, 40%, 60%, 80%, 100%)
  const levels = [0.25, 0.5, 0.75, 1];

  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = radius * (value / 100);
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points for actual skill levels
  const dataPoints = skills.map((skill, i) => getCoordinates(skill.level, i));
  const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#AA8022" stopOpacity="0.08" />
          </radialGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6211" />
          </linearGradient>
        </defs>

        {/* Concentric Polygons */}
        {levels.map((lvl, idx) => {
          const ringPoints = skills
            .map((_, i) => {
              const p = getCoordinates(lvl * 100, i);
              return `${p.x},${p.y}`;
            })
            .join(' ');
          return (
            <polygon
              key={idx}
              points={ringPoints}
              fill="none"
              stroke="#D4AF37"
              strokeWidth={idx === levels.length - 1 ? '1' : '0.5'}
              strokeOpacity={0.12 + idx * 0.08}
              strokeDasharray={idx === levels.length - 1 ? undefined : '2 3'}
            />
          );
        })}

        {/* Axis Lines */}
        {skills.map((_, i) => {
          const endP = getCoordinates(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endP.x}
              y2={endP.y}
              stroke="#D4AF37"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Area Polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radarFill)"
          stroke="url(#radarStroke)"
          strokeWidth="2"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Points / Vertices */}
        {dataPoints.map((p, i) => (
          <g key={i} className="group cursor-pointer">
            <circle
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#FFF8E7"
              stroke="#AA8022"
              strokeWidth="2"
              className="transition-transform group-hover:scale-150"
            />
            {/* Pulsing halo */}
            <circle
              cx={p.x}
              cy={p.y}
              r="8"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          </g>
        ))}

        {/* Labels at outer perimeter */}
        {skills.map((skill, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 32;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);
          const isLeft = Math.cos(angle) < -0.2;
          const isRight = Math.cos(angle) > 0.2;
          const textAnchor = isRight ? 'start' : isLeft ? 'end' : 'middle';

          return (
            <g key={i}>
              <text
                x={lx}
                y={ly}
                textAnchor={textAnchor}
                className="text-[11px] font-medium fill-[#E2D2B0] transition-colors"
                dominantBaseline="central"
              >
                {isBengali ? skill.nameBn : skill.name}
              </text>
              <text
                x={lx}
                y={ly + 12}
                textAnchor={textAnchor}
                className="text-[10px] font-mono tabular-nums fill-[#D4AF37] opacity-80"
                dominantBaseline="central"
              >
                {skill.level}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Luxury Circular Progress Meter SVG
export const GoldCircularMetric: React.FC<{
  value: number;
  label: string;
  size?: number;
  suffix?: string;
}> = ({ value, label, size = 96, suffix = '%' }) => {
  const strokeWidth = 5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(212, 175, 55, 0.12)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#circleGoldGrad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="circleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8C6211" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center font-mono font-semibold tabular-nums text-white">
          <span className="text-sm gold-gradient-text">
            {value}{suffix}
          </span>
        </div>
      </div>
      <span className="mt-2 text-xs text-[#C5B79D] font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
};

// Luxury SVG Crest Ribbon Divider
export const GoldRibbonDivider: React.FC<{ title?: string; className?: string }> = ({
  title,
  className = ''
}) => (
  <div className={`relative flex items-center justify-center my-8 ${className}`}>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
    {title && (
      <span className="absolute px-4 bg-[#090A0E] text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold border border-[#D4AF37]/25 rounded-sm">
        {title}
      </span>
    )}
  </div>
);
