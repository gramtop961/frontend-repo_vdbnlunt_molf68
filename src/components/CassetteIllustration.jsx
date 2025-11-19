import React from 'react'

function CassetteIllustration({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Retro cassette USB drive illustration"
    >
      <defs>
        <linearGradient id="gBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6d8b6" />
          <stop offset="100%" stopColor="#e8b88e" />
        </linearGradient>
        <linearGradient id="gLabel" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#fff4e2" />
          <stop offset="100%" stopColor="#ffe9c7" />
        </linearGradient>
        <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feFlood floodColor="#ffffff" floodOpacity="0.6" result="flood" />
          <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
          <feGaussianBlur in="mask" stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.2" />
        </filter>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <rect width="6" height="6" fill="none" />
          <path d="M0 0 L0 6" stroke="#e7c9a6" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Cassette body */}
      <g filter="url(#softShadow)">
        <rect x="40" y="60" rx="22" ry="22" width="480" height="260" fill="url(#gBody)" stroke="#a37349" strokeWidth="4" />
        <rect x="64" y="86" rx="12" ry="12" width="432" height="120" fill="url(#gLabel)" stroke="#dfb389" strokeWidth="3" filter="url(#innerGlow)" />

        {/* Label stripes */}
        <rect x="76" y="110" width="408" height="10" fill="#f3c087" opacity="0.7" />
        <rect x="76" y="130" width="408" height="6" fill="#d78f5a" opacity="0.6" />
        <rect x="76" y="152" width="220" height="8" fill="#9ec5c2" opacity="0.7" />

        {/* Windows and reels */}
        <rect x="150" y="188" width="260" height="44" rx="8" fill="#2a2a2a" opacity="0.85" />
        <circle cx="210" cy="210" r="28" fill="#b28f6c" stroke="#7a5a3e" strokeWidth="3" />
        <circle cx="210" cy="210" r="12" fill="#eee" />
        <circle cx="350" cy="210" r="28" fill="#b28f6c" stroke="#7a5a3e" strokeWidth="3" />
        <circle cx="350" cy="210" r="12" fill="#eee" />

        {/* Bottom screws */}
        <circle cx="84" cy="286" r="6" fill="#7a5a3e" />
        <circle cx="500" cy="286" r="6" fill="#7a5a3e" />

        {/* Texture hatch */}
        <rect x="40" y="60" rx="22" ry="22" width="480" height="260" fill="url(#hatch)" opacity="0.2" />
      </g>

      {/* USB adapter sticking out to the right */}
      <g transform="translate(520,168)" filter="url(#softShadow)">
        <rect x="0" y="0" width="100" height="44" rx="8" fill="#c9d6dd" stroke="#7b8a92" strokeWidth="3" />
        <rect x="68" y="8" width="22" height="28" rx="3" fill="#1f2a30" />
        <rect x="10" y="10" width="48" height="6" rx="2" fill="#93a7b2" />
        <rect x="10" y="22" width="48" height="6" rx="2" fill="#93a7b2" />
        <rect x="10" y="34" width="28" height="4" rx="2" fill="#93a7b2" />
      </g>

      {/* Subtle vignette */}
      <rect x="0" y="0" width="640" height="400" fill="none" stroke="#000" strokeOpacity="0.08" />
    </svg>
  )
}

export default CassetteIllustration
