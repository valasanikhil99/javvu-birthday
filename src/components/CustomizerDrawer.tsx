import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, Save, RotateCcw, Heart, Utensils, FileText, Image as ImageIcon, Sparkles, Eye, Check } from 'lucide-react';
import { BirthdayConfig } from '../types';

interface CustomizerDrawerProps {
  config: BirthdayConfig;
  onSaveConfig: (updated: BirthdayConfig) => void;
  onResetToDefault: () => void;
  hiddenMode: boolean;
  onToggleHiddenMode: () => void;
  onReplayIntro?: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  config,
  onSaveConfig,
  onResetToDefault,
  hiddenMode,
  onToggleHiddenMode,
  onReplayIntro,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'basics' | 'donation' | 'letter' | 'jokes'>('basics');
  const [draft, setDraft] = useState<BirthdayConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync draft when opened or external config changes
  const handleOpen = () => {
    setDraft(JSON.parse(JSON.stringify(config)));
    setIsOpen(true);
  };

  const handleSave = () => {
    onSaveConfig(draft);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsOpen(false);
    }, 700);
  };

  if (hiddenMode) {
    return (
      <button
        onClick={onToggleHiddenMode}
        className="fixed top-4 right-4 z-40 p-2 rounded-full bg-black/40 hover:bg-black/70 text-zinc-500 hover:text-zinc-300 transition-colors opacity-30 hover:opacity-100"
        title="Show Customize Button"
      >
        <Settings className="w-4 h-4" />
      </button>
    );
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={handleOpen}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181922]/90 hover:bg-zinc-800 border border-white/[0.1] text-rose-300 hover:text-rose-200 text-xs font-medium backdrop-blur-md shadow-lg transition-all cursor-pointer"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Edit Details</span>
        </button>

        <button
          onClick={onToggleHiddenMode}
          className="p-1.5 rounded-full bg-[#181922]/90 hover:bg-zinc-800 border border-white/[0.1] text-zinc-400 hover:text-zinc-200 text-xs backdrop-blur-md shadow-lg transition-all cursor-pointer"
          title="Hide edit button for clean sharing"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Slide-over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-lg h-full bg-[#14151c] border-l border-white/[0.1] flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-2xl text-zinc-100">Personalize Experience</h3>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Changes take effect immediately and are saved to your browser.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/[0.08] px-4 overflow-x-auto text-xs font-medium">
                <button
                  onClick={() => setActiveTab('basics')}
                  className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === 'basics'
                      ? 'border-rose-400 text-rose-300'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Her Details</span>
                </button>
                <button
                  onClick={() => setActiveTab('donation')}
                  className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === 'donation'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Donation (₹2,000)</span>
                </button>
                <button
                  onClick={() => setActiveTab('letter')}
                  className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === 'letter'
                      ? 'border-pink-400 text-pink-300'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Letter</span>
                </button>
                <button
                  onClick={() => setActiveTab('jokes')}
                  className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === 'jokes'
                      ? 'border-emerald-400 text-emerald-300'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inside Jokes</span>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm">
                {activeTab === 'basics' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Her Name
                      </label>
                      <input
                        type="text"
                        value={draft.herName}
                        onChange={(e) => setDraft({ ...draft, herName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Nickname / Signoff Reference
                      </label>
                      <input
                        type="text"
                        value={draft.nickname}
                        onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Birthday Date
                      </label>
                      <input
                        type="text"
                        value={draft.birthdayDateString}
                        onChange={(e) => setDraft({ ...draft, birthdayDateString: e.target.value })}
                        placeholder="2026-09-27T00:00:00"
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-rose-400 font-mono text-xs"
                      />
                      <span className="text-[11px] text-zinc-500 mt-1 block">
                        Format: YYYY-MM-DD (e.g. 2026-09-27T00:00:00)
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Opening Screen Message
                      </label>
                      <input
                        type="text"
                        value={draft.openingTeaser}
                        onChange={(e) => setDraft({ ...draft, openingTeaser: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    {onReplayIntro && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            onReplayIntro();
                          }}
                          className="w-full py-2.5 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 hover:text-rose-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                          <span>Replay Intro Screen ("Do you love me?") 🐾</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'donation' && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      💡 <strong>Budget Guide:</strong> For an approximate budget of ₹2,000, 40 to 50 wholesome meals (around ₹40/meal) can be arranged with a local community kitchen or langar.
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Number of Meals
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={draft.donation.mealsCount}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            donation: {
                              ...draft.donation,
                              mealsCount: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Donation Description
                      </label>
                      <textarea
                        rows={3}
                        value={draft.donation.recipientDescription}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            donation: {
                              ...draft.donation,
                              recipientDescription: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Personal Note Line
                      </label>
                      <input
                        type="text"
                        value={draft.donation.personalNote}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            donation: {
                              ...draft.donation,
                              personalNote: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'letter' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Letter Paragraphs (one per line or break)
                      </label>
                      <textarea
                        rows={8}
                        value={draft.letter.paragraphs.join('\n\n')}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            letter: {
                              ...draft.letter,
                              paragraphs: e.target.value
                                .split('\n\n')
                                .filter((p) => p.trim().length > 0),
                            },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-pink-400 text-xs leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Letter Closure
                      </label>
                      <input
                        type="text"
                        value={draft.letter.closure}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            letter: { ...draft.letter, closure: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-pink-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        Signature
                      </label>
                      <input
                        type="text"
                        value={draft.letter.signature}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            letter: { ...draft.letter, signature: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-100 focus:outline-none focus:border-pink-400"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'jokes' && (
                  <div className="space-y-4">
                    <p className="text-xs text-zinc-400">
                      Customize inside joke cards below:
                    </p>
                    {draft.insideJokes.map((joke, idx) => (
                      <div
                        key={joke.id}
                        className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/[0.06] space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={joke.emoji}
                            onChange={(e) => {
                              const updated = [...draft.insideJokes];
                              updated[idx].emoji = e.target.value;
                              setDraft({ ...draft, insideJokes: updated });
                            }}
                            className="w-10 text-center px-1 py-1 rounded bg-zinc-800 border border-white/10"
                          />
                          <input
                            type="text"
                            value={joke.teaser}
                            onChange={(e) => {
                              const updated = [...draft.insideJokes];
                              updated[idx].teaser = e.target.value;
                              setDraft({ ...draft, insideJokes: updated });
                            }}
                            className="flex-1 px-2 py-1 rounded bg-zinc-800 border border-white/10 text-xs text-zinc-200"
                          />
                        </div>
                        <textarea
                          rows={2}
                          value={joke.punchline}
                          onChange={(e) => {
                            const updated = [...draft.insideJokes];
                            updated[idx].punchline = e.target.value;
                            setDraft({ ...draft, insideJokes: updated });
                          }}
                          className="w-full px-2 py-1 rounded bg-zinc-800 border border-white/10 text-xs text-zinc-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 border-t border-white/[0.08] flex items-center justify-between gap-3 bg-[#111218]">
                <button
                  type="button"
                  onClick={onResetToDefault}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shadow-lg"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" />
                      <span>Save & Apply</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
