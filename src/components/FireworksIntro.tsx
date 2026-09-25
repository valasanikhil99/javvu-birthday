import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Sparkles, ChevronRight, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioPlayer';
import { PawIcon, CuriousWaitingCat, ExcitedCat } from './CatAssets';

interface FireworksIntroProps {
  herName: string;
  onContinue: () => void;
}

type IntroPhase =
  | 'stars_paws'     // Tiny stars appear, paw prints fade in, small crackers pop
  | 'shhh'           // "Shhh... 👀" + small cracker animation
  | 'special_boom'   // "Something special is about to begin..." + BOOM!
  | 'sky_filled'     // Fireworks fill the sky 🎆 🎇 ✨
  | 'today_day'      // "Today isn't just another day..." -> "Because it's YOUR DAYYY! 🎂❤️"
  | 'grand_boom';    // Huge BOOOOOOM firework + CONTINUE button

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  size: number;
  isHeart?: boolean;
  isPaw?: boolean;
  gravity?: number;
  flicker?: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
  type: 'small' | 'boom' | 'heart' | 'paw' | 'grand';
}

const PEACH_PALETTE = [
  '#ff9a76', // Soft coral peach
  '#ffb088', // Warm peach
  '#ffd1ba', // Creamy peach
  '#f43f5e', // Vibrant rose coral
  '#fb7185', // Strawberry pink
  '#fde047', // Champagne golden sparkle
  '#fbcfe8', // Cotton candy
  '#ffffff', // Pure white starlight
];

export const FireworksIntro: React.FC<FireworksIntroProps> = ({
  herName,
  onContinue,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<IntroPhase>('stars_paws');
  const [subTextDay, setSubTextDay] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTapHint, setShowTapHint] = useState<boolean>(false);
  const [isContinuing, setIsContinuing] = useState<boolean>(false);

  // References for active canvas animation
  const particlesRef = useRef<FireworkParticle[]>([]);
  const rocketsRef = useRef<Rocket[]>([]);
  const starsRef = useRef<{ x: number; y: number; r: number; alpha: number; speed: number }[]>([]);
  const animFrameRef = useRef<number>(0);
  const isMutedRef = useRef<boolean>(isMuted);
  isMutedRef.current = isMuted;

  // Sound triggers with mute check
  const playPop = () => {
    if (!isMutedRef.current) audioEngine.playCrackerPop();
  };

  const playBoom = (big = false) => {
    if (!isMutedRef.current) audioEngine.playFireworkBoom(big);
  };

  // Helper: trigger a firework explosion at (x, y)
  const createExplosion = (
    x: number,
    y: number,
    colorType: 'peach' | 'multi' | 'gold' | 'heart' | 'paw' | 'grand' = 'peach',
    particleCount = 55
  ) => {
    const list: FireworkParticle[] = [];

    if (colorType === 'heart') {
      // Parametric heart formula
      const count = 48;
      const baseColor = Math.random() > 0.5 ? '#f43f5e' : '#ff9a76';
      for (let i = 0; i < count; i++) {
        const t = (Math.PI * 2 * i) / count;
        // Heart curve
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        const speed = 0.16 + Math.random() * 0.04;
        list.push({
          x,
          y,
          vx: hx * speed,
          vy: hy * speed,
          color: baseColor,
          alpha: 1,
          decay: 0.016 + Math.random() * 0.008,
          size: 3 + Math.random() * 2,
          isHeart: true,
          gravity: 0.04,
        });
      }
    } else if (colorType === 'paw') {
      // Paw shape burst: 1 central cluster + 4 toe clusters
      const pawPadCount = 28;
      for (let i = 0; i < pawPadCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.2 + 0.5;
        list.push({
          x,
          y: y + 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: '#ffb088',
          alpha: 1,
          decay: 0.018,
          size: 3.5,
          isPaw: true,
          gravity: 0.03,
        });
      }
      // 4 toes offsets
      const toes = [
        { dx: -14, dy: -12 },
        { dx: -5, dy: -18 },
        { dx: 5, dy: -18 },
        { dx: 14, dy: -12 },
      ];
      toes.forEach((toe) => {
        for (let j = 0; j < 8; j++) {
          const a = Math.random() * Math.PI * 2;
          const s = Math.random() * 1.1;
          list.push({
            x: x + toe.dx,
            y: y + toe.dy,
            vx: Math.cos(a) * s,
            vy: Math.sin(a) * s,
            color: '#ffd1ba',
            alpha: 1,
            decay: 0.02,
            size: 2.8,
            gravity: 0.03,
          });
        }
      });
    } else {
      // Classic spherical burst with optional sparkling tails and peach glows
      const count = colorType === 'grand' ? 140 : particleCount;
      const isGrand = colorType === 'grand';

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isGrand ? Math.random() * 7 + 1.5 : Math.random() * 4.5 + 0.8;
        const color = PEACH_PALETTE[Math.floor(Math.random() * PEACH_PALETTE.length)];
        const isSparksHeart = Math.random() < 0.15;

        list.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: isGrand ? 0.012 + Math.random() * 0.008 : 0.018 + Math.random() * 0.012,
          size: isGrand ? Math.random() * 3.5 + 2 : Math.random() * 2.8 + 1.5,
          isHeart: isSparksHeart,
          gravity: 0.05,
          flicker: Math.random() > 0.4,
        });
      }
    }

    particlesRef.current.push(...list);
  };

  // Launch a rocket towards a coordinate
  const launchRocket = (
    startX: number,
    targetY: number,
    type: Rocket['type'] = 'boom',
    color = '#ff9a76'
  ) => {
    rocketsRef.current.push({
      x: startX,
      y: window.innerHeight + 10,
      targetY,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -(Math.random() * 3 + 8),
      color,
      trail: [],
      type,
    });
  };

  // Setup Stars on mount
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starCount = Math.min(100, Math.floor((width * height) / 8000));
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
      });
    }
    starsRef.current = stars;
  }, []);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Cinematic dark sky with subtle motion blur trail
      ctx.fillStyle = 'rgba(14, 7, 16, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Twinkling Stars
      starsRef.current.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 235, 240, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.fill();
      });

      // 2. Update and Draw Rockets
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.x += r.vx;
        r.y += r.vy;

        // Add trail
        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 6) r.trail.shift();

        // Draw trail
        r.trail.forEach((t) => {
          t.alpha *= 0.85;
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 180, 140, ${t.alpha})`;
          ctx.fill();
        });

        // Draw rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        // Check if reached destination
        if (r.y <= r.targetY || r.vy >= 0) {
          if (r.type === 'small') {
            createExplosion(r.x, r.y, 'peach', 24);
            playPop();
          } else if (r.type === 'heart') {
            createExplosion(r.x, r.y, 'heart', 32);
            playBoom(false);
          } else if (r.type === 'paw') {
            createExplosion(r.x, r.y, 'paw', 32);
            playPop();
          } else if (r.type === 'grand') {
            createExplosion(r.x, r.y, 'grand', 80);
            playBoom(true);
          } else {
            createExplosion(r.x, r.y, 'multi', 42);
            playBoom(false);
          }
          rocketsRef.current.splice(i, 1);
        }
      }

      // 3. Update and Draw Particles
      ctx.save();
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity || 0.05;
        p.vx *= 0.985;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.alpha);

        if (p.isHeart) {
          // Draw tiny heart particle
          ctx.fillStyle = p.color;
          const s = p.size;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y + s / 4);
          ctx.quadraticCurveTo(p.x, p.y, p.x + s / 4, p.y);
          ctx.quadraticCurveTo(p.x + s / 2, p.y, p.x + s / 2, p.y + s / 4);
          ctx.quadraticCurveTo(p.x + s / 2, p.y, p.x + (s * 3) / 4, p.y);
          ctx.quadraticCurveTo(p.x + s, p.y, p.x + s, p.y + s / 4);
          ctx.quadraticCurveTo(p.x + s, p.y + s / 2, p.x + (s * 3) / 4, p.y + (s * 3) / 4);
          ctx.lineTo(p.x + s / 2, p.y + s);
          ctx.lineTo(p.x + s / 4, p.y + (s * 3) / 4);
          ctx.quadraticCurveTo(p.x, p.y + s / 2, p.x, p.y + s / 4);
          ctx.fill();
        } else {
          // Soft circular sparkle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Directed Timeline Choreography
  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    // Phase 1: stars_paws (0s)
    // Small crackers/fireworks start popping gently at 1.0s and 1.8s
    timers.push(
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.35, h * 0.45, 'small', '#ffb088');
      }, 1000)
    );

    timers.push(
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.65, h * 0.4, 'small', '#ffd1ba');
      }, 1800)
    );

    // Phase 2: "Shhh… 👀" (2.8s)
    timers.push(
      setTimeout(() => {
        setPhase('shhh');
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.5, h * 0.5, 'paw', '#ff9a76');
      }, 2800)
    );

    // Extra crackle during "Shhh..."
    timers.push(
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.45, h * 0.35, 'small', '#fb7185');
        launchRocket(w * 0.55, h * 0.38, 'small', '#fde047');
      }, 4200)
    );

    // Phase 3: "Something special is about to begin…" + BOOM! (5.5s)
    timers.push(
      setTimeout(() => {
        setPhase('special_boom');
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Big rocket whooshes up
        launchRocket(w * 0.5, h * 0.32, 'boom', '#ff6f61');
      }, 5500)
    );

    // Secondary companion burst
    timers.push(
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.32, h * 0.4, 'heart', '#f43f5e');
        launchRocket(w * 0.68, h * 0.42, 'boom', '#ffb088');
      }, 6800)
    );

    // Phase 4: Sky fills with fireworks 🎆 🎇 ✨ 🎆 💥 (8.0s)
    timers.push(
      setTimeout(() => {
        setPhase('sky_filled');
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Salvo of fireworks popping in rhythm across the sky
        const offsets = [
          { x: 0.25, y: 0.28, type: 'boom' as const },
          { x: 0.75, y: 0.3, type: 'heart' as const },
          { x: 0.5, y: 0.22, type: 'paw' as const },
          { x: 0.35, y: 0.45, type: 'boom' as const },
          { x: 0.65, y: 0.42, type: 'boom' as const },
        ];
        offsets.forEach((o, idx) => {
          timers.push(
            setTimeout(() => {
              launchRocket(w * o.x, h * o.y, o.type, PEACH_PALETTE[idx % PEACH_PALETTE.length]);
            }, idx * 450)
          );
        });
      }, 8000)
    );

    // Phase 5: "Today isn't just another day…" (11.0s)
    timers.push(
      setTimeout(() => {
        setPhase('today_day');
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Gentle background sparkling rockets
        launchRocket(w * 0.2, h * 0.35, 'small', '#ffd1ba');
        launchRocket(w * 0.8, h * 0.38, 'heart', '#f43f5e');
      }, 11000)
    );

    // Pause, then: "Because it's YOUR DAYYY! 🎂❤️" (13.2s)
    timers.push(
      setTimeout(() => {
        setSubTextDay(true);
        const w = window.innerWidth;
        const h = window.innerHeight;
        launchRocket(w * 0.38, h * 0.28, 'boom', '#ff9a76');
        launchRocket(w * 0.62, h * 0.28, 'boom', '#fde047');
      }, 13200)
    );

    // Phase 6: Grand Finale BOOOOOOM (15.5s)
    timers.push(
      setTimeout(() => {
        setPhase('grand_boom');
        setShowTapHint(true);
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Grand center rocket
        launchRocket(w * 0.5, h * 0.28, 'grand', '#ff6f61');

        // Confetti shower
        confetti({
          particleCount: 85,
          spread: 100,
          origin: { y: 0.35 },
          colors: ['#ff9a76', '#ffb088', '#f43f5e', '#ffd1ba', '#fde047', '#ffffff'],
        });
      }, 15500)
    );

    // Auto-advance to Step 2 ("Before we begin… 🐾") after grand fireworks finale (19.5s)
    timers.push(
      setTimeout(() => {
        if (!isContinuing) {
          onContinue();
        }
      }, 19500)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Allow user to tap anywhere on screen to spawn an extra firework!
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If clicking on a button or control, ignore
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    createExplosion(e.clientX, e.clientY, 'peach', 45);
    playPop();
  };

  const handleContinue = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isContinuing) return;
    setIsContinuing(true);
    setTimeout(() => {
      onContinue();
    }, 150);
  };

  return (
    <motion.div
      id="fireworks-intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onClick={handleScreenClick}
      className="fixed inset-0 z-50 overflow-hidden select-none bg-gradient-to-b from-[#0a040b] via-[#160814] to-[#0f050d] text-white flex flex-col justify-between"
    >
      {/* Background Interactive Fireworks Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Top Header: Mute Audio Control & Skip Option */}
      <div className="relative z-20 flex items-center justify-between p-4 sm:p-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-pink-300/20 text-pink-200 text-xs font-bubbly transition-all cursor-pointer shadow-sm"
          title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-pink-300" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
              <span>Sound On 🎶</span>
            </>
          )}
        </button>

        {/* Skip button with high visibility on mobile */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onContinue();
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 backdrop-blur-md border border-pink-300/50 text-white text-xs sm:text-sm font-bubbly font-bold transition-all cursor-pointer shadow-md"
        >
          <span>Skip Intro ⏭️</span>
        </button>
      </div>

      {/* Center Cinematic Storytelling Stage */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {/* Phase 1: Subtle Paw Trail & Stars Notice */}
          {phase === 'stars_paws' && (
            <motion.div
              key="phase-stars"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.9 }}
              className="space-y-4"
            >
              <div className="flex justify-center gap-3 text-pink-300/70">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <PawIcon className="w-5 h-5 text-peach-300" fill="#ffb088" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                >
                  <PawIcon className="w-5 h-5 text-peach-300" fill="#ff9a76" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                >
                  <PawIcon className="w-5 h-5 text-peach-300" fill="#ffd1ba" />
                </motion.div>
              </div>
              <p className="font-bubbly text-xs sm:text-sm text-pink-200/60 tracking-widest uppercase">
                A magical night in Peachy Paws… ✨🐾
              </p>
            </motion.div>
          )}

          {/* Phase 2: “Shhh… 👀” with small cracker animation */}
          {phase === 'shhh' && (
            <motion.div
              key="phase-shhh"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative">
                <CuriousWaitingCat className="w-20 h-20 filter drop-shadow-[0_4px_16px_rgba(255,154,118,0.35)]" />
                <motion.span
                  animate={{ scale: [1, 1.3, 1], rotate: [-8, 8, -8] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute -top-2 -right-3 text-2xl"
                >
                  🎇
                </motion.span>
              </div>
              <h2 className="font-bubbly text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-amber-200 drop-shadow-[0_2px_12px_rgba(255,180,180,0.4)]">
                Shhh… 👀
              </h2>
              <p className="font-body text-pink-200/75 text-sm sm:text-base font-medium">
                Listen closely… 🐾
              </p>
            </motion.div>
          )}

          {/* Phase 3: “Something special is about to begin…” */}
          {phase === 'special_boom' && (
            <motion.div
              key="phase-special"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-1"
              >
                ✨
              </motion.div>
              <h2 className="font-bubbly text-2xl sm:text-3xl md:text-4xl font-bold text-pink-100 max-w-md leading-snug drop-shadow-md">
                Something special is about to begin…
              </h2>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-bubbly font-semibold"
              >
                <span>Look up at the sky!</span>
                <span>🎆</span>
              </motion.span>
            </motion.div>
          )}

          {/* Phase 4: Screen Fills with Fireworks: 🎆 🎇 ✨ 🎆 💥 🎇 */}
          {phase === 'sky_filled' && (
            <motion.div
              key="phase-sky"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="flex items-center gap-2 text-2xl sm:text-3xl"
              >
                <span>🎆</span>
                <span>🎇</span>
                <span>✨</span>
                <span>🎆</span>
                <span>💥</span>
                <span>🎇</span>
              </motion.div>
              <h2 className="font-bubbly text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-rose-300 drop-shadow-md">
                The sky is lighting up!
              </h2>
              <p className="font-body text-xs sm:text-sm text-pink-200/80">
                Peachy sparks & glowing paw prints dancing in the air ✨🐾
              </p>
            </motion.div>
          )}

          {/* Phase 5: “Today isn't just another day…” -> “Because it's YOUR DAYYY! 🎂❤️” */}
          {phase === 'today_day' && (
            <motion.div
              key="phase-today"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-bubbly text-base sm:text-lg text-pink-300/90 font-medium tracking-wide">
                Today isn't just another day…
              </span>

              {subTextDay && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-2 mt-1"
                >
                  <h1 className="font-bubbly text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 drop-shadow-[0_2px_16px_rgba(255,150,150,0.5)]">
                    Because it's YOUR DAYYY! 🎂❤️
                  </h1>
                  <p className="font-body text-sm sm:text-base text-pink-100/90 font-medium">
                    Celebrating {herName} ✨
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Phase 6: Grand Finale BOOOOOOM + CONTINUE 🐾 */}
          {phase === 'grand_boom' && (
            <motion.div
              key="phase-grand-boom"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: [0.7, 1.25, 1] }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-3 text-4xl sm:text-5xl">
                <span>🎆</span>
                <span className="font-bubbly font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-rose-400 drop-shadow-[0_0_24px_rgba(255,180,180,0.8)]">
                  BOOOOOOM
                </span>
                <span>🎆</span>
              </div>
              <p className="font-bubbly text-base sm:text-lg text-pink-200/90 font-bold tracking-wide mt-1">
                The sweetest birthday sparkle for {herName}! 🐱✨
              </p>

              {/* Prominent, glowing Continue button */}
              <motion.button
                onClick={handleContinue}
                disabled={isContinuing}
                whileHover={isContinuing ? {} : { scale: 1.05 }}
                whileTap={isContinuing ? {} : { scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(255,154,118,0.4)',
                    '0 0 30px rgba(244,63,94,0.7)',
                    '0 0 15px rgba(255,154,118,0.4)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="mt-3 group px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-bubbly font-bold text-base sm:text-lg flex items-center gap-3 cursor-pointer border border-white/30 transition-all active:brightness-95"
              >
                <PawIcon className="w-5 h-5 text-pink-100 group-hover:rotate-12 transition-transform" />
                <span>CONTINUE 🐾</span>
                <ChevronRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Footer: Floating Paw Trail & Tap Anywhere Hint */}
      <div className="relative z-20 pb-6 px-4 text-center">
        <p className="font-body text-[11px] sm:text-xs text-pink-200/50 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-300/70" />
          <span>Tap anywhere on the sky to pop custom fireworks! 🐾</span>
          <Sparkles className="w-3 h-3 text-amber-300/70" />
        </p>
      </div>
    </motion.div>
  );
};
