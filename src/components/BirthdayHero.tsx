import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, PartyPopper, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PawIcon, WalkingPawTrail, PuffCatParty } from './CatAssets';
import puffyBirthdayCatImg from '../assets/images/puffy_birthday_cat_1788588892297.jpg';
import javvuBirthdayHeroImg from '../assets/images/javvu_birthday_hero.jpg';

interface BirthdayHeroProps {
  herName: string;
  birthdayDateString: string;
  forceBirthdayToday?: boolean;
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({
  herName,
  birthdayDateString,
  forceBirthdayToday = false,
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isBirthdayToday: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthdayToday: false,
  });

  const [previewTodayMode, setPreviewTodayMode] = useState(forceBirthdayToday);

  useEffect(() => {
    const targetDate = new Date(birthdayDateString).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      // Check if today is the exact birthday (same month & day) or if countdown reached 0
      const currentDate = new Date();
      const bdayDate = new Date(birthdayDateString);
      const isSameDate =
        currentDate.getMonth() === bdayDate.getMonth() &&
        currentDate.getDate() === bdayDate.getDate();

      if (diff <= 0 || isSameDate || previewTodayMode) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isBirthdayToday: true,
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isBirthdayToday: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [birthdayDateString, previewTodayMode]);

  const triggerHeroCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#fda4af', '#f43f5e', '#fbbf24', '#f472b6', '#38bdf8'],
    });
  };

  return (
    <section
      id="birthday-hero-section"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFFDF7] to-[#FFF0F5] text-zinc-800"
    >
      {/* Background atmospheric gradient lights & playful sprinkles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-pink-300/30 blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[24rem] h-[24rem] rounded-full bg-amber-200/30 blur-[130px] pointer-events-none" />

      {/* Floating background paw prints & balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-8 text-pink-400/30 text-3xl animate-bounce">
          🎈
        </div>
        <div className="absolute top-16 right-12 text-yellow-400/40 text-3xl">
          ⭐
        </div>
        <div className="absolute bottom-28 left-12 text-purple-400/30 text-3xl">
          🌸
        </div>
        <div className="absolute bottom-32 right-10 text-pink-400/30 text-3xl">
          🎀
        </div>
      </div>

      {/* Date Pill: 27 • 09 • 2026 */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border-2 border-pink-200 text-pink-600 text-xs sm:text-sm tracking-wider font-bubbly font-bold mb-4 shadow-[0_4px_0_0_#fbcfe8]"
      >
        <PawIcon className="w-4 h-4 text-pink-500" />
        <span>27 • 09 • 2026 🐾 SPECIAL DAY</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
      </motion.div>

      {/* Main Birthday Greeting in bubbly typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-3xl"
      >
        <h1 className="font-bubbly text-4xl sm:text-6xl md:text-7xl font-bold text-pink-600 tracking-tight leading-[1.15] mb-4 drop-shadow-sm">
          Happy Birthday,{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 underline decoration-wavy decoration-pink-300">
            {herName}
          </span>!{' '}
          <span className="inline-block animate-pulse">🎂🐾</span>
        </h1>
        <p className="font-body text-zinc-600 text-base sm:text-xl font-medium mb-4">
          The puffiest, cutest birthday celebration for my favorite human! 🐱✨
        </p>
      </motion.div>

      {/* Adorable Puffy Birthday Cat Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative my-4 max-w-sm sm:max-w-md w-full px-4"
      >
        {/* Floating Balloons and Stickers around cake */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-6, 6, -6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-6 -left-2 z-20 pointer-events-none text-3xl filter drop-shadow-md"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [6, -6, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute -top-6 -right-2 z-20 pointer-events-none text-3xl filter drop-shadow-md"
        >
          🎉
        </motion.div>

        <div className="relative rounded-[32px] overflow-hidden pop-card p-3 bg-white">
          <div className="relative rounded-[24px] overflow-hidden border border-pink-100 bg-white flex items-center justify-center">
            <img
              src={javvuBirthdayHeroImg}
              alt={`Birthday celebration for ${herName}`}
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain max-h-[620px] rounded-[22px] transition-transform duration-500 hover:scale-[1.01]"
              onError={(e) => {
                if (e.currentTarget.src !== 'https://i.ibb.co/gbqsVP16/Whats-App-Image-2026-09-22-at-20-38-12.jpg') {
                  e.currentTarget.src = 'https://i.ibb.co/gbqsVP16/Whats-App-Image-2026-09-22-at-20-38-12.jpg';
                } else if (e.currentTarget.src !== 'https://i.ibb.co/Q7SsdCBX/Whats-App-Image-2026-09-22-at-20-38-12.jpg') {
                  e.currentTarget.src = 'https://i.ibb.co/Q7SsdCBX/Whats-App-Image-2026-09-22-at-20-38-12.jpg';
                } else {
                  e.currentTarget.src = puffyBirthdayCatImg;
                }
              }}
            />
          </div>
          <div className="pt-3 pb-1 flex items-center justify-center gap-2 text-pink-500 font-bubbly font-bold text-sm">
            <PawIcon className="w-4 h-4" />
            <span>The Birthday Girl & Bestie Mascot</span>
            <PawIcon className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Countdown or Celebration Display with Chunky Pop Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-4 w-full max-w-md mx-auto"
      >
        <AnimatePresence mode="wait">
          {timeLeft.isBirthdayToday ? (
            /* Celebration State on September 27 */
            <motion.div
              key="birthday-celebration-mode"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-6 rounded-[28px] pop-card bg-white border-3 border-pink-300 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-pink-100 text-pink-600 mb-2 animate-bounce">
                <PartyPopper className="w-8 h-8" />
              </div>
              <h2 className="font-bubbly text-3xl sm:text-4xl text-pink-600 font-bold mb-1">
                IT'S YOUR DAY!!! 🎂🎉
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-body font-medium">
                The entire universe (and all the puffy cats in the world) are celebrating you!
              </p>
              <button
                onClick={triggerHeroCelebration}
                className="mt-4 px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bubbly font-bold text-sm transition-all cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_0_0_#be185d]"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Pop more confetti 🐾</span>
              </button>
            </motion.div>
          ) : (
            /* Live Countdown with Chunky Candy Blocks */
            <motion.div
              key="birthday-countdown-mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 sm:p-5 rounded-[28px] pop-card bg-white border-3 border-pink-200"
            >
              <p className="font-bubbly text-sm text-pink-500 font-bold mb-3">
                🐾 TIME REMAINING UNTIL PARTY TIME 🐾
              </p>
              {/* 4 Countdown Tiles */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-2xl bg-pink-50 border-2 border-pink-200 text-center shadow-[0_3px_0_0_#fbcfe8]">
                  <span className="block font-bubbly text-2xl sm:text-3xl font-bold text-pink-600">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-500 font-bubbly font-bold">
                    Days
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center shadow-[0_3px_0_0_#fde68a]">
                  <span className="block font-bubbly text-2xl sm:text-3xl font-bold text-amber-600">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-500 font-bubbly font-bold">
                    Hours
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center shadow-[0_3px_0_0_#bae6fd]">
                  <span className="block font-bubbly text-2xl sm:text-3xl font-bold text-sky-600">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-sky-500 font-bubbly font-bold">
                    Mins
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 text-center shadow-[0_3px_0_0_#fecdd3]">
                  <span className="block font-bubbly text-2xl sm:text-3xl font-bold text-rose-600">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-rose-500 font-bubbly font-bold">
                    Secs
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subtext: My favorite person deserves more than just a birthday wish */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-body text-zinc-600 text-sm sm:text-base font-semibold max-w-xl mx-auto leading-relaxed mt-5"
      >
        My favorite person deserves the sweetest, happiest birthday ever! 💖🐾
      </motion.p>

      {/* Mini test mode preview button */}
      <div className="mt-3 mb-2">
        <button
          onClick={() => setPreviewTodayMode(!previewTodayMode)}
          className="text-xs text-pink-500 hover:text-pink-700 underline font-bubbly font-semibold cursor-pointer transition-colors"
        >
          {previewTodayMode ? 'Switch back to countdown' : 'Test "It\'s Birthday Today" view 🐾'}
        </button>
      </div>

      {/* Walking paw prints leading toward next section */}
      <WalkingPawTrail label="Follow the puffy paws to our story" count={5} className="mt-4" />
    </section>
  );
};
