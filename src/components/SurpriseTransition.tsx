import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PawIcon, PuffCat } from './CatAssets';
import catGiftBoxImg from '../assets/images/cat_gift_box_1788584262875.jpg';

interface SurpriseTransitionProps {
  onRevealSurprise: () => void;
  isRevealed: boolean;
}

export const SurpriseTransition: React.FC<SurpriseTransitionProps> = ({
  onRevealSurprise,
  isRevealed,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpen = () => {
    // Grand Confetti Explosion!
    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8', '#34d399'],
      zIndex: 100,
    });

    // Custom peach-heart firework particles
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const particleCount = 50;
      // Since confetti uses shapes, we can just use colorful peach/pink circles for now
      confetti(Object.assign({}, defaults, { 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffb3ba', '#ffdfba', '#ffb6b9', '#fae3d9', '#ff8b94'] // Peach and light pinks
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffb3ba', '#ffdfba', '#ffb6b9', '#fae3d9', '#ff8b94']
      }));
    }, 250);

    setTimeout(() => {
      clearInterval(interval);
    }, 1500);

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 150,
        origin: { y: 0.5 },
        colors: ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8', '#34d399'],
        zIndex: 100,
      });
    }, 350);

    setIsTransitioning(true);
    // Playful pastel sparkle transition
    setTimeout(() => {
      onRevealSurprise();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 900);
  };

  return (
    <section id="surprise-transition-section" className="relative py-20 px-4 text-center overflow-hidden">
      {/* Floating Paws & Stickers in Background */}
      <div className="absolute top-10 left-8 text-pink-400/30 pointer-events-none text-4xl">
        🎁
      </div>
      <div className="absolute top-12 right-12 text-yellow-400/40 pointer-events-none text-4xl">
        ⭐
      </div>

      {/* Playful Pink Pop Overlay during reveal transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#FFF0F5]/95 backdrop-blur-md flex flex-col items-center justify-center text-pink-600"
          >
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="p-4 bg-white rounded-full border-4 border-pink-400 shadow-xl"
            >
              <PuffCat mood="happy" className="w-20 h-20" />
            </motion.div>
            <p className="mt-5 text-xl font-bubbly font-bold text-pink-600">
              Unwrapping your special puff surprise… 🎀✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Cat Popping out of Pink Gift Box Illustration with cute frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 rounded-[36px] overflow-hidden shadow-[0_12px_0_0_#fbcfe8,0_20px_40px_rgba(244,114,182,0.2)] border-4 border-pink-300"
        >
          <img
            src={catGiftBoxImg}
            alt="Adorable kitten in a pink gift box"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bubbly text-4xl sm:text-5xl text-pink-600 font-bold mb-1"
        >
          Wait a second… 👀🐱
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bubbly text-2xl sm:text-3xl text-pink-500 font-bold mb-2"
        >
          I have one super special thing for you!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-600 text-base sm:text-lg mb-8 font-body font-medium"
        >
          You thought that was everything? Think again!
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.button
            id="open-the-surprise-btn"
            onClick={handleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bubbly font-bold text-lg sm:text-xl shadow-[0_6px_0_0_#be185d,0_15px_30px_rgba(244,63,94,0.3)] transition-all cursor-pointer border-2 border-pink-300"
          >
            <PawIcon className="w-6 h-6 fill-white text-white group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">
              {isRevealed ? 'REPLAY SURPRISE CONFETTI! 🎉' : 'OPEN THE SURPRISE! 🎁'}
            </span>
          </motion.button>

          {isRevealed && (
            <motion.button
              onClick={() => {
                const el = document.getElementById('food-donation-reveal-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-amber-100 hover:bg-amber-200 border-2 border-amber-400 text-amber-900 font-bubbly font-bold text-base shadow-sm transition-all cursor-pointer"
            >
              <span>Watch Videos & Photos ↓</span>
            </motion.button>
          )}
        </div>

        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-800 text-sm font-bubbly font-bold shadow-xs"
          >
            <PawIcon className="w-4 h-4 fill-emerald-600" />
            <span>Surprise Highlights Unlocked Below! ↓ 🐾</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};
