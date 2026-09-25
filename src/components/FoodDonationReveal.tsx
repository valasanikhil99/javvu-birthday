import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Edit3, CheckCircle2, PartyPopper, Sparkles } from 'lucide-react';
import { DonationDetails } from '../types';
import { PawIcon, PuffCatParty, WalkingPawTrail } from './CatAssets';
import catDonationImg from '../assets/images/cat_donation_illustration_1788584298682.jpg';
import { launchSurpriseConfettiExplosion } from '../utils/confettiExplosion';
import { audioEngine } from '../utils/audioPlayer';
import { DonationPhotosSection } from './DonationPhotosSection';
import { SurprisePhotoGallery } from './SurprisePhotoGallery';

interface FoodDonationRevealProps {
  herName: string;
  donation: DonationDetails;
  onUpdateDonation?: (updated: DonationDetails) => void;
}

export const FoodDonationReveal: React.FC<FoodDonationRevealProps> = ({
  herName,
  donation,
  onUpdateDonation,
}) => {
  const [isEditingMeals, setIsEditingMeals] = useState(false);
  const [mealCount, setMealCount] = useState(donation.mealsCount);

  useEffect(() => {
    // Automatically trigger canvas-based confetti explosion when surprise section is first revealed
    const timer = setTimeout(() => {
      launchSurpriseConfettiExplosion();
      try {
        audioEngine.playHappyChime();
      } catch {
        // audio fallback
      }
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleManualConfetti = () => {
    launchSurpriseConfettiExplosion();
    try {
      audioEngine.playHappyChime();
    } catch {
      // audio fallback
    }
  };

  const handleSaveMealCount = () => {
    if (onUpdateDonation) {
      onUpdateDonation({
        ...donation,
        mealsCount: mealCount,
      });
    }
    setIsEditingMeals(false);
  };

  return (
    <section
      id="food-donation-reveal-section"
      className="relative py-16 px-4 sm:px-6 max-w-3xl mx-auto"
    >
      {/* Warm ambient radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-amber-200/30 blur-[130px] pointer-events-none" />

      {/* Background stickers */}
      <div className="absolute top-8 left-8 text-amber-400/30 pointer-events-none text-4xl">
        🍲
      </div>
      <div className="absolute top-12 right-10 text-pink-400/30 pointer-events-none text-4xl">
        💖
      </div>

      {/* Intimate Reveal Introduction */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-800 text-xs sm:text-sm font-bubbly font-bold tracking-wider uppercase mb-3 shadow-xs"
        >
          <PawIcon className="w-4 h-4 fill-amber-500" />
          <span>A Meaningful Birthday Gift</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bubbly text-3xl sm:text-4xl md:text-5xl text-amber-600 font-bold leading-snug mb-2"
        >
          Your birthday should make everyone smile! 🍲💖
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-zinc-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium"
        >
          So I decided to celebrate your birthday by sharing warm meals with people who need one.
        </motion.p>
      </div>

      {/* Humble, Beautiful Donation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative rounded-[36px] bg-white border-4 border-amber-300 p-6 sm:p-10 shadow-[0_12px_0_0_#fcd34d,0_20px_40px_rgba(245,158,11,0.15)] overflow-hidden text-center"
      >
        {/* Cute Puff Cat Party Emblem at Top */}
        <div className="flex justify-center mb-3">
          <PuffCatParty className="w-32 sm:w-40 h-auto" />
        </div>

        {/* Header: Birthday Food Donation */}
        <h3 className="font-bubbly text-2xl sm:text-3xl text-amber-700 font-bold mb-1">
          {donation.badgeText || 'Birthday Food Donation'} 🐾
        </h3>

        {/* Date: 27 September 2026 */}
        <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs sm:text-sm font-bubbly font-bold tracking-wider mb-4">
          <Calendar className="w-4 h-4 text-pink-500" />
          <span>{donation.date}</span>
        </div>

        {/* Confetti Explosion Celebration Action */}
        <div className="mb-5 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleManualConfetti}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bubbly font-bold shadow-[0_4px_0_0_#d97706] cursor-pointer transition-all"
            title="Trigger confetti celebration"
          >
            <PartyPopper className="w-4 h-4 text-yellow-200 animate-bounce" />
            <span>Celebrate with Confetti! 🎉</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          </motion.button>
        </div>

        {/* Big Number of Meals with Edit Option */}
        <div className="my-5">
          {isEditingMeals ? (
            <div className="inline-flex flex-col items-center gap-3 bg-amber-50 p-4 rounded-2xl border-2 border-amber-300">
              <label className="text-xs font-bubbly font-bold text-amber-800">
                Number of Warm Meals & Cake (Budget ~{donation.budgetEstimate})
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={mealCount}
                  onChange={(e) => setMealCount(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 rounded-xl bg-white border-2 border-amber-300 text-xl font-bubbly font-bold text-center text-amber-600 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={handleSaveMealCount}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bubbly font-bold text-xs flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="inline-block relative">
              <div className="font-bubbly text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight drop-shadow-xs">
                {donation.mealsCount} MEALS & CAKE 🥣🎂
              </div>
              <button
                onClick={() => setIsEditingMeals(true)}
                title="Edit meal count"
                className="absolute -top-2 -right-8 p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors cursor-pointer border border-amber-300 shadow-xs"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <p className="text-pink-600 font-bubbly font-bold text-sm sm:text-base mt-2 flex items-center justify-center gap-1.5">
            <span>In celebration of your kind heart</span>
            <PawIcon className="w-4 h-4 fill-pink-500" />
          </p>
        </div>

        {/* Note: A small gesture, for a day that means a lot to me */}
        <div className="mt-6 pt-5 border-t-2 border-dashed border-amber-200 max-w-lg mx-auto">
          <p className="font-bubbly text-xl sm:text-2xl text-amber-800 font-bold mb-1">
            “{donation.personalNote || 'A small gesture, for a day that means a lot to me.'}”
          </p>
          <p className="text-zinc-600 text-xs sm:text-sm font-body font-medium">
            {donation.recipientDescription}
          </p>
        </div>

        {/* Donation Media Highlights: Video and Slides */}
        <div className="mt-8 pt-6 border-t-2 border-amber-100 -mx-2 sm:-mx-4">
          <p className="font-bubbly text-amber-700 font-bold text-center mb-4 text-sm sm:text-base uppercase tracking-wider">
            Donation Highlights 🎥📸
          </p>
          
          {/* Donation Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 sm:px-6 mb-6">
            {/* Vimeo Video 1 */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200 shadow-sm bg-black group aspect-[9/16] max-h-[500px] mx-auto w-full max-w-[340px] md:max-w-none">
              <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px]">
                <iframe
                  src="https://player.vimeo.com/video/1230211697?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="javwisehs"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Vimeo Video 2 */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200 shadow-sm bg-black group aspect-[9/16] max-h-[500px] mx-auto w-full max-w-[340px] md:max-w-none">
              <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px]">
                <iframe
                  src="https://player.vimeo.com/video/1230214010?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="IMG_1868 (1)"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Donation Drive High-Res Snapshots (Below videos separately) */}
          <DonationPhotosSection />

          {/* Surprise Celebration Photo Highlights (20 Moments) */}
          <SurprisePhotoGallery />
        </div>
      </motion.div>

      {/* Walking paw prints leading to Birthday Celebration */}
      <WalkingPawTrail label="Follow the paws to celebrate your special day" count={5} className="mt-12" />
    </section>
  );
};
