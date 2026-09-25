/**
 * Ambient background music engine using Web Audio API + optional audio element support.
 * Plays a gentle, nostalgic music box / piano arpeggio when triggered,
 * or plays a custom audio source if supplied.
 */

class BirthdayAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.45;
  private timerId: number | null = null;
  private customAudio: HTMLAudioElement | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  private pentatonicNotes = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
  ];

  // A gentle, heartwarming melody sequence (MIDI note offsets / frequencies)
  private melodySeq = [
    392.00, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 329.63,
    349.23, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66,
    261.63, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63, 261.63,
    293.66, 329.63, 392.00, 523.25, 440.00, 392.00, 293.66, 261.63,
  ];
  private stepIndex = 0;

  constructor() {
    // Lazy initialized on user gesture
  }

  private initContext() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // Audio fallback for restricted environments
    }
  }

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.add(fn);
    fn(this.isPlaying);
    return () => this.listeners.delete(fn);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  private playChime(freq: number, duration = 2.2) {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Sine + faint overtone for music box / celesta tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(this.volume * 0.35, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // AudioContext error handling
    }
  }

  public start() {
    if (this.customAudio) {
      this.customAudio.play().then(() => {
        this.isPlaying = true;
        this.notify();
      }).catch(() => {
        // Fall back to synth
        this.startSynth();
      });
      return;
    }
    this.startSynth();
  }

  private startSynth() {
    this.initContext();
    this.isPlaying = true;
    this.notify();

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    // Play next note every 580ms with gentle rhythmic variation
    this.timerId = window.setInterval(() => {
      if (!this.isPlaying) return;
      const note = this.melodySeq[this.stepIndex % this.melodySeq.length];
      this.playChime(note, 2.0);

      // Occasional soft bass harmony
      if (this.stepIndex % 4 === 0) {
        this.playChime(note / 2, 3.0);
      }

      this.stepIndex++;
    }, 580);
  }

  public playHappyChime() {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.001, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.5);
      });
    } catch {
      // Audio fallback
    }
  }

  public playSadWhimper() {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch {
      // Audio fallback
    }
  }

  public playSqueak() {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Audio fallback
    }
  }

  public playCrackerPop() {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // High quick pop + sparkling snap
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);

      // Delicate trailing sparkle
      this.playSparkleChime(0.03);
    } catch {
      // Ignore
    }
  }

  public playFireworkBoom(isBig = false) {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = isBig ? 0.7 : 0.45;
      const startFreq = isBig ? 140 : 180;
      const endFreq = isBig ? 32 : 45;
      const peakGain = isBig ? 0.35 : 0.22;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(peakGain, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.05);

      // Trailing sparkles
      setTimeout(() => {
        this.playSparkleChime();
      }, 120);
      if (isBig) {
        setTimeout(() => {
          this.playSparkleChime();
        }, 260);
      }
    } catch {
      // Ignore
    }
  }

  public playSparkleChime(delayOffset = 0) {
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime + delayOffset;
      const notes = [659.25, 783.99, 880.0, 1046.5, 1318.51];
      const freq = notes[Math.floor(Math.random() * notes.length)];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.38);
    } catch {
      // Ignore
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.customAudio) {
      this.customAudio.pause();
    }
    this.notify();
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.customAudio) {
      this.customAudio.volume = this.volume;
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public setCustomAudioUrl(url: string | null) {
    if (this.customAudio) {
      this.customAudio.pause();
      this.customAudio = null;
    }
    if (url) {
      this.customAudio = new Audio(url);
      this.customAudio.loop = true;
      this.customAudio.volume = this.volume;
      if (this.isPlaying) {
        if (this.timerId !== null) {
          window.clearInterval(this.timerId);
          this.timerId = null;
        }
        this.customAudio.play().catch(() => {});
      }
    }
  }
}

export const audioEngine = new BirthdayAudioEngine();
