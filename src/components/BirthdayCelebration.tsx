import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PawIcon, PuffCat, PuffCatParty, WalkingPawTrail } from './CatAssets';

interface BirthdayCelebrationProps {
  herName: string;
}

export const BirthdayCelebration: React.FC<BirthdayCelebrationProps> = ({ herName }) => {
  const [wishMade, setWishMade] = useState(false);
  const [isBlowingOut, setIsBlowingOut] = useState(false);
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [sprinkles, setSprinkles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleCakeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const colors = ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8', '#34d399'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    setSprinkles(prev => [...prev, { id: Date.now(), x, y, color }]);
  };

  // Synthesized Cat Meow version of "Happy Birthday"
  const playBirthdayTune = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      setIsPlayingMelody(true);

      // Notes in Hz for Happy Birthday melody
      const notes = [
        { f: 392, d: 0.35 }, // G4
        { f: 392, d: 0.35 }, // G4
        { f: 440, d: 0.6 }, // A4
        { f: 392, d: 0.6 }, // G4
        { f: 523.25, d: 0.6 }, // C5
        { f: 493.88, d: 1.0 }, // B4
        { f: 392, d: 0.35 }, // G4
        { f: 392, d: 0.35 }, // G4
        { f: 440, d: 0.6 }, // A4
        { f: 392, d: 0.6 }, // G4
        { f: 587.33, d: 0.6 }, // D5
        { f: 523.25, d: 1.0 }, // C5
      ];

      let startTime = ctx.currentTime + 0.1;

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        // Sawtooth wave for rich, buzzy harmonics (like vocal cords)
        osc.type = 'sawtooth';

        // Pitch envelope (the 'mew' scoop)
        osc.frequency.setValueAtTime(note.f * 0.85, startTime); // Start a bit flat
        osc.frequency.exponentialRampToValueAtTime(note.f, startTime + 0.08); // Slide up to pitch
        osc.frequency.setTargetAtTime(note.f * 0.95, startTime + note.d - 0.1, 0.05); // Slight fall off

        // Formant filter for the 'oww' sound (mouth opening and closing)
        filter.type = 'bandpass';
        filter.Q.value = 4;
        filter.frequency.setValueAtTime(400, startTime);
        filter.frequency.exponentialRampToValueAtTime(1800, startTime + 0.08); // Open mouth "ee-ah"
        filter.frequency.exponentialRampToValueAtTime(400, startTime + note.d); // Close mouth "oww"

        // Volume envelope
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05); // Attack
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + note.d); // Decay

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d + 0.1);

        startTime += note.d + 0.1; // Gap between meows
      });

      setTimeout(() => {
        setIsPlayingMelody(false);
      }, (startTime - ctx.currentTime) * 1000);
    } catch {
      setIsPlayingMelody(false);
    }
  };

  const handleMakeWish = () => {
    setIsBlowingOut(true);

    // Candle flame blow-out delay
    setTimeout(() => {
      setWishMade(true);
      setIsBlowingOut(false);

      // Play joyful tune when candles are blown
      playBirthdayTune();

      // Fireworks / confetti explosion with pastel puff colors
      const duration = 4 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 999 };

      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8'],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#f472b6', '#fb7185', '#fde047', '#a78bfa', '#38bdf8'],
        });
      }, 250);
    }, 800);
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <section
      id="birthday-celebration-section"
      className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden"
    >
      {/* Floating decorative paw prints and balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          className="absolute top-8 left-6 text-pink-400 text-4xl"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute top-12 right-8 text-yellow-400 text-5xl"
        >
          🎈
        </motion.div>
        <div className="absolute bottom-20 left-10 text-pink-400/30 text-4xl">
          ⭐
        </div>
        <div className="absolute bottom-24 right-12 text-pink-400/30 text-4xl">
          🎂
        </div>
      </div>

      {/* Main Celebration Headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xs sm:text-sm font-bubbly font-bold uppercase tracking-wider text-pink-600 bg-pink-100 px-4 py-1.5 rounded-full border-2 border-pink-300 shadow-xs inline-block">
            YAAAAY! NOW IT'S TIME TO CELEBRATE! 🐾🎂
          </span>
          <button
            onClick={playBirthdayTune}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-pink-50 border-2 border-pink-300 text-pink-600 text-xs font-bubbly font-bold transition-colors cursor-pointer shadow-xs"
            title="Play Meow-thday Song"
          >
            {isPlayingMelody ? <Volume2 className="w-4 h-4 text-pink-500 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span>{isPlayingMelody ? 'Meowing 🎵' : 'Play Meow Song 🐾🎶'}</span>
          </button>
        </div>

        <h2 className="font-bubbly text-4xl sm:text-6xl md:text-7xl text-pink-600 font-bold leading-tight mb-2">
          Happiest Birthday! 🎉
        </h2>
      </motion.div>

      {/* Interactive Birthday Cake with Singing Puff Cats Beside It */}
      <div className="relative z-10 my-8 flex flex-col items-center justify-center">
        <div className="relative flex items-end justify-center gap-2 sm:gap-6">
          {/* Singing Puff Cat Left */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex flex-col items-center mb-4"
          >
            <span className="text-xs text-pink-500 font-bubbly font-bold mb-1">♪ meow meow ♪</span>
            <div className="p-2 bg-white rounded-full border-3 border-pink-300 shadow-md">
              <PuffCat mood="happy" className="w-16 h-16" />
            </div>
          </motion.div>

          {/* Center Birthday Cake */}
          <div className="relative w-72 max-w-full flex flex-col items-center justify-end">
            {/* Candle Flames */}
            <div className="flex gap-8 mb-1.5 z-20">
              {[0, 1, 2].map((candleIndex) => (
                <div key={candleIndex} className="relative flex flex-col items-center">
                  {/* Flame */}
                  <AnimatePresence>
                    {!wishMade && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{
                          scale: 0,
                          y: -15,
                          opacity: 0,
                          transition: { duration: 0.5 },
                        }}
                        className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 animate-flame shadow-[0_0_18px_rgba(251,191,36,0.95)]"
                      />
                    )}
                  </AnimatePresence>

                  {/* Smoke wisps after wish */}
                  {wishMade && (
                    <motion.div
                      initial={{ opacity: 0.8, y: 0, scale: 0.6 }}
                      animate={{ opacity: 0, y: -25, scale: 1.4 }}
                      transition={{ duration: 1.2 }}
                      className="w-2 h-4 rounded-full bg-zinc-400/50 blur-sm"
                    />
                  )}

                  {/* Candle Stick */}
                  <div className="w-3 h-10 rounded-t-sm bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-300 border border-pink-400 shadow-sm" />
                </div>
              ))}
            </div>

            {/* Top Cake Tier with Cute Puff Cat Topper */}
            <div 
              onClick={handleCakeClick}
              className="relative w-48 h-20 rounded-t-3xl bg-pink-300 shadow-md flex items-center justify-center border-3 border-pink-400 cursor-pointer overflow-hidden"
              title="Click to add sprinkles!"
            >
              <div className="-mt-8 p-1.5 rounded-full bg-white border-3 border-pink-400 shadow-md z-10">
                <PuffCat mood="winking" className="w-12 h-12" />
              </div>
              {/* Strawberry Frosting drips */}
              <div className="absolute -bottom-2 inset-x-0 flex justify-around text-white text-sm font-bold z-10 pointer-events-none">
                <span>🍓</span>
                <span>🧁</span>
                <span>🍓</span>
                <span>🧁</span>
                <span>🍓</span>
              </div>
              
              {/* Sprinkles Layer */}
              {sprinkles.map(sprinkle => (
                <motion.div
                  key={sprinkle.id}
                  initial={{ opacity: 0, scale: 0, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: sprinkle.x - 4,
                    top: sprinkle.y - 4,
                    backgroundColor: sprinkle.color,
                  }}
                />
              ))}
            </div>

            {/* Bottom Cake Tier */}
            <div 
              onClick={handleCakeClick}
              className="relative w-64 h-22 rounded-b-3xl bg-pink-100 border-4 border-pink-300 shadow-[0_8px_0_0_#fbcfe8] flex items-center justify-center cursor-pointer overflow-hidden"
              title="Click to add sprinkles!"
            >
              <div className="flex items-center gap-2 text-pink-700 text-sm font-bubbly font-bold z-10 pointer-events-none">
                <PawIcon className="w-4 h-4 fill-pink-500" />
                <span>Sweet {herName}</span>
                <PawIcon className="w-4 h-4 fill-pink-500" />
              </div>

              {/* Sprinkles Layer */}
              {sprinkles.map(sprinkle => (
                <motion.div
                  key={`bottom-${sprinkle.id}`}
                  initial={{ opacity: 0, scale: 0, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    left: sprinkle.x - 5 + 16, // offset slightly for bottom tier since relative parent is different
                    top: sprinkle.y - 5 - 20,
                    backgroundColor: sprinkle.color,
                  }}
                />
              ))}
            </div>

            {/* Cake Stand Base */}
            <div className="w-72 h-4 bg-white rounded-full shadow-md border-3 border-pink-300 mt-1" />
          </div>

          {/* Singing Puff Cat Right */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [4, -4, 4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex flex-col items-center mb-4"
          >
            <span className="text-xs text-amber-600 font-bubbly font-bold mb-1">♫ purrr purrr ♫</span>
            <div className="p-2 bg-white rounded-full border-3 border-pink-300 shadow-md">
              <PuffCat mood="winking" className="w-16 h-16" />
            </div>
          </motion.div>
        </div>

        {/* Wish Prompt & Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {!wishMade ? (
            <>
              <motion.button
                id="blow-the-candles-btn"
                onClick={handleMakeWish}
                disabled={isBlowingOut}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bubbly font-bold text-base sm:text-lg shadow-[0_5px_0_0_#be185d,0_10px_20px_rgba(244,114,182,0.3)] transition-all cursor-pointer border-2 border-pink-300"
              >
                <span>🎂 Blow the candles!</span>
              </motion.button>

              <motion.button
                id="make-a-wish-btn"
                onClick={handleMakeWish}
                disabled={isBlowingOut}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-pink-50 border-3 border-pink-300 text-pink-600 font-bubbly font-bold text-base sm:text-lg shadow-[0_4px_0_0_#fbcfe8] transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>Make a wish ✨</span>
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-[32px] bg-white border-4 border-pink-300 max-w-md mx-auto shadow-[0_8px_0_0_#fbcfe8,0_15px_30px_rgba(244,114,182,0.15)]"
            >
              <p className="text-pink-600 font-bubbly text-2xl sm:text-3xl font-bold">
                ✨ Your wish is on its way to the stars! ✨
              </p>
              <p className="text-zinc-600 text-sm sm:text-base mt-2 font-body font-medium">
                May every single little dream come true this year! 🐾
              </p>
              <button
                onClick={playBirthdayTune}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-bubbly font-bold border-2 border-pink-300 shadow-xs transition-colors cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Replay Meow-thday Song 🐱🎶</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Celebratory Note */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 relative z-10"
      >
        <p className="text-zinc-600 font-body text-base mt-2 max-w-md mx-auto font-medium">
          Here's to another year of fun adventures, endless giggles, and making amazing memories together! 🐾
        </p>
      </motion.div>

      {/* Walking paw trail leading to final farewell message */}
      <WalkingPawTrail label="Follow the paws to our final note" count={5} className="mt-12" />
    </section>
  );
};
