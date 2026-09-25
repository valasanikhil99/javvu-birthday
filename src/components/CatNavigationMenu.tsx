import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Camera,
  Gamepad2,
  Mail,
  Gift,
  UtensilsCrossed,
  Cake,
  ChevronRight,
  X,
} from 'lucide-react';
import { PuffCat, PawIcon } from './CatAssets';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  targetId: string;
}

interface CatNavigationMenuProps {
  onReplayIntro?: () => void;
}

export const CatNavigationMenu: React.FC<CatNavigationMenuProps> = ({ onReplayIntro }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Birthday Home',
      icon: <Home className="w-4 h-4 text-pink-500" />,
      targetId: 'birthday-hero-section',
    },
    {
      id: 'story',
      label: 'Our Story',
      icon: <PawIcon className="w-4 h-4 text-rose-500" />,
      targetId: 'our-story-section',
    },
    {
      id: 'memories',
      label: 'Memory Scrapbook',
      icon: <Camera className="w-4 h-4 text-amber-500" />,
      targetId: 'memories-section',
    },
    {
      id: 'jokes',
      label: 'Inside Jokes',
      icon: <Gamepad2 className="w-4 h-4 text-emerald-500" />,
      targetId: 'inside-jokes-section',
    },
    {
      id: 'letter',
      label: 'Secret Letter',
      icon: <Mail className="w-4 h-4 text-pink-500" />,
      targetId: 'birthday-letter-section',
    },
    {
      id: 'surprise',
      label: 'Surprise Box',
      icon: <Gift className="w-4 h-4 text-amber-500" />,
      targetId: 'surprise-transition-section',
    },
    {
      id: 'donation',
      label: 'Food Donation',
      icon: <UtensilsCrossed className="w-4 h-4 text-amber-600" />,
      targetId: 'food-donation-reveal-section',
    },
    {
      id: 'celebration',
      label: 'Cake Celebration',
      icon: <Cake className="w-4 h-4 text-pink-600" />,
      targetId: 'birthday-celebration-section',
    },
  ];

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // On small screens close after tap
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <aside aria-label="Cat Navigation" className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Story navigation"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-60 rounded-[32px] bg-white border-4 border-pink-300 shadow-[0_10px_0_0_#fbcfe8,0_20px_40px_rgba(244,114,182,0.25)] p-3.5 overflow-hidden"
          >
            {/* Header with Cute Puff Cat */}
            <div className="flex items-center justify-between px-2 pt-1 pb-3 border-b-2 border-dashed border-pink-100">
              <div className="flex items-center gap-2">
                <PuffCat mood="happy" className="w-8 h-8" />
                <div>
                  <h4 className="text-sm font-bubbly font-bold text-pink-600">Meow Menu 🐾</h4>
                  <p className="text-[11px] font-body text-zinc-500 font-medium">Jump to chapter</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-pink-100 text-pink-400 hover:text-pink-600 transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="mt-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-2xl text-left text-xs font-bubbly font-bold text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-pink-300 group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {onReplayIntro && (
              <div className="mt-2.5 pt-2 border-t-2 border-dashed border-pink-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 border border-pink-200 text-pink-600 text-xs font-bubbly font-bold cursor-pointer transition-colors shadow-xs"
                >
                  <span>🎆 Replay Fireworks Intro</span>
                </button>
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button featuring Cute Puff Cat */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border-3 border-pink-300 text-pink-600 shadow-[0_4px_0_0_#fbcfe8,0_10px_20px_rgba(244,114,182,0.2)] hover:bg-pink-50 cursor-pointer backdrop-blur-md group font-bubbly font-bold"
      >
        <div className="relative">
          <PuffCat mood="happy" className="w-7 h-7 -mt-1 group-hover:rotate-6 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
        </div>
        <span className="text-xs sm:text-sm pr-1">
          {isOpen ? 'Close' : 'Menu 🐾'}
        </span>
      </motion.button>
    </aside>
  );
};
