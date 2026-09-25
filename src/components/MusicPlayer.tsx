import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { audioEngine } from '../utils/audioPlayer';
import { PawIcon } from './CatAssets';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const unsub = audioEngine.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleTogglePlay = () => {
    audioEngine.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
  };

  return (
    <div
      id="floating-music-player"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
    >
      {/* Main Music Pill */}
      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border-3 border-pink-300 shadow-[0_4px_0_0_#fbcfe8,0_10px_20px_rgba(244,114,182,0.15)] font-bubbly">
        {/* Equalizer Visualizer Waves */}
        <div className="flex items-end gap-1 h-3.5 px-0.5">
          <span
            className={`w-1 bg-pink-500 rounded-full transition-all duration-300 ${
              isPlaying ? 'h-3 animate-pulse' : 'h-1 opacity-40'
            }`}
          />
          <span
            className={`w-1 bg-amber-400 rounded-full transition-all duration-300 delay-100 ${
              isPlaying ? 'h-3.5 animate-pulse' : 'h-1.5 opacity-40'
            }`}
          />
          <span
            className={`w-1 bg-rose-400 rounded-full transition-all duration-300 delay-200 ${
              isPlaying ? 'h-2 animate-pulse' : 'h-1 opacity-40'
            }`}
          />
        </div>

        {/* Play / Pause Toggle Button */}
        <button
          onClick={handleTogglePlay}
          className="flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 px-2 py-1 rounded-full hover:bg-pink-50 transition-colors cursor-pointer"
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-[11px]">Pause 🎵</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-[11px]">Play Music 🎶</span>
            </>
          )}
        </button>

        {/* Volume expand icon */}
        <button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className="p-1 rounded-full text-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
          title="Adjust volume"
        >
          {volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Volume slider popover */}
      {showVolumeSlider && (
        <div className="flex items-center px-3.5 py-2 rounded-full bg-white border-3 border-pink-300 shadow-[0_4px_0_0_#fbcfe8] animate-in fade-in slide-in-from-left-2">
          <VolumeX className="w-3.5 h-3.5 text-pink-400 mr-2" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-pink-500 h-1.5 bg-pink-100 rounded-lg cursor-pointer"
          />
          <Volume2 className="w-3.5 h-3.5 text-pink-500 ml-2" />
        </div>
      )}
    </div>
  );
};
