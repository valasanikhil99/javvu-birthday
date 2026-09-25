import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawIcon } from './CatAssets';
import { Heart, Star } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'paw' | 'heart' | 'star';
  color: string;
  angle: number;
  speed: number;
}

export const InteractiveCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef<number>(0);
  const lastSpawnTime = useRef<number>(0);

  const colors = ['#f472b6', '#fb7185', '#fde047', '#34d399', '#60a5fa'];

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const timers = new Set<ReturnType<typeof setTimeout>>();

    // Desktop hover sparkles (throttled to 100ms for efficiency)
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;

      const now = Date.now();
      if (now - lastSpawnTime.current > 100) {
        lastSpawnTime.current = now;
        if (Math.random() > 0.5) {
          const type = Math.random() > 0.8 ? 'heart' : 'paw';
          const color = colors[Math.floor(Math.random() * colors.length)];
          const id = particleIdCounter.current++;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 0.8 + 0.5;

          setParticles((prev) => [
            ...prev.slice(-6),
            { id, x: e.clientX, y: e.clientY, type, color, angle, speed },
          ]);

          const tid = setTimeout(() => {
            setParticles((prev) => prev.filter((p) => p.id !== id));
            timers.delete(tid);
          }, 650);
          timers.add(tid);
        }
      }
    };

    // Lightweight tap feedback: 2 particles max per tap, batched in single state update
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('button, input, textarea, a, select')) return;

      const now = Date.now();
      if (now - lastSpawnTime.current < 160) return;
      lastSpawnTime.current = now;

      const count = isTouchDevice ? 2 : 3;
      const newItems: Particle[] = [];
      const newIds: number[] = [];

      for (let i = 0; i < count; i++) {
        const id = particleIdCounter.current++;
        const type = i % 2 === 0 ? 'heart' : 'paw';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 1.5 + 1.0;
        newItems.push({ id, x: e.clientX, y: e.clientY, type, color, angle, speed });
        newIds.push(id);
      }

      setParticles((prev) => [...prev.slice(-6), ...newItems]);

      const tid = setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newIds.includes(p.id)));
        timers.delete(tid);
      }, 700);
      timers.add(tid);
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
    };
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.9, scale: 0.4, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 0.8,
              x: p.x + Math.cos(p.angle) * p.speed * 12,
              y: p.y + Math.sin(p.angle) * p.speed * 12 - 10,
            }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="absolute will-change-transform"
            style={{
              color: p.color,
              marginLeft: '-8px',
              marginTop: '-8px',
            }}
          >
            {p.type === 'paw' && <PawIcon className="w-4 h-4" />}
            {p.type === 'heart' && <Heart className="w-4 h-4 fill-current" />}
            {p.type === 'star' && <Star className="w-4 h-4 fill-current" />}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
