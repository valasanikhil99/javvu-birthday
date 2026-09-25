import confetti from 'canvas-confetti';

/**
 * Canvas-based multi-stage confetti explosion effect designed specifically
 * for the birthday surprise reveal to create an energetic, joyful celebration mood.
 */
export const launchSurpriseConfettiExplosion = () => {
  // Vibrant celebration palette: rose pink, coral, pastel peach, canary gold, sky blue, lavender, emerald mint
  const colors = [
    '#f43f5e',
    '#ec4899',
    '#fb7185',
    '#fbbf24',
    '#fde047',
    '#38bdf8',
    '#a855f7',
    '#34d399',
    '#ff9a9e',
  ];

  // Stage 1: Massive Central Eruption
  confetti({
    particleCount: 140,
    spread: 100,
    origin: { x: 0.5, y: 0.65 },
    colors,
    startVelocity: 48,
    scalar: 1.15,
    zIndex: 99999,
  });

  // Stage 2: Twin Lateral Cannons shooting diagonally upwards
  setTimeout(() => {
    // Left Cannon
    confetti({
      particleCount: 85,
      angle: 60,
      spread: 65,
      origin: { x: 0.05, y: 0.75 },
      colors,
      startVelocity: 55,
      scalar: 1.0,
      zIndex: 99999,
    });
    // Right Cannon
    confetti({
      particleCount: 85,
      angle: 120,
      spread: 65,
      origin: { x: 0.95, y: 0.75 },
      colors,
      startVelocity: 55,
      scalar: 1.0,
      zIndex: 99999,
    });
  }, 220);

  // Stage 3: High-altitude glittering cascade drifting downwards
  setTimeout(() => {
    confetti({
      particleCount: 90,
      spread: 140,
      origin: { x: 0.5, y: 0.25 },
      colors: ['#ffb6c1', '#fde047', '#a7f3d0', '#bfdbfe', '#fbcfe8', '#ffffff'],
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.85,
      shapes: ['circle', 'square'],
      zIndex: 99999,
    });
  }, 480);

  // Stage 4: Lingering sparkling burst for a festive finale
  setTimeout(() => {
    confetti({
      particleCount: 65,
      spread: 160,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#f472b6', '#fbbf24', '#38bdf8', '#fb7185'],
      startVelocity: 35,
      decay: 0.93,
      scalar: 1.25,
      zIndex: 99999,
    });
  }, 750);
};
