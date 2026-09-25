import React from 'react';
import { motion } from 'motion/react';
import { PawIcon, PuffCat } from './CatAssets';
import catCityWindowImg from '../assets/images/cats_night_city_1788584279748.jpg';

interface FinalMessageProps {
  herName: string;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({ herName }) => {
  return (
    <footer id="final-message-section" className="relative py-20 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFF0F5] to-[#FFE8F0] border-t-4 border-pink-200">
      {/* Floating gentle sparkles & stickers */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-12 left-1/4 text-yellow-400 text-3xl pointer-events-none"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-24 right-1/4 text-pink-400 text-3xl pointer-events-none"
      >
        💖
      </motion.div>

      <div className="max-w-xl mx-auto flex flex-col items-center relative z-10">
        {/* Cat Polaroid with cute sleeping Puff Cat topper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          {/* Sleeping puff cat resting on the frame */}
          <div className="absolute -top-10 -right-6 z-20">
            <PuffCat mood="sleeping" className="w-20 h-20 drop-shadow-md" />
          </div>

          <div className="bg-white p-4 pb-6 rounded-[32px] border-4 border-pink-300 shadow-[0_10px_0_0_#fbcfe8,0_15px_30px_rgba(244,114,182,0.15)] transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-[24px] overflow-hidden border-2 border-pink-100 mb-3">
              <img
                src={catCityWindowImg}
                alt="Cat looking out window at city sunset stars"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bubbly text-pink-600 font-bold text-sm">
              watching stars & wishing you the sweetest year 🌙✨
            </p>
          </div>
        </motion.div>

        {/* Closing Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bubbly text-3xl sm:text-4xl md:text-5xl text-pink-600 font-bold mb-2"
        >
          Thank you for existing! 🐾💖
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bubbly text-xl sm:text-2xl text-pink-500 font-bold mb-3"
        >
          Happy Birthday, sweetest {herName}!
        </motion.p>





        {/* Gentle footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-6 border-t-2 border-dashed border-pink-200 w-full"
        >
          <p className="text-pink-600/80 text-xs sm:text-sm font-bubbly font-bold tracking-wider flex items-center justify-center gap-1.5">
            <span>made with loveee for myy kothiii</span>
            <PawIcon className="w-4 h-4 fill-pink-500 text-pink-500" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
