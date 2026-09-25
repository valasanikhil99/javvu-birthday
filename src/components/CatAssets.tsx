import React from 'react';

/**
 * Reusable kawaii cat SVGs and illustrations matching the design storyboard
 */

// Reusable Paw Print SVG
export const PawIcon: React.FC<{ className?: string; fill?: string }> = ({
  className = 'w-5 h-5',
  fill = 'currentColor',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main pad */}
    <ellipse cx="12" cy="15.5" rx="5" ry="4" />
    {/* 4 toe pads */}
    <circle cx="6.5" cy="9.5" r="2" />
    <circle cx="10" cy="6.5" r="2.1" />
    <circle cx="14" cy="6.5" r="2.1" />
    <circle cx="17.5" cy="9.5" r="2" />
  </svg>
);

// Cute Kitten with Party Hat (used in Floating Menu and Celebration)
export const CatPartyAvatar: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ears */}
    <polygon points="18,32 8,10 32,22" fill="#FDE2E4" stroke="#4A3E3D" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="20,29 13,15 28,23" fill="#F48FB1" />
    <polygon points="62,32 72,10 48,22" fill="#FDE2E4" stroke="#4A3E3D" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="60,29 67,15 52,23" fill="#F48FB1" />

    {/* Head */}
    <ellipse cx="40" cy="46" rx="28" ry="24" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="2.5" />

    {/* Calico brown patch on head */}
    <path d="M46 22 C46 22, 58 24, 62 34 C64 39, 58 42, 54 38 C50 34, 46 28, 46 22 Z" fill="#E0A96D" />

    {/* Party Hat */}
    <polygon points="40,2 29,26 51,26" fill="#FF8DA1" stroke="#4A3E3D" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="40" cy="2" r="3.5" fill="#FFE082" stroke="#4A3E3D" strokeWidth="1.5" />
    {/* Hat stripes */}
    <line x1="33" y1="18" x2="47" y2="18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="36" y1="10" x2="44" y2="10" stroke="#FFE082" strokeWidth="2" strokeLinecap="round" />

    {/* Eyes */}
    <ellipse cx="29" cy="46" rx="3.5" ry="4.5" fill="#2E2424" />
    <circle cx="28" cy="44" r="1.5" fill="#FFFFFF" />
    <ellipse cx="51" cy="46" rx="3.5" ry="4.5" fill="#2E2424" />
    <circle cx="50" cy="44" r="1.5" fill="#FFFFFF" />

    {/* Blush */}
    <ellipse cx="23" cy="52" rx="4.5" ry="2.5" fill="#FFABBA" opacity="0.8" />
    <ellipse cx="57" cy="52" rx="4.5" ry="2.5" fill="#FFABBA" opacity="0.8" />

    {/* Nose & Mouth */}
    <polygon points="40,51 37.5,48.5 42.5,48.5" fill="#F48FB1" />
    <path d="M37.5 52 Q40 54.5 40 52 Q40 54.5 42.5 52" stroke="#4A3E3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Whiskers */}
    <line x1="16" y1="46" x2="23" y2="48" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15" y1="52" x2="23" y2="52" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="64" y1="46" x2="57" y2="48" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="65" y1="52" x2="57" y2="52" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Cute Kitten with Laptop (Remember this?)
export const LaptopCat: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="26,36 16,16 38,26" fill="#FEEFEF" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="28,32 20,20 35,26" fill="#FFB7C5" />
    <polygon points="74,36 84,16 62,26" fill="#FEEFEF" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="72,32 80,20 65,26" fill="#FFB7C5" />

    {/* Head */}
    <ellipse cx="50" cy="46" rx="28" ry="24" fill="#FFFDFD" stroke="#3D3130" strokeWidth="2.5" />
    {/* Light cream patch */}
    <path d="M58 24 C62 26, 75 32, 74 44 C72 48, 66 48, 62 44 Z" fill="#FAD090" />

    {/* Eyes */}
    <ellipse cx="38" cy="44" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="36.5" cy="42.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="62" cy="44" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="60.5" cy="42.5" r="1.3" fill="#FFFFFF" />

    {/* Blush */}
    <ellipse cx="32" cy="50" rx="4" ry="2.5" fill="#FFB2C2" />
    <ellipse cx="68" cy="50" rx="4" ry="2.5" fill="#FFB2C2" />

    {/* Nose & Mouth */}
    <polygon points="50,48 48,46 52,46" fill="#FF8DA1" />
    <path d="M47.5 50 Q50 52 50 50 Q50 52 52.5 50" stroke="#3D3130" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Paws on Laptop */}
    <ellipse cx="36" cy="71" rx="5" ry="4" fill="#FFFDFD" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="64" cy="71" rx="5" ry="4" fill="#FFFDFD" stroke="#3D3130" strokeWidth="2" />

    {/* Laptop */}
    <rect x="25" y="65" width="50" height="26" rx="3" fill="#4B5563" stroke="#1F2937" strokeWidth="2" />
    <rect x="29" y="68" width="42" height="18" rx="2" fill="#E5E7EB" />
    {/* Screen glowing apple/heart */}
    <circle cx="50" cy="77" r="2.5" fill="#F43F5E" />
    <rect x="18" y="90" width="64" height="4" rx="2" fill="#374151" />
  </svg>
);

// Cool Cat with Sunglasses and Headphones (That one legendary day)
export const CoolCat: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Headphone Band */}
    <path d="M22 42 C20 18, 80 18, 78 42" stroke="#4F46E5" strokeWidth="4.5" strokeLinecap="round" fill="none" />

    {/* Ears */}
    <polygon points="26,36 16,16 38,26" fill="#FEEFEF" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="74,36 84,16 62,26" fill="#FEEFEF" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Head */}
    <ellipse cx="50" cy="46" rx="28" ry="24" fill="#FFF8F0" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M42 22 C48 24, 66 26, 68 36 C70 42, 60 42, 54 36 Z" fill="#D9822B" />

    {/* Sunglasses */}
    <rect x="30" y="38" width="17" height="12" rx="4" fill="#111827" stroke="#1E1E24" strokeWidth="1.5" />
    <rect x="53" y="38" width="17" height="12" rx="4" fill="#111827" stroke="#1E1E24" strokeWidth="1.5" />
    <line x1="47" y1="42" x2="53" y2="42" stroke="#111827" strokeWidth="2.5" />
    {/* Glasses glint */}
    <line x1="33" y1="41" x2="42" y2="47" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="56" y1="41" x2="65" y2="47" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />

    {/* Headphone Earcups */}
    <rect x="15" y="36" width="9" height="16" rx="4" fill="#EC4899" stroke="#3D3130" strokeWidth="2" />
    <rect x="76" y="36" width="9" height="16" rx="4" fill="#EC4899" stroke="#3D3130" strokeWidth="2" />

    {/* Smirk */}
    <path d="M47 54 Q54 58 57 52" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />
    <polygon points="50,51 48,49 52,49" fill="#FF8DA1" />
  </svg>
);

// Happy Blushing Cat (Our random conversations)
export const HappyCat: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="26,36 16,16 38,26" fill="#FFF4ED" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="28,32 20,20 35,26" fill="#FFAAA6" />
    <polygon points="74,36 84,16 62,26" fill="#FFF4ED" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="72,32 80,20 65,26" fill="#FFAAA6" />

    {/* Head */}
    <ellipse cx="50" cy="46" rx="28" ry="24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M45 22 C48 24, 72 26, 70 38 C68 44, 58 44, 54 36 Z" fill="#F7C59F" />

    {/* Happy curved ^ ^ eyes */}
    <path d="M33 44 Q38 39 43 44" stroke="#3D3130" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M57 44 Q62 39 67 44" stroke="#3D3130" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Big rosy blush */}
    <ellipse cx="32" cy="50" rx="5" ry="3" fill="#FF8DA1" opacity="0.85" />
    <ellipse cx="68" cy="50" rx="5" ry="3" fill="#FF8DA1" opacity="0.85" />

    {/* Open Happy Mouth :3 */}
    <polygon points="50,48 48,46 52,46" fill="#F43F5E" />
    <path d="M45 51 Q50 56 55 51" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="#FF6B8B" />

    {/* Cute paws holding chin */}
    <ellipse cx="42" cy="68" rx="5.5" ry="4" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="58" cy="68" rx="5.5" ry="4" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2" />
  </svg>
);

// Curious / Detective Cat (You still owe me an explanation)
export const CuriousCat: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="26,36 16,16 38,26" fill="#FAF6EE" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="28,32 20,20 35,26" fill="#F8C0C8" />
    <polygon points="74,36 84,16 62,26" fill="#FAF6EE" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="72,32 80,20 65,26" fill="#F8C0C8" />

    {/* Head */}
    <ellipse cx="50" cy="46" rx="28" ry="24" fill="#FAF6EE" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M30 24 C34 26, 46 26, 42 36 C38 42, 28 40, 26 34 Z" fill="#E8A87C" />

    {/* Side-eye / suspicious squint */}
    <ellipse cx="38" cy="44" rx="4.5" ry="3" fill="#2E2424" />
    <circle cx="36" cy="43.5" r="1.4" fill="#FFFFFF" />
    <ellipse cx="62" cy="44" rx="4.5" ry="3" fill="#2E2424" />
    <circle cx="60" cy="43.5" r="1.4" fill="#FFFFFF" />

    {/* Slightly raised skeptical eyebrow */}
    <path d="M57 37 Q62 35 67 38" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Nose & straight suspicious mouth */}
    <polygon points="50,48 48,46 52,46" fill="#FF8DA1" />
    <line x1="46" y1="52" x2="54" y2="52" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" />

    {/* Paws holding edge */}
    <ellipse cx="40" cy="68" rx="6" ry="4" fill="#FAF6EE" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="60" cy="68" rx="6" ry="4" fill="#FAF6EE" stroke="#3D3130" strokeWidth="2" />
  </svg>
);

// Cat Portrait 1: Warm Smiling White/Cream Kitten
export const WarmSmileCat: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="18,28 8,8 30,18" fill="#FFF7ED" stroke="#4A3E3D" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="20,25 12,12 28,20" fill="#FDBA74" />
    <polygon points="62,28 72,8 50,18" fill="#FFF7ED" stroke="#4A3E3D" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="60,25 68,12 52,20" fill="#FDBA74" />
    <ellipse cx="40" cy="42" rx="26" ry="22" fill="#FFF7ED" stroke="#4A3E3D" strokeWidth="2" />
    <path d="M46 20 C54 22, 64 26, 62 36 C60 40, 52 40, 48 34 Z" fill="#FDBA74" />
    {/* Eyes */}
    <ellipse cx="30" cy="40" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="29" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="50" cy="40" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="49" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="24" cy="46" rx="4" ry="2.5" fill="#FDA4AF" />
    <ellipse cx="56" cy="46" rx="4" ry="2.5" fill="#FDA4AF" />
    <polygon points="40,44 38,42 42,42" fill="#F43F5E" />
    <path d="M37.5 46 Q40 48 40 46 Q40 48 42.5 46" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Cat Portrait 2: Sweet Gray Tabby Kitten
export const SweetGrayCat: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="18,28 8,8 30,18" fill="#E5E7EB" stroke="#374151" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="20,25 12,12 28,20" fill="#F9A8D4" />
    <polygon points="62,28 72,8 50,18" fill="#E5E7EB" stroke="#374151" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="60,25 68,12 52,20" fill="#F9A8D4" />
    <ellipse cx="40" cy="42" rx="26" ry="22" fill="#D1D5DB" stroke="#374151" strokeWidth="2" />
    {/* Gray stripes */}
    <path d="M40 22 L40 28 M34 24 L36 30 M46 24 L44 30" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="30" cy="40" rx="3.5" ry="4" fill="#1F2937" />
    <circle cx="29" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="50" cy="40" rx="3.5" ry="4" fill="#1F2937" />
    <circle cx="49" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="24" cy="46" rx="4" ry="2" fill="#F472B6" opacity="0.8" />
    <ellipse cx="56" cy="46" rx="4" ry="2" fill="#F472B6" opacity="0.8" />
    <polygon points="40,44 38,42 42,42" fill="#EC4899" />
    <path d="M37.5 46 Q40 48 40 46 Q40 48 42.5 46" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Cat Portrait 3: Calico / Ginger Kitten
export const CalicoCat: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="18,28 8,8 30,18" fill="#FEF3C7" stroke="#451A03" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="20,25 12,12 28,20" fill="#F87171" />
    <polygon points="62,28 72,8 50,18" fill="#FEF3C7" stroke="#451A03" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="60,25 68,12 52,20" fill="#F87171" />
    <ellipse cx="40" cy="42" rx="26" ry="22" fill="#FFFBEB" stroke="#451A03" strokeWidth="2" />
    <path d="M22 30 C26 24, 38 22, 34 34 C32 38, 22 40, 22 30 Z" fill="#F97316" />
    <path d="M56 26 C64 28, 66 38, 58 40 C52 40, 52 32, 56 26 Z" fill="#78350F" />
    <ellipse cx="30" cy="40" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="29" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="50" cy="40" rx="3.5" ry="4" fill="#2E2424" />
    <circle cx="49" cy="38.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="24" cy="46" rx="4" ry="2.5" fill="#FDA4AF" />
    <ellipse cx="56" cy="46" rx="4" ry="2.5" fill="#FDA4AF" />
    <polygon points="40,44 38,42 42,42" fill="#F43F5E" />
    <path d="M37.5 46 Q40 48 40 46 Q40 48 42.5 46" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Cat Portrait 4: Tuxedo Black & White Kitten
export const TuxedoCat: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="18,28 8,8 30,18" fill="#1E293B" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="20,25 12,12 28,20" fill="#F472B6" />
    <polygon points="62,28 72,8 50,18" fill="#1E293B" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="60,25 68,12 52,20" fill="#F472B6" />
    <ellipse cx="40" cy="42" rx="26" ry="22" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
    {/* White snout blaze */}
    <path d="M40 32 L46 44 C48 50, 46 58, 40 58 C34 58, 32 50, 34 44 Z" fill="#FFFFFF" />
    <ellipse cx="30" cy="40" rx="3.5" ry="4" fill="#34D399" />
    <ellipse cx="30" cy="40" rx="2" ry="3.5" fill="#064E3B" />
    <circle cx="29" cy="38.5" r="1" fill="#FFFFFF" />
    <ellipse cx="50" cy="40" rx="3.5" ry="4" fill="#34D399" />
    <ellipse cx="50" cy="40" rx="2" ry="3.5" fill="#064E3B" />
    <circle cx="49" cy="38.5" r="1" fill="#FFFFFF" />
    <polygon points="40,46 38.5,44 41.5,44" fill="#FB7185" />
    <path d="M38 48 Q40 50 40 48 Q40 50 42 48" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Ceramic Cat Food Bowl with heart / paw (Birthday Food Donation)
export const CatFoodBowl: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bowl Shadow */}
    <ellipse cx="50" cy="68" rx="40" ry="8" fill="rgba(0,0,0,0.35)" />
    {/* Bowl Body */}
    <path
      d="M12 36 C12 56, 26 66, 50 66 C74 66, 88 56, 88 36 Z"
      fill="#FBCFE8"
      stroke="#DB2777"
      strokeWidth="3"
    />
    {/* Rim */}
    <ellipse cx="50" cy="36" rx="38" ry="12" fill="#FDF2F8" stroke="#DB2777" strokeWidth="3" />
    {/* Food Inside */}
    <ellipse cx="50" cy="36" rx="31" ry="8" fill="#B45309" />
    {/* Golden sparkles on food */}
    <circle cx="44" cy="35" r="1.5" fill="#FDE047" />
    <circle cx="56" cy="37" r="1.5" fill="#FDE047" />
    <circle cx="50" cy="34" r="1.5" fill="#FEF08A" />
    {/* Paw / Heart Emblem on Bowl front */}
    <ellipse cx="50" cy="54" rx="4" ry="3.2" fill="#BE185D" />
    <circle cx="45" cy="49" r="1.4" fill="#BE185D" />
    <circle cx="48" cy="47" r="1.5" fill="#BE185D" />
    <circle cx="52" cy="47" r="1.5" fill="#BE185D" />
    <circle cx="55" cy="49" r="1.4" fill="#BE185D" />
  </svg>
);

// Peeking Cat Paws for Letter / Section dividers
export const PeekingCatTop: React.FC<{ className?: string }> = ({ className = 'w-48 h-20' }) => (
  <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="68,52 52,16 86,34" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="3" strokeLinejoin="round" />
    <polygon points="68,46 57,24 82,36" fill="#F48FB1" />
    <polygon points="132,52 148,16 114,34" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="3" strokeLinejoin="round" />
    <polygon points="132,46 143,24 118,36" fill="#F48FB1" />

    {/* Head peeking */}
    <path d="M50 80 C50 40, 150 40, 150 80 Z" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="3" />
    {/* Calico spot */}
    <path d="M110 42 C125 44, 142 54, 138 72 C134 76, 120 74, 114 66 Z" fill="#FDBA74" />

    {/* Eyes */}
    <ellipse cx="82" cy="58" rx="5" ry="6" fill="#2E2424" />
    <circle cx="80" cy="55.5" r="2" fill="#FFFFFF" />
    <ellipse cx="118" cy="58" rx="5" ry="6" fill="#2E2424" />
    <circle cx="116" cy="55.5" r="2" fill="#FFFFFF" />

    {/* Cheeks */}
    <ellipse cx="72" cy="66" rx="6" ry="3" fill="#FDA4AF" opacity="0.85" />
    <ellipse cx="128" cy="66" rx="6" ry="3" fill="#FDA4AF" opacity="0.85" />

    {/* Nose & Mouth */}
    <polygon points="100,65 97,62 103,62" fill="#F43F5E" />
    <path d="M96 68 Q100 71 100 68 Q100 71 104 68" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Whiskers */}
    <line x1="58" y1="62" x2="70" y2="64" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />
    <line x1="56" y1="68" x2="68" y2="68" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />
    <line x1="142" y1="62" x2="130" y2="64" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />
    <line x1="144" y1="68" x2="132" y2="68" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />

    {/* Two paws resting over the edge */}
    <g>
      <ellipse cx="68" cy="80" rx="12" ry="7" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="2.5" />
      <line x1="64" y1="76" x2="64" y2="82" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="76" x2="72" y2="82" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <g>
      <ellipse cx="132" cy="80" rx="12" ry="7" fill="#FFF5F5" stroke="#4A3E3D" strokeWidth="2.5" />
      <line x1="128" y1="76" x2="128" y2="82" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="136" y1="76" x2="136" y2="82" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// Curious cat waiting with big pleading eyes for "Do you love me?"
export const CuriousWaitingCat: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft glowing shadow */}
    <ellipse cx="50" cy="90" rx="32" ry="6" fill="rgba(244,63,94,0.15)" />

    {/* Ears */}
    <polygon points="26,34 14,12 38,24" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="28,30 18,17 35,24" fill="#FFAAA6" />
    <polygon points="74,34 86,12 62,24" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="72,30 82,17 65,24" fill="#FFAAA6" />

    {/* Body */}
    <ellipse cx="50" cy="74" rx="22" ry="18" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />

    {/* Head */}
    <ellipse cx="50" cy="46" rx="28" ry="24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M46 22 C48 24, 72 26, 70 38 C68 44, 58 44, 54 36 Z" fill="#FDBA74" />

    {/* Huge Sparkly Anime Eyes */}
    <ellipse cx="36" cy="44" rx="6.5" ry="8" fill="#2E2424" />
    <circle cx="34" cy="41" r="2.8" fill="#FFFFFF" />
    <circle cx="38" cy="47" r="1.4" fill="#FFFFFF" />
    <ellipse cx="64" cy="44" rx="6.5" ry="8" fill="#2E2424" />
    <circle cx="62" cy="41" r="2.8" fill="#FFFFFF" />
    <circle cx="66" cy="47" r="1.4" fill="#FFFFFF" />

    {/* Shy Blushing Cheeks */}
    <ellipse cx="28" cy="53" rx="5" ry="3" fill="#FDA4AF" opacity="0.9" />
    <ellipse cx="72" cy="53" rx="5" ry="3" fill="#FDA4AF" opacity="0.9" />

    {/* Little Cute Nose & Pout */}
    <polygon points="50,51 47.5,48.5 52.5,48.5" fill="#F43F5E" />
    <path d="M46 54 Q50 57 50 54 Q50 57 54 54" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Two Paws held tightly under chin */}
    <ellipse cx="44" cy="62" rx="5" ry="4" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="56" cy="62" rx="5" ry="4" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />

    {/* Little Heart Floating above head */}
    <path
      d="M50 14 C50 14, 46 8, 41 10 C36 12, 38 18, 50 24 C62 18, 64 12, 59 10 C54 8, 50 14, 50 14 Z"
      fill="#F43F5E"
    />
  </svg>
);

// Happy Excited Cat Jumping with Joy (for YES click)
export const ExcitedCat: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Joy Sparkles in background */}
    <path d="M16 26 L20 18 L24 26 L32 30 L24 34 L20 42 L16 34 L8 30 Z" fill="#FBBF24" />
    <path d="M96 20 L99 14 L102 20 L108 23 L102 26 L99 32 L96 26 L90 23 Z" fill="#F472B6" />
    <path d="M10 80 L13 75 L16 80 L21 82.5 L16 85 L13 90 L10 85 L5 82.5 Z" fill="#F43F5E" />

    {/* Shadow */}
    <ellipse cx="60" cy="110" rx="26" ry="5" fill="rgba(244,63,94,0.2)" />

    {/* Raised Paws in celebration */}
    <ellipse cx="32" cy="46" rx="6" ry="8" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" transform="rotate(-30 32 46)" />
    <ellipse cx="88" cy="46" rx="6" ry="8" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" transform="rotate(30 88 46)" />

    {/* Ears */}
    <polygon points="36,44 24,20 48,32" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="38,40 28,25 45,32" fill="#FF8DA1" />
    <polygon points="84,44 96,20 72,32" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="82,40 92,25 75,32" fill="#FF8DA1" />

    {/* Body */}
    <ellipse cx="60" cy="85" rx="24" ry="20" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />
    {/* Feet */}
    <ellipse cx="48" cy="103" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />
    <ellipse cx="72" cy="103" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />

    {/* Head */}
    <ellipse cx="60" cy="54" rx="30" ry="25" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M56 29 C60 31, 84 33, 82 45 C80 51, 70 51, 66 43 Z" fill="#FDBA74" />

    {/* Heart-Shaped Eyes (Deep in Love / Excited) */}
    <path
      d="M45 48 C45 48, 41 42, 36 44 C31 46, 33 52, 45 58 C57 52, 59 46, 54 44 C49 42, 45 48, 45 48 Z"
      fill="#E11D48"
    />
    <path
      d="M75 48 C75 48, 71 42, 66 44 C61 46, 63 52, 75 58 C87 52, 89 46, 84 44 C79 42, 75 48, 75 48 Z"
      fill="#E11D48"
    />

    {/* Blushing Cheeks */}
    <ellipse cx="36" cy="62" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.95" />
    <ellipse cx="84" cy="62" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.95" />

    {/* Open Happy Mouth Singing / Squealing */}
    <ellipse cx="60" cy="66" rx="8" ry="7" fill="#BE185D" stroke="#3D3130" strokeWidth="2" />
    <path d="M55 68 Q60 63 65 68" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="60" cy="70" rx="5" ry="3" fill="#FB7185" />

    {/* Nose */}
    <polygon points="60,58 57.5,55.5 62.5,55.5" fill="#F43F5E" />

    {/* Tiny Happy Tears of Joy */}
    <path d="M28 50 Q26 53 28 56 Q30 53 28 50" fill="#60A5FA" />
    <path d="M92 50 Q94 53 92 56 Q90 53 92 50" fill="#60A5FA" />
  </svg>
);

// Crying / Pleading Cat (for NO click with dramatic tears)
export const CryingCat: React.FC<{ className?: string; dramaLevel?: number }> = ({
  className = 'w-28 h-28',
  dramaLevel = 1,
}) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Tear Puddle underneath */}
    <ellipse
      cx="60"
      cy="108"
      rx={dramaLevel >= 2 ? 38 : 26}
      ry={dramaLevel >= 2 ? 8 : 5}
      fill="#60A5FA"
      opacity="0.4"
    />
    <ellipse cx="60" cy="108" rx={dramaLevel >= 2 ? 26 : 18} ry={dramaLevel >= 2 ? 5 : 3.5} fill="#3B82F6" opacity="0.5" />

    {/* Drooping sad ears */}
    <polygon points="34,48 18,36 38,32" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="33,44 23,36 36,33" fill="#D1D5DB" />
    <polygon points="86,48 102,36 82,32" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="87,44 97,36 84,33" fill="#D1D5DB" />

    {/* Body hunched over sadly */}
    <ellipse cx="60" cy="85" rx="23" ry="19" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />

    {/* Head */}
    <ellipse cx="60" cy="54" rx="29" ry="24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M56 30 C58 32, 78 33, 76 43 C74 48, 66 48, 62 41 Z" fill="#E5E7EB" />

    {/* Trembling sad eyes > < or teary anime pools */}
    <ellipse cx="43" cy="50" rx="7" ry="7" fill="#1E293B" />
    <ellipse cx="77" cy="50" rx="7" ry="7" fill="#1E293B" />
    {/* Giant glossy teardrop reflection in eyes */}
    <ellipse cx="41" cy="48" rx="4" ry="4" fill="#93C5FD" />
    <circle cx="39" cy="46" r="2" fill="#FFFFFF" />
    <ellipse cx="75" cy="48" rx="4" ry="4" fill="#93C5FD" />
    <circle cx="73" cy="46" r="2" fill="#FFFFFF" />

    {/* Sad Wobbly Eyebrows */}
    <path d="M36 41 Q43 38 48 42" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M84 41 Q77 38 72 42" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Streams of Tears Gushing down */}
    <path
      d="M39 55 C34 68, 30 82, 34 104"
      stroke="#38BDF8"
      strokeWidth={dramaLevel >= 2 ? '4.5' : '3'}
      strokeLinecap="round"
      strokeDasharray={dramaLevel >= 3 ? 'none' : '6 2'}
    />
    <path
      d="M81 55 C86 68, 90 82, 86 104"
      stroke="#38BDF8"
      strokeWidth={dramaLevel >= 2 ? '4.5' : '3'}
      strokeLinecap="round"
      strokeDasharray={dramaLevel >= 3 ? 'none' : '6 2'}
    />
    {/* Secondary tear waterfall for extra drama */}
    {dramaLevel >= 2 && (
      <>
        <path d="M44 57 C41 68, 38 80, 40 102" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        <path d="M76 57 C79 68, 82 80, 80 102" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        {/* Splash drops flying off */}
        <circle cx="26" cy="74" r="2.5" fill="#38BDF8" />
        <circle cx="22" cy="86" r="2" fill="#93C5FD" />
        <circle cx="94" cy="74" r="2.5" fill="#38BDF8" />
        <circle cx="98" cy="86" r="2" fill="#93C5FD" />
      </>
    )}

    {/* Trembling Quivering Mouth ﹏ */}
    <polygon points="60,56 58,54 62,54" fill="#F43F5E" />
    <path
      d="M52 61 Q56 59 60 61 Q64 59 68 61"
      stroke="#3D3130"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Paws clutching handkerchief or wiping eyes */}
    <ellipse cx="46" cy="72" rx="6" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="74" cy="72" rx="6" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
    {/* Mini handkerchief */}
    <polygon points="56,70 66,70 68,80 54,78" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1" />
  </svg>
);

// Sleepy Cat (for Calm & Emotional Appreciation section)
export const SleepyCat: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shadow */}
    <ellipse cx="50" cy="70" rx="35" ry="6" fill="rgba(244,63,94,0.12)" />

    {/* Curled Body */}
    <ellipse cx="48" cy="48" rx="32" ry="22" fill="#FFF7ED" stroke="#3D3130" strokeWidth="2.5" />
    {/* Calico back spot */}
    <path d="M42 28 C52 28, 64 34, 60 48 C56 56, 44 54, 38 46 Z" fill="#FDBA74" />

    {/* Curled Fluffy Tail */}
    <path
      d="M74 54 C82 52, 85 40, 78 36 C72 32, 68 38, 70 44"
      stroke="#3D3130"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Tucked Head */}
    <circle cx="32" cy="46" r="16" fill="#FFF7ED" stroke="#3D3130" strokeWidth="2.5" />
    {/* Ears laid back peacefully */}
    <polygon points="26,33 16,24 28,26" fill="#FFF7ED" stroke="#3D3130" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="38,33 46,22 36,25" fill="#FFF7ED" stroke="#3D3130" strokeWidth="2" strokeLinejoin="round" />

    {/* Sleeping Eyes (curved serene arcs ^_^) */}
    <path d="M22 47 Q26 51 30 47" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M34 47 Q38 51 42 47" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Rosy Sleeping Cheeks */}
    <ellipse cx="22" cy="51" rx="3.5" ry="2" fill="#FDA4AF" opacity="0.8" />
    <ellipse cx="42" cy="51" rx="3.5" ry="2" fill="#FDA4AF" opacity="0.8" />

    {/* Paws tucked underneath */}
    <ellipse cx="36" cy="62" rx="6" ry="3.5" fill="#FFF7ED" stroke="#3D3130" strokeWidth="1.8" />

    {/* Floating "Z z z" */}
    <text x="68" y="22" fill="#F472B6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">z</text>
    <text x="76" y="14" fill="#F43F5E" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Z</text>
    <text x="86" y="8" fill="#EC4899" fontSize="10" fontWeight="bold" fontFamily="sans-serif">z</text>
  </svg>
);

// Mischievous Winking Cat (for Inside Jokes)
export const MischievousCat: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears (one twitching) */}
    <polygon points="24,36 12,14 36,24" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="26,32 16,18 33,24" fill="#FFAAA6" />
    {/* Bent mischievous ear */}
    <polygon points="76,38 88,26 66,24" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="74,34 82,28 68,26" fill="#FFAAA6" />

    {/* Head */}
    <ellipse cx="50" cy="48" rx="28" ry="24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M46 24 C52 26, 72 28, 68 40 C66 44, 56 44, 52 36 Z" fill="#FDBA74" />

    {/* Left Eye: Big sparkle wink */}
    <ellipse cx="36" cy="46" rx="4" ry="4.5" fill="#2E2424" />
    <circle cx="34.5" cy="44.5" r="1.5" fill="#FFFFFF" />
    {/* Right Eye: Mischievous playful wink ">" */}
    <path d="M60 48 L68 44 L60 40" stroke="#3D3130" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Cheeky Smirk */}
    <ellipse cx="30" cy="54" rx="4.5" ry="2.5" fill="#FDA4AF" opacity="0.8" />
    <ellipse cx="70" cy="54" rx="4.5" ry="2.5" fill="#FDA4AF" opacity="0.8" />
    <polygon points="50,51 48,49 52,49" fill="#F43F5E" />
    <path d="M46 54 Q52 60 58 53" stroke="#3D3130" strokeWidth="2.2" strokeLinecap="round" fill="none" />

    {/* Sneaky Paw resting */}
    <ellipse cx="52" cy="72" rx="7" ry="5" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2" />
    <line x1="49" y1="69" x2="49" y2="75" stroke="#3D3130" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="55" y1="69" x2="55" y2="75" stroke="#3D3130" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Cat with Wrapped Gift (for Surprise section)
export const CatWithGift: React.FC<{ className?: string }> = ({ className = 'w-32 h-32' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shadow */}
    <ellipse cx="60" cy="108" rx="44" ry="7" fill="rgba(244,63,94,0.18)" />

    {/* Cat Sitting behind gift */}
    <polygon points="28,42 16,18 40,30" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="30,38 20,23 37,30" fill="#FFAAA6" />
    <polygon points="76,42 88,18 64,30" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="74,38 84,23 67,30" fill="#FFAAA6" />

    {/* Cat Head */}
    <ellipse cx="52" cy="50" rx="28" ry="24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M46 26 C52 28, 76 30, 72 42 C70 48, 60 48, 56 40 Z" fill="#FDBA74" />

    {/* Curious excited eyes looking at gift */}
    <ellipse cx="40" cy="48" rx="4" ry="5" fill="#2E2424" />
    <circle cx="39" cy="46" r="1.5" fill="#FFFFFF" />
    <ellipse cx="64" cy="48" rx="4" ry="5" fill="#2E2424" />
    <circle cx="63" cy="46" r="1.5" fill="#FFFFFF" />

    <ellipse cx="32" cy="56" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.9" />
    <ellipse cx="72" cy="56" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.9" />
    <polygon points="52,53 49.5,50.5 54.5,50.5" fill="#F43F5E" />
    <path d="M48 56 Q52 59 52 56 Q52 59 56 56" stroke="#3D3130" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Two paws resting on top of gift box */}
    <ellipse cx="42" cy="74" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
    <ellipse cx="74" cy="74" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />

    {/* Wrapped Gift Box */}
    <rect x="28" y="72" width="60" height="34" rx="5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2.5" />
    <rect x="24" y="68" width="68" height="10" rx="3" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />

    {/* Ribbon */}
    <rect x="54" y="68" width="8" height="38" fill="#F43F5E" />
    {/* Satin Bow on Top */}
    <path d="M58 68 C52 58, 40 60, 48 68 Z" fill="#F43F5E" stroke="#BE185D" strokeWidth="1.5" />
    <path d="M58 68 C64 58, 76 60, 68 68 Z" fill="#F43F5E" stroke="#BE185D" strokeWidth="1.5" />
    <circle cx="58" cy="68" r="3" fill="#FFE4E6" stroke="#BE185D" strokeWidth="1" />
  </svg>
);

// Cat with Letter (for Letter Section)
export const CatWithLetter: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Paper Letter Envelope in background */}
    <rect x="18" y="38" width="74" height="52" rx="4" fill="#FFFDF8" stroke="#E2D9C8" strokeWidth="2" />
    <path d="M18 38 L55 65 L92 38" stroke="#D1C5B0" strokeWidth="2" fill="#FAF6EE" />
    {/* Red wax seal with paw print */}
    <circle cx="55" cy="65" r="7" fill="#E11D48" />
    <circle cx="55" cy="65" r="3" fill="#BE185D" />

    {/* Cat lying on top edge of letter */}
    <ellipse cx="55" cy="38" rx="26" ry="18" fill="#FFF8F0" stroke="#3D3130" strokeWidth="2.5" />
    {/* Ears */}
    <polygon points="34,26 22,8 42,18" fill="#FFF8F0" stroke="#3D3130" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="35,23 26,13 39,18" fill="#FDA4AF" />
    <polygon points="76,26 88,8 68,18" fill="#FFF8F0" stroke="#3D3130" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="75,23 84,13 71,18" fill="#FDA4AF" />

    {/* Calm happy closed eyes */}
    <path d="M43 36 Q48 31 53 36" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M57 36 Q62 31 67 36" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Blushing cheeks */}
    <ellipse cx="38" cy="42" rx="4" ry="2" fill="#FDA4AF" />
    <ellipse cx="72" cy="42" rx="4" ry="2" fill="#FDA4AF" />

    {/* Nose & mouth */}
    <polygon points="55,40 53,38 57,38" fill="#F43F5E" />
    <path d="M51 42 Q55 45 55 42 Q55 45 59 42" stroke="#3D3130" strokeWidth="1.5" strokeLinecap="round" fill="none" />

    {/* Paws hanging over the letter edge */}
    <ellipse cx="40" cy="52" rx="6" ry="4" fill="#FFF8F0" stroke="#3D3130" strokeWidth="1.8" />
    <ellipse cx="70" cy="52" rx="6" ry="4" fill="#FFF8F0" stroke="#3D3130" strokeWidth="1.8" />
  </svg>
);

export const LetterCat = CatWithLetter;

// Gentle Cat Holding Meal Box (for Food Donation Section)
export const GentleCatMealBox: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="26,34 14,14 38,24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="28,30 18,18 35,24" fill="#FCA5A5" />
    <polygon points="74,34 86,14 62,24" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="72,30 82,18 65,24" fill="#FCA5A5" />

    {/* Cat Head */}
    <ellipse cx="50" cy="44" rx="28" ry="23" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
    <path d="M46 21 C52 23, 72 25, 70 36 C68 42, 58 42, 54 34 Z" fill="#FDBA74" />

    {/* Gentle, sincere warm eyes */}
    <ellipse cx="38" cy="42" rx="4" ry="4.5" fill="#2E2424" />
    <circle cx="36.5" cy="40.5" r="1.5" fill="#FFFFFF" />
    <ellipse cx="62" cy="42" rx="4" ry="4.5" fill="#2E2424" />
    <circle cx="60.5" cy="40.5" r="1.5" fill="#FFFFFF" />

    {/* Rosy blush */}
    <ellipse cx="30" cy="49" rx="4.5" ry="2.5" fill="#FDA4AF" opacity="0.85" />
    <ellipse cx="70" cy="49" rx="4.5" ry="2.5" fill="#FDA4AF" opacity="0.85" />

    {/* Cute smiling mouth */}
    <polygon points="50,47 48,45 52,45" fill="#F43F5E" />
    <path d="M46 50 Q50 53 50 50 Q50 53 54 50" stroke="#3D3130" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Meal Box Held in front */}
    <rect x="25" y="62" width="50" height="28" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
    <line x1="25" y1="70" x2="75" y2="70" stroke="#D97706" strokeWidth="1.5" />
    {/* Heart on meal box */}
    <path
      d="M50 78 C50 78, 46 74, 42 75 C38 76, 39 80, 50 86 C61 80, 62 76, 58 75 C54 74, 50 78, 50 78 Z"
      fill="#F43F5E"
    />

    {/* Warm Steam / Love heart rising from meal */}
    <path d="M44 58 Q42 54 45 52" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M50 56 Q52 52 49 50" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M56 58 Q58 54 55 52" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" fill="none" />

    {/* Two Paws holding meal box */}
    <ellipse cx="28" cy="68" rx="5.5" ry="4" fill="#FFF9F5" stroke="#3D3130" strokeWidth="1.8" />
    <ellipse cx="72" cy="68" rx="5.5" ry="4" fill="#FFF9F5" stroke="#3D3130" strokeWidth="1.8" />
  </svg>
);

// Night Cats under Crescent Moon (for Final Screen)
export const NightCatsMoonlight: React.FC<{ className?: string }> = ({ className = 'w-48 h-40' }) => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glowing Crescent Moon */}
    <path
      d="M130 18 C116 18, 106 28, 106 42 C106 56, 116 66, 130 66 C124 62, 120 54, 120 42 C120 30, 124 22, 130 18 Z"
      fill="#FEF08A"
      filter="drop-shadow(0 0 12px rgba(253, 224, 71, 0.6))"
    />

    {/* Little Stars */}
    <circle cx="30" cy="20" r="1.5" fill="#FFF" opacity="0.8" />
    <circle cx="70" cy="15" r="2" fill="#FDE047" opacity="0.9" />
    <circle cx="95" cy="32" r="1.2" fill="#FFF" opacity="0.7" />
    <circle cx="15" cy="45" r="1.8" fill="#F472B6" opacity="0.8" />

    {/* Subtle Paw Constellation in sky */}
    <g opacity="0.35" transform="translate(40, 30) scale(0.6)">
      <ellipse cx="12" cy="15.5" rx="5" ry="4" fill="#FDA4AF" />
      <circle cx="6.5" cy="9.5" r="2" fill="#FDA4AF" />
      <circle cx="10" cy="6.5" r="2" fill="#FDA4AF" />
      <circle cx="14" cy="6.5" r="2" fill="#FDA4AF" />
      <circle cx="17.5" cy="9.5" r="2" fill="#FDA4AF" />
    </g>

    {/* Night Ledge / Window Sill */}
    <rect x="10" y="98" width="140" height="12" rx="3" fill="#1E1E28" stroke="#323242" strokeWidth="2" />

    {/* Cat 1 Silhouette (Taller, leaning in) */}
    <g fill="#181822" stroke="#4A4A62" strokeWidth="1.5">
      {/* Body */}
      <path d="M50 98 C50 68, 62 66, 68 70 C72 74, 70 98, 70 98 Z" />
      {/* Head */}
      <circle cx="60" cy="62" r="11" />
      {/* Ears */}
      <polygon points="53,55 49,44 58,52" />
      <polygon points="63,52 71,44 67,55" />
      {/* Tail curled behind */}
      <path d="M48 95 C40 92, 38 82, 42 78" stroke="#4A4A62" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>

    {/* Cat 2 Silhouette (Slightly smaller, head resting close) */}
    <g fill="#14141E" stroke="#4A4A62" strokeWidth="1.5">
      {/* Body */}
      <path d="M72 98 C72 74, 82 72, 88 76 C94 80, 92 98, 92 98 Z" />
      {/* Head */}
      <circle cx="80" cy="68" r="9.5" />
      {/* Ears */}
      <polygon points="74,62 70,52 78,59" />
      <polygon points="83,59 90,52 87,62" />
      {/* Tail entwining with Cat 1's tail forming heart shape */}
      <path d="M92 95 C100 90, 102 80, 96 74 C90 70, 78 72, 70 82" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Little glowing heart above their heads */}
    <path
      d="M71 46 C71 46, 68 41, 64 43 C60 45, 62 49, 71 55 C80 49, 82 45, 78 43 C74 41, 71 46, 71 46 Z"
      fill="#F43F5E"
      filter="drop-shadow(0 0 6px rgba(244, 63, 94, 0.7))"
    />
  </svg>
);

// Large Birthday Cat Beside Cake (for Hero & Celebration)
export const BirthdayCatCake: React.FC<{ className?: string }> = ({ className = 'w-48 h-48' }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shadow */}
    <ellipse cx="80" cy="148" rx="65" ry="8" fill="rgba(244,63,94,0.18)" />

    {/* Tiered Birthday Cake */}
    <g>
      {/* Bottom tier */}
      <rect x="25" y="112" width="60" height="32" rx="4" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2.5" />
      <line x1="25" y1="124" x2="85" y2="124" stroke="#F472B6" strokeWidth="2" strokeDasharray="4 3" />
      {/* Top tier */}
      <rect x="35" y="86" width="40" height="26" rx="3" fill="#FFF1F2" stroke="#DB2777" strokeWidth="2.5" />
      {/* Frosting drips */}
      <path d="M35 92 Q40 98 45 92 Q50 98 55 92 Q60 98 65 92 Q70 98 75 92" stroke="#DB2777" strokeWidth="2" fill="none" />

      {/* Lit Birthday Candles */}
      <rect x="44" y="74" width="4" height="12" rx="1" fill="#60A5FA" />
      <ellipse cx="46" cy="70" rx="2.5" ry="4" fill="#F59E0B" />
      <circle cx="46" cy="70" r="1.5" fill="#FEF08A" />

      <rect x="53" y="72" width="4" height="14" rx="1" fill="#F472B6" />
      <ellipse cx="55" cy="68" rx="2.5" ry="4" fill="#F59E0B" />
      <circle cx="55" cy="68" r="1.5" fill="#FEF08A" />

      <rect x="62" y="74" width="4" height="12" rx="1" fill="#34D399" />
      <ellipse cx="64" cy="70" rx="2.5" ry="4" fill="#F59E0B" />
      <circle cx="64" cy="70" r="1.5" fill="#FEF08A" />
    </g>

    {/* Adorable Cat Sitting beside cake */}
    <g>
      {/* Party Hat */}
      <polygon points="112,30 100,56 124,56" fill="#F43F5E" stroke="#3D3130" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="112" cy="30" r="3.5" fill="#FDE047" stroke="#3D3130" strokeWidth="1.5" />
      <line x1="104" y1="48" x2="120" y2="48" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

      {/* Ears */}
      <polygon points="98,62 86,40 108,52" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="99,58 90,44 105,52" fill="#FFAAA6" />
      <polygon points="126,62 138,40 116,52" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="125,58 134,44 119,52" fill="#FFAAA6" />

      {/* Cat Head */}
      <ellipse cx="112" cy="74" rx="26" ry="22" fill="#FFF9F5" stroke="#3D3130" strokeWidth="2.5" />
      <path d="M106 52 C110 54, 132 56, 130 68 C128 74, 118 74, 114 66 Z" fill="#FDBA74" />

      {/* Sparkly Star Eyes */}
      <ellipse cx="102" cy="72" rx="4" ry="4.5" fill="#2E2424" />
      <circle cx="100.5" cy="70.5" r="1.5" fill="#FFFFFF" />
      <ellipse cx="122" cy="72" rx="4" ry="4.5" fill="#2E2424" />
      <circle cx="120.5" cy="70.5" r="1.5" fill="#FFFFFF" />

      {/* Big Rosy Cheeks */}
      <ellipse cx="94" cy="78" rx="5" ry="3" fill="#FDA4AF" opacity="0.9" />
      <ellipse cx="130" cy="78" rx="5" ry="3" fill="#FDA4AF" opacity="0.9" />

      {/* Happy Open Mouth */}
      <polygon points="112,77 110,75 114,75" fill="#F43F5E" />
      <path d="M108 79 Q112 84 116 79" stroke="#3D3130" strokeWidth="2" strokeLinecap="round" fill="#FF8DA1" />

      {/* Body */}
      <ellipse cx="112" cy="115" rx="22" ry="28" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2.5" />

      {/* Paws on cake table */}
      <ellipse cx="88" cy="118" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
      <ellipse cx="136" cy="118" rx="7" ry="5" fill="#FFF5F5" stroke="#3D3130" strokeWidth="2" />
    </g>

    {/* Floating Balloon */}
    <g>
      <ellipse cx="20" cy="40" rx="14" ry="17" fill="#F472B6" stroke="#DB2777" strokeWidth="1.5" />
      <polygon points="20,57 18,60 22,60" fill="#DB2777" />
      <path d="M20 60 Q24 75 18 90" stroke="#F472B6" strokeWidth="1.2" fill="none" />
    </g>
  </svg>
);

// Walking Paw Trail: Animated paw prints that appear to walk across screen
export const WalkingPawTrail: React.FC<{
  className?: string;
  count?: number;
  label?: string;
}> = ({ className = 'my-8', count = 5, label }) => (
  <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
    {label && (
      <span className="text-[11px] uppercase tracking-widest text-rose-400/80 font-medium flex items-center gap-1.5">
        <span>🐾</span>
        <span>{label}</span>
      </span>
    )}
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse text-rose-400/60 hover:text-rose-400 transition-colors"
          style={{
            animationDelay: `${i * 240}ms`,
            transform: `rotate(${i % 2 === 0 ? '-14deg' : '14deg'}) translateY(${i % 2 === 0 ? '-2px' : '2px'})`,
          }}
        >
          <PawIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      ))}
    </div>
  </div>
);

// Reusable Interactive Cat-Paw Button
export const CatPawButton: React.FC<{
  id?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  icon?: React.ReactNode;
}> = ({
  id,
  onClick,
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer select-none active:scale-95';

  const variants = {
    primary:
      'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_40px_rgba(244,63,94,0.65)] hover:scale-105 border border-rose-300/40',
    secondary:
      'bg-white/90 hover:bg-white text-rose-900 shadow-md hover:shadow-lg hover:scale-105 border border-rose-200/80',
    dark:
      'bg-[#181922] hover:bg-[#232430] text-rose-200 border border-white/10 hover:border-rose-400/30 shadow-lg hover:scale-105',
  };

  return (
    <button
      id={id}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon ? icon : <PawIcon className="w-4 h-4 text-rose-200 group-hover:rotate-12 transition-transform duration-200" />}
      <span>{children}</span>
    </button>
  );
};

// Decorative Paw Print Corner Accent
export const CatPawCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = 'w-4 h-4', position = 'top-right' }) => {
  const rot = {
    'top-left': '-rotate-45 -top-2 -left-2',
    'top-right': 'rotate-45 -top-2 -right-2',
    'bottom-left': '-rotate-135 -bottom-2 -left-2',
    'bottom-right': 'rotate-135 -bottom-2 -right-2',
  };
  return (
    <div className={`absolute pointer-events-none text-rose-400/60 ${rot[position]} ${className}`}>
      <PawIcon className="w-full h-full" />
    </div>
  );
};

// =========================================================================
// ULTRA CHUBBY "PUFF CATS" (Marshmallow Fluffballs for Childish Theme)
// =========================================================================

// Round marshmallow puff cat with squishy cheeks & sparkling eyes
export const PuffCat: React.FC<{ className?: string; mood?: 'happy' | 'winking' | 'sleepy' | 'love' }> = ({
  className = 'w-24 h-24',
  mood = 'happy',
}) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate-puff-wobble`}>
    {/* Fluffy tail */}
    <ellipse cx="102" cy="72" rx="14" ry="10" transform="rotate(25 102 72)" fill="#FFE4E9" stroke="#FF758F" strokeWidth="2.5" />

    {/* Chubby round puff body / head (marshmallow) */}
    <ellipse cx="60" cy="62" rx="46" ry="40" fill="#FFFDFD" stroke="#FF85A1" strokeWidth="3.5" />

    {/* Fluffy cheek puffs */}
    <circle cx="20" cy="68" r="12" fill="#FFF8FA" />
    <circle cx="100" cy="68" r="12" fill="#FFF8FA" />

    {/* Soft pink marshmallow ears */}
    <path d="M28 35 C20 15, 38 12, 44 26" fill="#FFF0F5" stroke="#FF85A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="31,31 27,21 38,25" fill="#FFAEC0" />

    <path d="M92 35 C100 15, 82 12, 76 26" fill="#FFF0F5" stroke="#FF85A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="89,31 93,21 82,25" fill="#FFAEC0" />

    {/* Pastel Calico Spots */}
    <ellipse cx="40" cy="30" rx="9" ry="6" fill="#FFCDB2" opacity="0.9" />

    {/* Eyes based on mood */}
    {mood === 'happy' && (
      <>
        {/* Big sparkling kawaii eyes */}
        <ellipse cx="44" cy="56" rx="6.5" ry="7.5" fill="#2E2424" />
        <circle cx="42" cy="53" r="2.8" fill="#FFFFFF" />
        <circle cx="46.5" cy="58.5" r="1.4" fill="#FFFFFF" />

        <ellipse cx="76" cy="56" rx="6.5" ry="7.5" fill="#2E2424" />
        <circle cx="74" cy="53" r="2.8" fill="#FFFFFF" />
        <circle cx="78.5" cy="58.5" r="1.4" fill="#FFFFFF" />
      </>
    )}

    {mood === 'winking' && (
      <>
        <ellipse cx="44" cy="56" rx="6.5" ry="7.5" fill="#2E2424" />
        <circle cx="42" cy="53" r="2.8" fill="#FFFFFF" />
        <circle cx="46.5" cy="58.5" r="1.4" fill="#FFFFFF" />
        <path d="M70 56 Q76 50 82 56" stroke="#2E2424" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </>
    )}

    {mood === 'love' && (
      <>
        <path d="M38 52 C38 48, 48 48, 48 56 C48 62, 38 66, 38 66 C38 66, 28 62, 28 56 C28 48, 38 48, 38 52 Z" fill="#FF4D6D" />
        <path d="M82 52 C82 48, 92 48, 92 56 C92 62, 82 66, 82 66 C82 66, 72 62, 72 56 C72 48, 82 48, 82 52 Z" fill="#FF4D6D" />
      </>
    )}

    {mood === 'sleepy' && (
      <>
        <path d="M38 56 Q44 61 50 56" stroke="#2E2424" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M70 56 Q76 61 82 56" stroke="#2E2424" strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    )}

    {/* Bright pink blushing cheeks */}
    <ellipse cx="32" cy="65" rx="7" ry="4" fill="#FF758F" opacity="0.65" />
    <ellipse cx="88" cy="65" rx="7" ry="4" fill="#FF758F" opacity="0.65" />

    {/* Tiny cute nose and cat smile */}
    <polygon points="60,60 57,57 63,57" fill="#FF4D6D" />
    <path d="M54 62 Q60 67 60 62 Q60 67 66 62" stroke="#2E2424" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Tiny squishy front paws */}
    <ellipse cx="48" cy="88" rx="8" ry="6" fill="#FFFDFD" stroke="#FF85A1" strokeWidth="2.5" />
    <ellipse cx="72" cy="88" rx="8" ry="6" fill="#FFFDFD" stroke="#FF85A1" strokeWidth="2.5" />
  </svg>
);

// Chubby Puff Cat with Party Cone Hat & Star Wand
export const PuffCatParty: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate-float-bob`}>
    {/* Confetti pieces around puff cat */}
    <circle cx="20" cy="30" r="3.5" fill="#FFB703" />
    <circle cx="110" cy="40" r="3" fill="#8ECAE6" />
    <circle cx="18" cy="85" r="3" fill="#FF006E" />
    <circle cx="115" cy="80" r="3.5" fill="#FB5607" />

    {/* Fluffy tail */}
    <ellipse cx="106" cy="78" rx="14" ry="10" transform="rotate(30 106 78)" fill="#FFF0F5" stroke="#FF758F" strokeWidth="2.5" />

    {/* Chubby round puff body */}
    <ellipse cx="65" cy="70" rx="46" ry="40" fill="#FFF9FB" stroke="#FF85A1" strokeWidth="3.5" />

    {/* Ears */}
    <path d="M32 42 C24 22, 42 18, 48 34" fill="#FFF0F5" stroke="#FF85A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="35,38 31,28 42,32" fill="#FFAEC0" />

    <path d="M98 42 C106 22, 88 18, 82 34" fill="#FFF0F5" stroke="#FF85A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="95,38 99,28 88,32" fill="#FFAEC0" />

    {/* Colorful Party Hat on top */}
    <polygon points="65,8 50,42 80,42" fill="#FFBE0B" stroke="#FF006E" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="65,8 55,42 75,42" fill="#FB5607" />
    <circle cx="65" cy="8" r="4.5" fill="#FF006E" />
    {/* Hat polka dots */}
    <circle cx="60" cy="30" r="2.5" fill="#8338EC" />
    <circle cx="70" cy="26" r="2.2" fill="#3A86FF" />

    {/* Sparkling round kawaii eyes */}
    <ellipse cx="49" cy="65" rx="7" ry="8" fill="#2E2424" />
    <circle cx="46.5" cy="62" r="3" fill="#FFFFFF" />
    <circle cx="51.5" cy="68" r="1.5" fill="#FFFFFF" />

    <ellipse cx="81" cy="65" rx="7" ry="8" fill="#2E2424" />
    <circle cx="78.5" cy="62" r="3" fill="#FFFFFF" />
    <circle cx="83.5" cy="68" r="1.5" fill="#FFFFFF" />

    {/* Big rosy cheeks */}
    <ellipse cx="36" cy="74" rx="7.5" ry="4.5" fill="#FF758F" opacity="0.75" />
    <ellipse cx="94" cy="74" rx="7.5" ry="4.5" fill="#FF758F" opacity="0.75" />

    {/* Cute smiling mouth */}
    <polygon points="65,69 62,66 68,66" fill="#FF4D6D" />
    <path d="M58 72 Q65 78 65 72 Q65 78 72 72" stroke="#2E2424" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Tiny front paws holding little cupcake */}
    <ellipse cx="52" cy="95" rx="8" ry="6" fill="#FFFDFD" stroke="#FF85A1" strokeWidth="2.5" />
    <ellipse cx="78" cy="95" rx="8" ry="6" fill="#FFFDFD" stroke="#FF85A1" strokeWidth="2.5" />

    {/* Mini strawberry cupcake in paws */}
    <rect x="58" y="88" width="14" height="10" rx="3" fill="#FFE5D9" stroke="#FF85A1" strokeWidth="1.5" />
    <path d="M56 88 Q65 82 74 88" fill="#FF758F" stroke="#FF4D6D" strokeWidth="1.5" />
    <circle cx="65" cy="83" r="2.5" fill="#FF006E" />
  </svg>
);



