import React from "react";

export default function FooterMockup() {
  return (
    <svg
      className="h-32 w-auto sm:h-36 md:h-40 lg:h-44 xl:h-48"
      viewBox="0 0 460 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="shadowG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#881337" stopOpacity="0.45" />
          <stop offset="65%" stopColor="#881337" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#881337" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff85af" /><stop offset="100%" stopColor="#f43f75" />
        </linearGradient>
        <linearGradient id="bRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f43f75" /><stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <linearGradient id="rDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e11d48" /><stop offset="100%" stopColor="#9f1239" />
        </linearGradient>
        <linearGradient id="deckG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" /><stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Shadows */}
      <ellipse cx="265" cy="222" rx="110" ry="14" fill="url(#shadowG)" />
      <ellipse cx="110" cy="225" rx="65" ry="16" fill="url(#shadowG)" />

      {/* Laptop */}
      <rect x="156" y="58" width="206" height="136" rx="9" fill="#0f172a" />
      <rect x="162" y="64" width="194" height="124" rx="4" fill="#ffffff" />
      
      {/* GiftPilot Header */}
      <rect x="168" y="70" width="8" height="8" rx="2" fill="#e11d48" />
      <text x="179" y="74.5" fontSize="4.5" fill="#94a3b8" fontFamily="sans-serif">Welcome back,</text>
      <text x="179" y="80.5" fontSize="6.2" fontWeight="700" fill="#0f172a" fontFamily="sans-serif">GiftPilot Pty Ltd</text>

      <g transform="translate(308, 69)">
        <rect x="0" y="3" width="9" height="8" rx="1.5" fill="#e11d48" />
        <path d="M4.5 3v8M0 7h9" stroke="#fff" strokeWidth="1" />
        <text x="12" y="9.5" fontSize="8" fontWeight="800" fill="#0f172a" fontFamily="sans-serif">Gift<tspan fill="#e11d48">Now</tspan></text>
      </g>

      {/* Metrics */}
      <g transform="translate(168, 88)">
        <rect x="0" y="0" width="56" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        <text x="8" y="16" fontSize="12" fontWeight="800" fill="#059669" fontFamily="sans-serif">240</text>
        <text x="8" y="24" fontSize="5" fontWeight="600" fill="#64748b" fontFamily="sans-serif">Sent</text>

        <rect x="62" y="0" width="56" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        <text x="70" y="16" fontSize="12" fontWeight="800" fill="#059669" fontFamily="sans-serif">240</text>
        <text x="70" y="24" fontSize="5" fontWeight="600" fill="#64748b" fontFamily="sans-serif">Delivered</text>

        <rect x="124" y="0" width="56" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        <text x="132" y="16" fontSize="12" fontWeight="800" fill="#059669" fontFamily="sans-serif">235</text>
        <text x="132" y="24" fontSize="5" fontWeight="600" fill="#64748b" fontFamily="sans-serif">Redeemed</text>
      </g>

      {/* Dashboard JB Hi-Fi Gift Card Preview Area */}
      <g transform="translate(168, 124)">
        <rect x="0" y="0" width="180" height="58" rx="3.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
        {/* Yellow JB Card thumbnail with interactive hover */}
        <g className="transition-transform duration-300 hover:scale-105 origin-center cursor-pointer">
          <rect x="8" y="8" width="56" height="42" rx="3" fill="#ffde00" />
          <text x="36" y="27" fontSize="8" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#0f172a" fontFamily="sans-serif">JB HI-FI</text>
          <text x="36" y="38" fontSize="4.5" fontWeight="800" textAnchor="middle" fill="#0f172a" fontFamily="sans-serif">GIFT CARD</text>
        </g>
        {/* Campaign info lines */}
        <text x="72" y="23" fontSize="6.5" fontWeight="700" fill="#0f172a" fontFamily="sans-serif">EOFY Rewards</text>
        <text x="72" y="33" fontSize="5" fill="#64748b" fontFamily="sans-serif">240 cards sent • $100 ea</text>
        {/* Live Delivered Status with Pulsing Beacon Dot */}
        <rect x="72" y="39" width="48" height="6" rx="3" fill="#dcfce7" />
        <circle cx="76.5" cy="42" r="1.3" fill="#16a34a" />
        <circle cx="76.5" cy="42" r="2.5" fill="#22c55e" opacity="0.6" className="animate-beacon origin-center" />
        <text x="96" y="44" fontSize="4" fontWeight="700" textAnchor="middle" fill="#15803d" fontFamily="sans-serif">All Delivered</text>
      </g>

      {/* Base */}
      <path d="M136 216 L160 192 L358 192 L382 216 Q384 219 380 219 L138 219 Q134 219 136 216 Z" fill="url(#deckG)" />
      <path d="M165 195 L353 195 L363 211 L155 211 Z" fill="#334155" />
      <rect x="238" y="212" width="42" height="5" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

      {/* Animated Delivery Arc & Sparkles connecting Gift Box to Dashboard (matching arrow trajectory) */}
      <g>
        {/* Animated Dashed Flow Path */}
        <path
          d="M 115 96 C 145 76, 175 74, 218 90"
          stroke="#f43f5e"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.75"
          className="animate-dash-flow"
        />
        {/* Small Direction Pointer */}
        <g transform="translate(216, 89) rotate(32)">
          <path d="M0,0 L6,-3 L4,0 L6,3 Z" fill="#e11d48" />
        </g>

        {/* Twinkling Magical Sparkles Drifting from Box to Screen */}
        <g className="animate-sparkle-1" transform="translate(122, 90)">
          <path d="M0,-3.5 Q0,0 3.5,0 Q0,0 0,3.5 Q0,0 -3.5,0 Q0,0 0,-3.5 Z" fill="#fecdd3" />
        </g>
        <g className="animate-sparkle-2" transform="translate(156, 77)">
          <path d="M0,-3 Q0,0 3,0 Q0,0 0,3 Q0,0 -3,0 Q0,0 0,-3 Z" fill="#ffe4e6" />
        </g>
        <g className="animate-sparkle-3" transform="translate(190, 83)">
          <path d="M0,-4 Q0,0 4,0 Q0,0 0,4 Q0,0 -4,0 Q0,0 0,-4 Z" fill="#ffccd5" />
        </g>
      </g>

      {/* Gift Box with Breathing Lid & Ribbon */}
      <g className="group/box transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
        {/* Box Body */}
        <path d="M54 126 L112 142 L112 214 L54 198 Z" fill="url(#bFront)" />
        <path d="M112 142 L162 126 L162 198 L112 214 Z" fill="url(#bRight)" />
        
        {/* Body Ribbons */}
        <path d="M78 132 L90 136 L90 208 L78 204 Z" fill="url(#rDark)" />
        <path d="M132 135 L144 131 L144 203 L132 207 Z" fill="url(#rDark)" />
        <path d="M54 158 L112 174 L112 186 L54 170 Z" fill="url(#rDark)" />
        <path d="M112 174 L162 158 L162 170 L112 186 Z" fill="url(#rDark)" />

        {/* Floating Lid & Bow Group */}
        <g className="animate-gift-float">
          {/* Lid */}
          <path d="M48 108 L108 92 L168 108 L108 124 Z" fill="#ffa0c2" />
          <path d="M48 108 L108 124 L108 138 L48 122 Z" fill="#ff85af" />
          <path d="M108 124 L168 108 L168 122 L108 138 Z" fill="#e11d48" />
          <path d="M74 115 L86 118 L86 132 L74 129 Z" fill="url(#rDark)" />
          <path d="M134 117 L146 114 L146 128 L134 131 Z" fill="url(#rDark)" />

          {/* Bow */}
          <path d="M108 100 C92 78 68 76 68 92 C68 104 90 104 108 100 Z" fill="#ffaec7" stroke="#fda4af" strokeWidth="1" />
          <path d="M108 100 C124 78 148 76 148 92 C148 104 126 104 108 100 Z" fill="#ffaec7" stroke="#fda4af" strokeWidth="1" />
          <path d="M108 98 C86 70 54 82 62 102 C68 114 96 106 108 98 Z" fill="#ff85af" stroke="#fff1f2" strokeWidth="1.2" />
          <path d="M108 98 C130 70 162 82 154 102 C148 114 120 106 108 98 Z" fill="#ff85af" stroke="#fff1f2" strokeWidth="1.2" />
          <ellipse cx="108" cy="98" rx="8" ry="7" fill="#f43f75" stroke="#fff1f2" strokeWidth="1" />
          <path d="M104 102 C96 116 88 126 78 132 C86 130 98 122 106 106 Z" fill="url(#rDark)" />
          <path d="M112 102 C120 116 128 126 138 132 C130 130 118 122 110 106 Z" fill="url(#rDark)" />
        </g>
      </g>
    </svg>
  );
}
