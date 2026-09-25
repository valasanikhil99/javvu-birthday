import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ExternalLink,
  Camera,
  Heart,
  Sparkles,
} from 'lucide-react';
import { PawIcon } from './CatAssets';

export interface DonationPhotoItem {
  id: string;
  url: string;
  fallbackUrl: string;
  title: string;
  caption: string;
}

export const donationDrivePhotos: DonationPhotoItem[] = [
  {
    id: 'donation-drive-1',
    url: '/donation_photos/donation-01.jpg',
    fallbackUrl: 'https://i.ibb.co/CKMtvgjz/IMG-1866.jpg',
    title: 'Food Donation Drive',
    caption: 'Warm meals lovingly prepared for distribution on your birthday',
  },
  {
    id: 'donation-drive-2',
    url: '/donation_photos/donation-02.jpg',
    fallbackUrl: 'https://i.ibb.co/JWsYxnfq/IMG-1867.avif',
    title: 'Warm Meal Boxes & Birthday Cake',
    caption: 'Nutritious warm meal boxes and celebratory birthday cake for the community',
  },
  {
    id: 'donation-drive-3',
    url: '/donation_photos/donation-03.jpg',
    fallbackUrl: 'https://i.ibb.co/d4sm7qkS/IMG-1921.jpg',
    title: 'Spreading Smiles & Joy',
    caption: 'Heartwarming moments of sharing warmth and nourishment in your honor',
  },
];

export const DonationPhotosSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const photos = donationDrivePhotos;

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

  const currentPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="mt-6 mb-8 px-3 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bubbly font-bold mb-2 shadow-xs">
          <Camera className="w-3.5 h-3.5 text-amber-600" />
          <span>Donation Drive Snapshots</span>
          <Sparkles className="w-3 h-3 text-amber-600" />
        </div>
        <h4 className="font-bubbly text-amber-900 text-lg sm:text-xl font-bold">
          Food Distribution Moments
        </h4>
        <p className="text-zinc-500 text-xs sm:text-sm font-body max-w-md mx-auto">
          Direct snapshots from the food boxes and birthday cake drive below the celebration videos
        </p>
      </div>

      {/* 3 Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, index) => {
          const isLiked = likedPhotos[photo.id];

          return (
            <motion.div
              key={photo.id}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-white p-2.5 border-2 border-amber-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to remote ibb CDN URL if needed
                    if (e.currentTarget.src !== photo.fallbackUrl) {
                      e.currentTarget.src = photo.fallbackUrl;
                    }
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/95 text-zinc-800 shadow-md">
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

                {/* Index badge */}
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/65 text-white text-[11px] font-mono backdrop-blur-xs">
                  Photo #{index + 1}
                </span>
              </div>

              {/* Title & Caption */}
              <div className="mt-2.5 px-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h5 className="font-bubbly font-bold text-amber-900 text-sm truncate">
                    {photo.title}
                  </h5>
                  <PawIcon className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-600 transition-colors shrink-0" />
                </div>
                <p className="text-zinc-500 text-xs font-body line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full-screen Lightbox Modal (Completely clean, zero pink color) */}
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
              <div className="w-full flex items-center justify-between text-white mb-2.5 px-2">
                <div className="flex items-center gap-2">
                  <span className="font-bubbly font-bold text-sm sm:text-base text-amber-300">
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
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
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

              {/* Main Image Frame in Lightbox */}
              <div className="relative w-full max-h-[74vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-zinc-800 shadow-2xl">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl select-none"
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 transition-transform active:scale-95 cursor-pointer backdrop-blur-xs"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 transition-transform active:scale-95 cursor-pointer backdrop-blur-xs"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="mt-3 text-center px-4 max-w-xl">
                <p className="text-zinc-300 text-xs sm:text-sm font-body">
                  {currentPhoto.caption}
                </p>
              </div>

              {/* Bottom Thumbnails */}
              <div className="w-full flex items-center justify-center gap-2 mt-3 py-1 px-2">
                {photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === selectedIndex
                        ? 'border-amber-400 scale-105 shadow-md'
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
