import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';
import { audioEngine } from '../utils/audioPlayer';
import {
  PawIcon,
  CuriousWaitingCat,
  ExcitedCat,
  CryingCat,
  PeekingCatTop,
  PuffCat,
  PuffCatParty,
} from './CatAssets';
import catPeekingImg from '../assets/images/cat_peeking_opening_1788584227445.jpg';

interface OpeningExperienceProps {
  onOpen: () => void;
  herName: string;
  teaserText?: string;
  subtext?: string;
}

type QuestionStep = 'before_begin' | 'question' | 'accepted';

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({
  onOpen,
  herName,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // States for the interactive "One Little Question" gatekeeper
  const [step, setStep] = useState<QuestionStep>('before_begin');
  const [noCount, setNoCount] = useState<number>(0);
  const [isInputLocked, setIsInputLocked] = useState<boolean>(true);
  const [canEnterSurprise, setCanEnterSurprise] = useState<boolean>(false);
  const [hasDodged, setHasDodged] = useState<boolean>(false);
  const [noOffset, setNoOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dodgePoofs, setDodgePoofs] = useState<{ id: number; x: number; y: number }[]>([]);
  const lastDodgeTime = useRef<number>(0);
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  // Lock interactions briefly on initial mount so clicks from fireworks don't bleed through
  useEffect(() => {
    const lockTimer = setTimeout(() => {
      setIsInputLocked(false);
    }, 350);
    return () => clearTimeout(lockTimer);
  }, []);

  // When step becomes accepted, give 700ms cooldown before allowing enter surprise
  useEffect(() => {
    if (step === 'accepted') {
      setCanEnterSurprise(false);
      const timer = setTimeout(() => {
        setCanEnterSurprise(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Ambient Starfield Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const stars = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      drift: (Math.random() - 0.5) * 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y -= star.speed;
        star.x += star.drift;

        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 235, ${star.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Safe coordinate calculation for the runaway NO button
  const triggerDodge = (pointerX?: number, pointerY?: number) => {
    const now = Date.now();
    if (now - lastDodgeTime.current < 140) return;
    lastDodgeTime.current = now;

    if (Math.random() > 0.35) {
      audioEngine.playSqueak();
    } else {
      audioEngine.playSadWhimper();
    }

    // Capture previous position for comic "poof" particle effect
    if (noButtonRef.current) {
      const currentRect = noButtonRef.current.getBoundingClientRect();
      const poofId = Date.now();
      setDodgePoofs((prev) => [
        ...prev.slice(-3),
        { id: poofId, x: currentRect.left + currentRect.width / 2 - 25, y: currentRect.top },
      ]);
      setTimeout(() => {
        setDodgePoofs((prev) => prev.filter((p) => p.id !== poofId));
      }, 650);
    }

    setNoCount((prev) => prev + 1);
    setHasDodged(true);

    // Viewport boundaries
    const vw = window.innerWidth || 360;
    const vh = window.innerHeight || 640;
    const btnWidth = 145;
    const btnHeight = 52;
    const marginX = 20;

    const minX = marginX;
    const maxX = Math.max(minX + 15, vw - btnWidth - marginX);
    const minY = 90; // below top badge
    const maxY = Math.max(minY + 25, vh - btnHeight - 110); // above bottom cat footer

    // Find the natural in-flow baseline position of the button
    let originX = vw / 2 + 50;
    let originY = vh / 2 + 60;
    if (noButtonRef.current) {
      const rect = noButtonRef.current.getBoundingClientRect();
      originX = rect.left - noOffset.x;
      originY = rect.top - noOffset.y;
    }

    // Pick a new target coordinate that is far from the current pointer/finger
    let targetX = minX + Math.random() * (maxX - minX);
    let targetY = minY + Math.random() * (maxY - minY);

    if (pointerX !== undefined && pointerY !== undefined) {
      let attempts = 0;
      while (attempts < 20) {
        const dist = Math.hypot(targetX + btnWidth / 2 - pointerX, targetY + btnHeight / 2 - pointerY);
        if (dist > 150) break;
        targetX = minX + Math.random() * (maxX - minX);
        targetY = minY + Math.random() * (maxY - minY);
        attempts++;
      }
    }

    const nextOffsetX = targetX - originX;
    const nextOffsetY = targetY - originY;

    setNoOffset({ x: nextOffsetX, y: nextOffsetY });
  };

  // Proximity radar: if cursor or finger approaches within 85px while running, it immediately dodges!
  useEffect(() => {
    if (!hasDodged || step !== 'question') return;

    const handlePointerMove = (e: PointerEvent | TouchEvent) => {
      if (!noButtonRef.current) return;
      const clientX = 'clientX' in e ? e.clientX : (e.touches && e.touches[0]?.clientX);
      const clientY = 'clientY' in e ? e.clientY : (e.touches && e.touches[0]?.clientY);
      if (clientX === undefined || clientY === undefined) return;

      const rect = noButtonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - centerX, clientY - centerY);

      if (dist < 85) {
        triggerDodge(clientX, clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, [hasDodged, step, noOffset]);

  // Window resize handler ensures the dodging button stays within safe bounds
  useEffect(() => {
    const handleResize = () => {
      if (hasDodged) {
        setNoOffset({ x: 0, y: 0 });
        setHasDodged(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasDodged]);

  // Dynamic cheeky label for the fleeing button
  const getNoButtonText = (count: number) => {
    if (count === 0) return 'NO 🐾';
    const phrases = [
      'Wait no! 🙀',
      'Too fast! 🏃',
      "Can't catch me! 😹",
      'Nope! 💨',
      'Click YES! 💕',
      'Error 404: No 🚫',
      'Give up bestie! 💖',
      'Bro please! 😭🐾',
      'Still chasing? 😹',
    ];
    return phrases[(count - 1) % phrases.length];
  };

  // Handle "YES ❤️" click
  const handleYes = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isInputLocked) return;

    setStep('accepted');
    audioEngine.playHappyChime();

    // Burst of colorful celebratory confetti
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#fda4af', '#f43f5e', '#fbbf24', '#fbcfe8', '#ffffff', '#e11d48'],
    });
  };

  // Final Action: Enter Surprise
  const handleEnterSurprise = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!canEnterSurprise) return;

    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#fda4af', '#f43f5e', '#fbbf24', '#fbcfe8', '#ffffff'],
    });

    audioEngine.start();
    onOpen();
  };

  // Dynamic dialogue that escalates humorously
  const getEscalatingDialogues = () => {
    if (noCount === 1) {
      return {
        title: 'Think again… 🥺🐾',
        subtitle: 'Are you really sure? 😿 Look, the button is running away!',
      };
    }
    return {
      title: 'Brooo… seriously? 😭🐱',
      subtitle: "The NO button is running for its life! 🏃💨 Stop chasing it and click YES! 👉💖",
    };
  };

  return (
    <motion.div
      id="one-little-question-intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-[#FFF5F8] via-[#FFFDF7] to-[#FDF4FF] px-4 sm:px-6 text-center select-none overflow-y-auto overflow-x-hidden text-zinc-800"
    >
      {/* Floating candy sparkles and pastel balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 8, 0], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          className="absolute top-10 left-6 sm:left-14 text-pink-400/40 text-4xl"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -10, 0], rotate: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1 }}
          className="absolute top-16 right-6 sm:right-16 text-yellow-400/50 text-4xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-36 left-8 text-purple-400/40 text-3xl"
        >
          🧁
        </motion.div>
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-40 right-10 text-pink-400/40 text-3xl"
        >
          🌸
        </motion.div>
      </div>

      {/* Ambient background soft pastel glows using GPU radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.22)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating hearts generator for accepted state */}
      {step === 'accepted' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
                x: (i - 3) * 60,
                scale: 0.7,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                y: -360,
                x: (i - 3) * 70,
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.35,
                ease: 'easeOut',
              }}
              className="absolute bottom-24 left-1/2 text-pink-500/80 will-change-transform"
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Top Header Tag with Skip to Birthday option */}
      <header className="pt-4 sm:pt-8 z-20 flex items-center justify-between w-full max-w-md px-3">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border-2 border-pink-200 text-pink-600 text-xs tracking-wider uppercase font-bubbly font-bold shadow-sm"
        >
          <PawIcon className="w-3.5 h-3.5 text-pink-500" />
          <span>
            {step === 'before_begin'
              ? 'Step 1: Checkpoint 🐾'
              : step === 'question'
              ? 'Step 2: One Little Question 👀'
              : 'Access Granted! 💖'}
          </span>
        </motion.div>

        <button
          onClick={() => {
            audioEngine.start();
            onOpen();
          }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-pink-100 hover:bg-pink-200 border border-pink-300 text-pink-700 text-xs font-bubbly font-bold shadow-xs cursor-pointer active:scale-95 transition-all"
        >
          <span>Enter Story 🎂</span>
        </button>
      </header>

      {/* Main Interactive Card */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-20 w-full max-w-md py-6 my-auto">
        <AnimatePresence mode="wait">
          {/* =========================================================================
              STEP 2: "BEFORE WE BEGIN… 🐾" CHECKPOINT
             ========================================================================= */}
          {step === 'before_begin' && (
            <motion.div
              key="before-begin-box"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center pop-card p-6 sm:p-8"
            >
              {/* Cute Mascot Cat */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  rotate: [-2, 2, -2],
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="mb-3"
              >
                <PuffCat mood="happy" className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md" />
              </motion.div>

              {/* Title: “Before we begin… 🐾” */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bubbly text-3xl sm:text-4xl text-pink-600 font-bold tracking-normal mb-2 px-2"
              >
                Before we begin… 🐾
              </motion.h1>

              {/* Subtitle: “I have one little question for you, Javvvuu… 👀❤️” */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-zinc-600 text-base sm:text-lg font-body font-medium mb-3 max-w-sm leading-relaxed"
              >
                I have one little question for you, <span className="text-pink-600 font-bold">{herName}</span>… 👀❤️
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-pink-400 text-xs font-bubbly font-semibold mb-6 tracking-wide"
              >
                ✨ Think carefully before you proceed! 😼
              </motion.p>

              {/* Action Button: CONTINUE 🐾 */}
              <motion.button
                id="before-begin-continue-btn"
                onClick={() => {
                  if (isInputLocked) return;
                  audioEngine.playHappyChime();
                  confetti({
                    particleCount: 35,
                    spread: 60,
                    origin: { y: 0.6 },
                    colors: ['#fda4af', '#f43f5e', '#fbbf24', '#fbcfe8'],
                  });
                  setStep('question');
                }}
                disabled={isInputLocked}
                whileHover={isInputLocked ? {} : { scale: 1.05 }}
                whileTap={isInputLocked ? {} : { scale: 0.95 }}
                className="py-4 px-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-bubbly font-bold text-lg shadow-[0_6px_0_0_#be185d] hover:shadow-[0_8px_0_0_#be185d] transition-all cursor-pointer flex items-center justify-center gap-3 border-2 border-pink-200 z-10 disabled:opacity-60"
              >
                <PawIcon className="w-5 h-5 text-pink-100" />
                <span>CONTINUE 🐾</span>
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          )}

          {/* =========================================================================
              STEP 3: "DO YOU LOVE ME? 👀❤️" QUESTION & RUNAWAY NO BUTTON
             ========================================================================= */}
          {step === 'question' && (
            <motion.div
              key="question-box"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center pop-card p-6 sm:p-8"
            >
              {/* Cute Cat: Happy puff cat initially, or dramatic crying cat if user tries to chase NO */}
              <motion.div
                key={`cat-mood-${noCount > 0 ? 'crying' : 'happy'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-2"
              >
                {noCount === 0 ? (
                  <PuffCat mood="happy" className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-md" />
                ) : (
                  <motion.div
                    animate={{
                      x: [-3, 3, -3, 3, 0],
                      y: [-2, 2, -2, 2, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  >
                    <CryingCat dramaLevel={Math.min(noCount, 3)} className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-md" />
                  </motion.div>
                )}
              </motion.div>

              {/* Escalating humorous headline */}
              <motion.h1
                key={`dialogue-title-${noCount}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bubbly text-3xl sm:text-4xl text-rose-500 font-bold tracking-normal mb-1 px-2"
              >
                {noCount === 0 ? 'Do you love me? 👀❤️' : getEscalatingDialogues().title}
              </motion.h1>

              {/* Escalating humorous subtitle */}
              <motion.p
                key={`dialogue-sub-${noCount}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-zinc-600 text-sm sm:text-base font-body font-medium mb-6 max-w-sm leading-relaxed"
              >
                {noCount === 0
                  ? 'Choose wisely… (there is only one right answer 😼)'
                  : getEscalatingDialogues().subtitle}
              </motion.p>

              {/* BUTTON ROW */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-sm relative min-h-[64px]">
                {/* YES BUTTON - Grows bigger and pulses each time NO is chased! */}
                <motion.button
                  id="question-yes-button"
                  onClick={handleYes}
                  disabled={isInputLocked}
                  animate={{
                    scale: [
                      1 + Math.min(noCount * 0.08, 0.42),
                      1.05 + Math.min(noCount * 0.08, 0.42),
                      1 + Math.min(noCount * 0.08, 0.42),
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  whileHover={isInputLocked ? {} : { scale: 1.1 + Math.min(noCount * 0.08, 0.42) }}
                  whileTap={isInputLocked ? {} : { scale: 0.95 }}
                  className="w-full sm:flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-bubbly font-bold text-lg shadow-[0_6px_0_0_#be185d] hover:shadow-[0_8px_0_0_#be185d] transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-pink-200 z-10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Heart className="w-5 h-5 fill-current text-white animate-bounce" />
                  <span>YES ❤️</span>
                </motion.button>

                {/* NO BUTTON - RUNS AWAY CONTINUOUSLY ON TOUCH/HOVER */}
                <motion.button
                  ref={noButtonRef}
                  id="question-no-button"
                  animate={{
                    x: noOffset.x,
                    y: noOffset.y,
                    rotate: hasDodged ? [0, -7, 7, 0] : 0,
                    scale: hasDodged ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    x: { type: 'spring', stiffness: 500, damping: 25 },
                    y: { type: 'spring', stiffness: 500, damping: 25 },
                    rotate: { duration: 0.35, ease: 'easeOut' },
                  }}
                  onMouseEnter={(e) => triggerDodge(e.clientX, e.clientY)}
                  onPointerEnter={(e) => triggerDodge(e.clientX, e.clientY)}
                  onPointerDown={(e) => {
                    triggerDodge(e.clientX, e.clientY);
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (e.touches[0]) triggerDodge(e.touches[0].clientX, e.touches[0].clientY);
                  }}
                  onTouchMove={(e) => {
                    e.preventDefault();
                    if (e.touches[0]) triggerDodge(e.touches[0].clientX, e.touches[0].clientY);
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    triggerDodge(e.clientX, e.clientY);
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    zIndex: hasDodged ? 60 : 10,
                    touchAction: 'none',
                  }}
                  className={`w-full sm:w-auto py-4 px-6 rounded-full font-bubbly font-semibold text-base transition-colors cursor-pointer flex items-center justify-center gap-2 select-none border-2 ${
                    hasDodged
                      ? 'bg-white/95 text-pink-600 border-pink-300 shadow-[0_6px_0_0_#fbcfe8,0_10px_20px_rgba(244,114,182,0.3)]'
                      : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-600 shadow-[0_4px_0_0_#cbd5e1]'
                  }`}
                >
                  <PawIcon className="w-4 h-4 text-pink-500" />
                  <span className="whitespace-nowrap">{getNoButtonText(noCount)}</span>
                </motion.button>
              </div>

              {hasDodged && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-pink-500 text-xs mt-4 font-bubbly font-semibold animate-pulse"
                >
                  (The NO button is running away! Stop chasing it and press YES bestie 🥺🐾)
                </motion.p>
              )}
            </motion.div>
          )}

          {/* =========================================================================
              STATE 3: "YES" CLICKED -> HAPPY CAT & "ENTER THE SURPRISE"
             ========================================================================= */}
          {step === 'accepted' && (
            <motion.div
              key="accepted-box"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center pop-card p-6 sm:p-8"
            >
              {/* Happy Puff Cat Bouncing With Joy */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: 'easeInOut',
                }}
                className="mb-3"
              >
                <PuffCatParty className="w-36 h-36 drop-shadow-lg" />
              </motion.div>

              {/* “I KNEW ITTT! 😭❤️” */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="font-bubbly text-3xl sm:text-4xl text-pink-600 font-bold mb-1"
              >
                I KNEW ITTT! 😭❤️
              </motion.h2>

              {/* “Okay, now you can enter your birthday surprise 🎂✨” */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-zinc-600 text-base sm:text-lg font-body font-medium mb-6 max-w-sm"
              >
                Okay, now you can enter your birthday surprise 🎂✨
              </motion.p>

              {/* [ ENTER THE SURPRISE 🐾 ] BUTTON */}
              <motion.button
                id="enter-the-surprise-cta"
                onClick={handleEnterSurprise}
                disabled={!canEnterSurprise}
                whileHover={canEnterSurprise ? { scale: 1.06 } : {}}
                whileTap={canEnterSurprise ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bubbly font-bold text-lg sm:text-xl shadow-[0_8px_0_0_#be185d] hover:shadow-[0_10px_0_0_#be185d] transition-all cursor-pointer border-3 border-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <PawIcon className="w-6 h-6 text-pink-100 group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wide">ENTER THE SURPRISE 🐾</span>
                <Sparkles className="w-5 h-5 text-yellow-200 group-hover:scale-125 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Adorable Kawaii Cat Peeking from the bottom edge */}
      <footer className="relative z-10 w-full max-w-sm sm:max-w-md pointer-events-none -mb-2 overflow-hidden flex justify-center mt-auto">
        <img
          src={catPeekingImg}
          alt="Cute kawaii cat peeking with paws"
          referrerPolicy="no-referrer"
          className="w-48 sm:w-72 max-h-28 sm:max-h-48 object-contain drop-shadow-[0_-8px_30px_rgba(244,63,94,0.25)] rounded-t-3xl border-t border-rose-400/20"
        />
      </footer>

      {/* Floating comic poofs when the NO button flees */}
      {dodgePoofs.map((poof) => (
        <motion.div
          key={poof.id}
          initial={{ opacity: 1, scale: 0.7, y: 0 }}
          animate={{ opacity: 0, scale: 1.3, y: -24 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: poof.x,
            top: poof.y,
            zIndex: 65,
            pointerEvents: 'none',
          }}
          className="text-pink-500 font-bubbly font-bold text-xs bg-white/95 px-2.5 py-1 rounded-full border-2 border-pink-200 shadow-md flex items-center gap-1"
        >
          <span>💨</span>
          <span>poof!</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
