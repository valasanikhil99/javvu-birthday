import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

interface Balloon {
  id: number;
  x: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  sway: number;
}

export const FloatingBalloons: React.FC = () => {
  const colors = ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8', '#34d399', '#fbcfe8', '#fdba74'];

  // Keep a small, efficient set of 8 balloons - lightweight on mobile GPU
  const balloons: Balloon[] = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      x: 5 + i * 11 + (i % 2 === 0 ? 2 : -2), // evenly spread horizontally across 5% to 95%
      size: 26 + (i % 3) * 6, // 26px to 38px
      color: colors[i % colors.length],
      duration: 16 + (i % 4) * 3, // 16s to 25s
      delay: (i * 2.2) % 18, // staggered gracefully
      sway: (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 8), // gentle horizontal drift
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon-item"
          style={{
            left: `${balloon.x}vw`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
            // @ts-expect-error CSS custom variable
            '--balloon-sway': `${balloon.sway}px`,
            color: balloon.color,
          }}
        >
          <div className="relative flex flex-col items-center">
            <Heart
              size={balloon.size}
              className="fill-current opacity-75"
            />
            {/* Playful lightweight balloon string */}
            <svg
              width="6"
              height="24"
              className="mt-[-2px] stroke-current opacity-40"
              viewBox="0 0 6 24"
              fill="none"
            >
              <path d="M3 0 Q5 8 3 16 T3 24" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

