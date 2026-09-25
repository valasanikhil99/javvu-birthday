import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Heart,
  Sparkles,
  Grid,
  Images,
  ExternalLink,
} from 'lucide-react';
import { surprisePhotos, SurprisePhoto } from '../config/surprisePhotos';
import { PawIcon } from './CatAssets';

export const SurprisePhotoGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const photos = surprisePhotos;
  // By default, show 8 photos, expandable to all 20
  const displayedPhotos = showAll ? photos : photos.slice(0, 8);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  }, [selectedIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  }, [selectedIndex, photos.length]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedPhotos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentPhoto: SurprisePhoto | null =
    selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="mt-8 pt-6 border-t-2 border-dashed border-amber-200">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 px-2">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h4 className="font-bubbly text-amber-800 text-lg sm:text-xl font-bold">
              Birthday Surprise Moments
            </h4>
            <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bubbly font-bold">
              {photos.length} Photos
            </span>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm font-body">
            Captured moments and memories from the food donation & celebration
          </p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-bubbly font-bold transition-all cursor-pointer border border-amber-300 shadow-xs"
        >
          {showAll ? (
            <>
              <Grid className="w-3.5 h-3.5" />
              <span>Show Less (8)</span>
            </>
          ) : (
            <>
              <Images className="w-3.5 h-3.5" />
              <span>View All 20 Photos</span>
              <Sparkles className="w-3 h-3 text-amber-600" />
            </>
          )}
        </button>
      </div>

      {/* Responsive Grid for Surprise Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 px-1">
        {displayedPhotos.map((photo, index) => {
          const isLiked = likedPhotos[photo.id];
          const isSelected = selectedIndex === index;

          return (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index % 8) * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-white p-2 border-2 border-amber-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to remote ibb CDN URL if local file is missing
                    if (e.currentTarget.src !== photo.fallbackUrl) {
                      e.currentTarget.src = photo.fallbackUrl;
                    }
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/90 text-amber-700 shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Like Heart Button */}
                <button
                  type="button"
                  onClick={(e) => toggleLike(e, photo.id)}
                  title={isLiked ? 'Liked' : 'Like photo'}
                  className={`absolute top-2 right-2 p-1.5 rounded-full transition-transform active:scale-90 ${
                    isLiked
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-zinc-600 hover:text-rose-500'
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`}
                  />
                </button>

                {/* Badge for Photo Index */}
                <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono backdrop-blur-xs">
                  #{index + 1}
                </span>
              </div>

              {/* Caption Footer */}
              <div className="mt-1.5 px-1 flex items-center justify-between">
                <span className="text-[11px] font-bubbly font-bold text-amber-900 truncate">
                  {photo.title}
                </span>
                <PawIcon className="w-3 h-3 text-amber-400 group-hover:text-pink-500 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expand More Button if not showing all */}
      {!showAll && photos.length > 8 && (
        <div className="mt-5 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-500 hover:to-pink-500 text-white font-bubbly font-bold text-sm shadow-[0_4px_0_0_#d97706] cursor-pointer"
          >
            <Images className="w-4 h-4" />
            <span>Show All {photos.length} Celebration Photos</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              {/* Top Bar inside modal */}
              <div className="w-full flex items-center justify-between text-white mb-2 px-2">
                <div className="flex items-center gap-2">
                  <span className="font-bubbly font-bold text-sm sm:text-base text-yellow-300">
                    {currentPhoto.title}
                  </span>
                  <span className="text-zinc-400 text-xs">
                    ({selectedIndex + 1} of {photos.length})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleLike(e, currentPhoto.id)}
                    className={`p-2 rounded-full border transition-colors ${
                      likedPhotos[currentPhoto.id]
                        ? 'bg-rose-500 border-rose-500 text-white'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                    title="Like"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedPhotos[currentPhoto.id] ? 'fill-white' : ''
                      }`}
                    />
                  </button>
                  <a
                    href={currentPhoto.fallbackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                    title="View Original"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCloseLightbox}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image in Lightbox */}
              <div className="relative w-full max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-zinc-800 shadow-2xl">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.title}
                  className="max-h-[74vh] w-auto max-w-full object-contain rounded-xl select-none"
                  onError={(e) => {
                    if (e.currentTarget.src !== currentPhoto.fallbackUrl) {
                      e.currentTarget.src = currentPhoto.fallbackUrl;
                    }
                  }}
                />

                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-transform active:scale-95 cursor-pointer backdrop-blur-xs"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-transform active:scale-95 cursor-pointer backdrop-blur-xs"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Thumbnails Strip */}
              <div className="w-full flex items-center justify-center gap-1.5 mt-3 overflow-x-auto py-1 px-2 no-scrollbar max-w-xl">
                {photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === selectedIndex
                        ? 'border-yellow-400 scale-105 shadow-md'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={p.url}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        if (e.currentTarget.src !== p.fallbackUrl) {
                          e.currentTarget.src = p.fallbackUrl;
                        }
                      }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
