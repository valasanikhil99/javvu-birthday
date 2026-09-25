import React from 'react';
import { motion } from 'motion/react';
import { MailOpen, Sparkles } from 'lucide-react';
import { BirthdayLetter as BirthdayLetterType } from '../types';
import { PawIcon, PuffCat, WalkingPawTrail } from './CatAssets';

interface BirthdayLetterProps {
  letter: BirthdayLetterType;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ letter }) => {
  return (
    <section id="birthday-letter-section" className="relative py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-pink-200/30 blur-[120px] pointer-events-none" />

      {/* Floating Sparkles & Heart stickers decoration */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 right-10 text-pink-400 pointer-events-none text-3xl"
      >
        💌
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-6 text-pink-400 pointer-events-none text-3xl"
      >
        💖
      </motion.div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border-2 border-pink-300 text-pink-600 text-xs sm:text-sm font-bubbly font-bold tracking-wider uppercase mb-3 shadow-xs"
        >
          <PawIcon className="w-4 h-4 fill-pink-500" />
          <span>Unfiltered & Honest</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bubbly text-4xl sm:text-5xl md:text-6xl text-pink-600 font-bold mt-1"
        >
          A Letter For You 💌🐾
        </motion.h2>
      </div>

      {/* Container with Puff Cat Holding Envelope */}
      <div className="relative pt-6">
        {/* Puff Cat with Letter Delivery */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center -mb-5 relative z-20"
        >
          <div className="p-3 bg-white border-4 border-pink-300 rounded-full shadow-[0_6px_0_0_#fbcfe8] flex items-center gap-2">
            <PuffCat mood="happy" className="w-20 sm:w-24 h-auto" />
            <span className="text-3xl animate-bounce">💌</span>
          </div>
        </motion.div>

        {/* Warm White Letter Stationery Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-white border-4 border-pink-300 rounded-[36px] p-6 sm:p-10 md:p-12 shadow-[0_12px_0_0_#fbcfe8,0_25px_50px_rgba(244,114,182,0.15)] overflow-hidden"
        >
          {/* Subtle dots pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Letter header */}
          <div className="flex items-center justify-between border-b-2 border-dashed border-pink-200 pb-5 mb-8 relative z-10">
            <div className="flex items-center gap-2 text-pink-600 text-xs sm:text-sm tracking-wider uppercase font-bubbly font-bold">
              <MailOpen className="w-4 h-4 text-pink-500" />
              <span>Special Bestie Letter • 27.09.2026</span>
            </div>

            {/* Wax seal with paw */}
            <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md border-2 border-white ring-2 ring-pink-200">
              <PawIcon className="w-5 h-5 fill-white" />
            </div>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-zinc-700 font-body text-base sm:text-lg leading-relaxed sm:leading-loose relative z-10 font-medium">
            {letter.paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={idx === 0 ? 'font-bubbly text-2xl sm:text-3xl text-pink-600 font-bold' : ''}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Letter Closing & Signature */}
          <div className="mt-10 pt-6 border-t-2 border-dashed border-pink-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div>
              <p className="font-bubbly text-xl sm:text-2xl text-pink-600 font-bold">
                {letter.closure}
              </p>
            </div>

            <div className="text-right">
              <span className="font-handwriting text-3xl sm:text-4xl text-zinc-900 tracking-wide block">
                {letter.signature}
              </span>
            </div>
          </div>

          {/* Paw print stamp in bottom right */}
          <div className="absolute bottom-6 right-6 text-pink-300/30 pointer-events-none">
            <PawIcon className="w-14 h-14 rotate-12" />
          </div>
        </motion.div>
      </div>

      {/* Walking paw trail leading to the big surprise transition */}
      <WalkingPawTrail label="Follow the puffy paws to the secret surprise" count={6} className="mt-12" />
    </section>
  );
};
