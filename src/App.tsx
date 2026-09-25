/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { initialBirthdayConfig } from './config/birthdayData';
import { BirthdayConfig, MemoryPhoto, DonationDetails } from './types';
import { FireworksIntro } from './components/FireworksIntro';
import { OpeningExperience } from './components/OpeningExperience';
import { BirthdayHero } from './components/BirthdayHero';
import { FriendshipTimeline } from './components/FriendshipTimeline';
import { MemoryGallery } from './components/MemoryGallery';
import { InsideJokes } from './components/InsideJokes';
import { AppreciationSection } from './components/AppreciationSection';
import { BirthdayLetter } from './components/BirthdayLetter';
import { SurpriseTransition } from './components/SurpriseTransition';
import { FoodDonationReveal } from './components/FoodDonationReveal';
import { BirthdayCelebration } from './components/BirthdayCelebration';
import { FinalMessage } from './components/FinalMessage';
import { MusicPlayer } from './components/MusicPlayer';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { CatNavigationMenu } from './components/CatNavigationMenu';
import { InteractiveCursor } from './components/InteractiveCursor';
import { FloatingBalloons } from './components/FloatingBalloons';

const STORAGE_KEY = 'bestie_birthday_experience_config_v6';

export default function App() {
  const [config, setConfig] = useState<BirthdayConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.herName === 'Riya' || !parsed.herName) {
          parsed.herName = 'Javvvuu';
        }
        parsed.appreciations = initialBirthdayConfig.appreciations;
        return parsed;
      }
    } catch {
      // Ignore fallback
    }
    return initialBirthdayConfig;
  });

  const [showFireworksIntro, setShowFireworksIntro] = useState(true);
  const [hasOpened, setHasOpened] = useState(false);
  const [isSurpriseRevealed, setIsSurpriseRevealed] = useState(false);
  const [hiddenEditorMode, setHiddenEditorMode] = useState(false);

  // Save changes to localStorage
  const handleSaveConfig = (newConfig: BirthdayConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // Ignore
    }
  };

  const handleResetToDefault = () => {
    setConfig(initialBirthdayConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleAddPhoto = (newPhoto: MemoryPhoto) => {
    const updated = {
      ...config,
      memories: [newPhoto, ...config.memories],
    };
    handleSaveConfig(updated);
  };

  const handleUpdateDonation = (updatedDonation: DonationDetails) => {
    const updated = {
      ...config,
      donation: updatedDonation,
    };
    handleSaveConfig(updated);
  };

  const handleRevealSurprise = () => {
    setIsSurpriseRevealed(true);
    setTimeout(() => {
      const el = document.getElementById('food-donation-reveal-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-zinc-800 font-body relative overflow-x-hidden selection:bg-pink-300 selection:text-pink-900">
      <FloatingBalloons />
      <InteractiveCursor />
      {/* SECTION 0 & 1: FULL SCREEN OPENING EXPERIENCES */}
      <AnimatePresence mode="wait">
        {showFireworksIntro && (
          <FireworksIntro
            key="fireworks-intro"
            herName={config.herName}
            onContinue={() => setShowFireworksIntro(false)}
          />
        )}
        {!showFireworksIntro && !hasOpened && (
          <OpeningExperience
            key="question-opening"
            herName={config.herName}
            teaserText={config.openingTeaser}
            subtext={config.openingSubtext}
            onOpen={() => setHasOpened(true)}
          />
        )}
      </AnimatePresence>

      {/* Persistent Ambient Background Floating Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-pink-200/40 blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-amber-100/50 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-rose-200/30 blur-[150px]" />
      </div>

      {/* MAIN STORYTELLING JOURNEY */}
      <main className="relative z-10">
        {/* SECTION 2: BIRTHDAY INTRO */}
        <BirthdayHero
          herName={config.herName}
          birthdayDateString={config.birthdayDateString}
        />

        {/* SOFT CUTE EXPERIENCE: Cream / Pale Pink with Paw-Prints & Hearts */}
        <div className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-[#FFF8F6] text-zinc-900 py-10 border-y-4 border-pink-200 shadow-inner overflow-hidden">
          {/* Subtle soft background paw watermark pattern */}
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* SECTION 3: OUR STORY */}
          <FriendshipTimeline
            milestones={config.timeline}
            herName={config.herName}
          />

          {/* SECTION 4: OUR MEMORIES */}
          <MemoryGallery
            photos={config.memories}
            onAddPhoto={handleAddPhoto}
          />

          {/* SECTION 5: THINGS ONLY WE UNDERSTAND */}
          <InsideJokes jokes={config.insideJokes} />

          {/* SECTION 6: WHAT YOU MEAN TO ME */}
          <AppreciationSection appreciations={config.appreciations} />

          {/* SECTION 7: THE LETTER */}
          <BirthdayLetter letter={config.letter} />
        </div>

        {/* PASTEL CELEBRATION EXPERIENCE: Surprise, Donation, Celebration, Final Farewell */}
        <div className="relative bg-gradient-to-b from-[#FFF0F5] via-[#FFFDF7] to-[#FFF5F8]">
          {/* SECTION 8: THE FIRST SURPRISE (MYSTERIOUS TRANSITION) */}
          <SurpriseTransition
            onRevealSurprise={handleRevealSurprise}
            isRevealed={isSurpriseRevealed}
          />

          {/* SECTION 9: FOOD DONATION REVEAL */}
          <AnimatePresence>
            {isSurpriseRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <FoodDonationReveal
                  herName={config.herName}
                  donation={config.donation}
                  onUpdateDonation={handleUpdateDonation}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* SECTION 10: BIRTHDAY CELEBRATION */}
          {isSurpriseRevealed && (
            <BirthdayCelebration herName={config.herName} />
          )}

          {/* SECTION 11: FINAL EMOTIONAL MESSAGE */}
          {isSurpriseRevealed && (
            <FinalMessage herName={config.herName} />
          )}
        </div>
      </main>

      {/* Cat Navigation Menu Floating Widget */}
      {hasOpened && (
        <CatNavigationMenu
          onReplayIntro={() => {
            setShowFireworksIntro(true);
            setHasOpened(false);
          }}
        />
      )}

      {/* Floating Background Music Controller */}
      <MusicPlayer />

      {/* Floating Content Editor / Customizer Drawer */}
      <CustomizerDrawer
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetToDefault={handleResetToDefault}
        hiddenMode={hiddenEditorMode}
        onToggleHiddenMode={() => setHiddenEditorMode(!hiddenEditorMode)}
        onReplayIntro={() => {
          setShowFireworksIntro(true);
          setHasOpened(false);
        }}
      />
    </div>
  );
}
