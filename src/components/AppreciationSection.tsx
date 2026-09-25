import React from 'react';
import { motion } from 'motion/react';
import { AppreciationCard } from '../types';
import { PawIcon, PuffCat, WalkingPawTrail } from './CatAssets';

interface AppreciationSectionProps {
  appreciations: AppreciationCard[];
}

export const AppreciationSection: React.FC<AppreciationSectionProps> = ({
  appreciations,
}) => {
  const getCatMood = (index: number): 'happy' | 'winking' | 'sleepy' => {
    const moods: ('happy' | 'winking' | 'sleepy')[] = ['happy', 'winking', 'sleepy'];
    return moods[index % 3];
  };

  return (
    <section
      id="appreciation-section"
      className="relative py-16 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Soft atmospheric background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-pink-200/20 blur-[120px] pointer-events-none" />

      {/* Sleepy / Sweet Puff Cat Centerpiece */}
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <div className="inline-block p-4 rounded-full bg-white border-4 border-pink-300 shadow-[0_6px_0_0_#fbcfe8]">
            <PuffCat mood="sleepy" className="w-28 sm:w-36 h-auto" />
          </div>
          <div className="mt-2 text-xs font-bubbly font-bold text-pink-500">
            💤 zzz... listening to sweet thoughts 💤
          </div>
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border-2 border-pink-300 text-pink-600 text-xs sm:text-sm font-bubbly font-bold tracking-wider uppercase mb-3 shadow-xs"
        >
          <PawIcon className="w-4 h-4 fill-pink-500" />
          <span>From the bottom of my heart</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bubbly text-4xl sm:text-5xl md:text-6xl text-pink-600 font-bold mt-1"
        >
          Things I Don't Say Enough 💖🐾
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-600 text-base sm:text-lg max-w-md mx-auto mt-2 font-body font-medium"
        >
          Because in our daily silly banter, I forget to remind you how much you truly mean to me!
        </motion.p>
      </div>

      {/* Cards Grid with Sweet Puff Cat Portraits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {appreciations.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 sm:p-8 rounded-[32px] bg-white border-4 border-pink-200 hover:border-pink-400 transition-all duration-300 relative group overflow-hidden shadow-[0_8px_0_0_#fbcfe8] hover:shadow-[0_12px_0_0_#f472b6] flex flex-col items-center text-center"
          >
            {/* Cute Puff Cat Portrait at Top of Card */}
            <div className="mb-4 p-2.5 rounded-full bg-pink-100 border-2 border-pink-200 group-hover:scale-110 transition-transform duration-300">
              <PuffCat mood={getCatMood(index)} className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            {/* Main appreciation sentence */}
            <h3 className="font-bubbly text-2xl sm:text-3xl text-pink-600 font-bold leading-snug mb-2 group-hover:text-pink-700 transition-colors">
              “{card.text}”
            </h3>

            {/* Subtext */}
            {card.subtext && (
              <p className="font-body text-zinc-600 text-base leading-relaxed max-w-sm font-medium">
                {card.subtext}
              </p>
            )}

            {/* Paw print in bottom corner */}
            <div className="absolute bottom-3 right-3 text-pink-300/30 group-hover:text-pink-400/50 transition-colors pointer-events-none">
              <PawIcon className="w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Walking paw prints leading to next section */}
      <WalkingPawTrail label="Follow the paws to my personal letter" count={5} className="mt-12" />
    </section>
  );
};
