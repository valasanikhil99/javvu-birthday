import { BirthdayConfig } from '../types';

/**
 * ============================================================================
 * BIRTHDAY EXPERIENCE CONFIGURATION DATA
 * ============================================================================
 * You can edit all details below directly to customize the entire website!
 * Any changes made here or via the on-screen "Personalize" drawer will take effect.
 */
export const initialBirthdayConfig: BirthdayConfig = {
  // Her identity
  herName: "Javvvuu",
  nickname: "Javvu / Bestie",
  birthdayDateString: "2026-09-27T00:00:00",

  openingTeaser: "Hey… before you scroll, I have something for you.",
  openingSubtext: "Tap to open your surprise ❤️",

  // Section 3: Friendship Timeline ("Our Story 🫶")
  timeline: [
    {
      id: "meet",
      yearOrDate: "Phase 1 • Day One",
      title: "We met…",
      description:
        "Neither of us had any clue that a completely awkward first conversation would turn into someone I talk to literally every single day. We probably judged each other for the first 10 minutes.",
      photoUrl: "/surprise_photos/photo-06.png",
      emoji: "🌱",
    },
    {
      id: "close",
      yearOrDate: "Phase 2 • The Shift",
      title: "Then somehow we became close…",
      description:
        "From formal greetings to sending 47 unhinged voice notes in a row without saying hello. Somewhere between spontaneous snacks, ranting about life, and sharing unedited tea, you became home.",
      photoUrl: "/surprise_photos/photo-07.png",
      emoji: "☕",
    },
    {
      id: "stupidest",
      yearOrDate: "Phase 3 • Pure Chaos",
      title: "Our stupidest memories…",
      description:
        "Bursting into uncontrollable laughter at the absolute worst possible quiet moments, taking terrible blurry photos, making questionable life choices together, and surviving our own drama.",
      photoUrl: "/surprise_photos/photo-08.png",
      emoji: "💀",
    },
    {
      id: "unforgettable",
      yearOrDate: "Phase 4 • Core Memories",
      title: "The moments I'll never forget…",
      description:
        "The late-night calls when one of us was falling apart, the road trips where nobody knew the directions, and having someone who can read my entire facial expression across a crowded room.",
      photoUrl: "/surprise_photos/photo-09.png",
      emoji: "✨",
    },
    {
      id: "today",
      yearOrDate: "27 September 2026",
      title: "Today…",
      description:
        "Another year older, none the wiser, but forever my favorite person in the entire universe. There is nobody else I would rather share my braincells with.",
      photoUrl: "/surprise_photos/photo-10.png",
      emoji: "🎂",
    },
  ],

  // Section 4: Photo Memories ("Memories 📸")
  memories: [
    {
      id: "m1",
      url: "/surprise_photos/photo-00.png",
      caption: "Proof that we actually cleaned up nicely for once instead of looking like gremlins.",
      dateOrLocation: "Golden hour chaos",
      aspectRatio: "portrait",
    },
    {
      id: "m2",
      url: "/surprise_photos/photo-01.png",
      caption: "Minutes before we spilled food on ourselves and laughed until our stomachs cramped.",
      dateOrLocation: "The afternoon coffee run",
      aspectRatio: "landscape",
    },
    {
      id: "m3",
      url: "/surprise_photos/photo-02.png",
      caption: "You pretending to be serious for 3 seconds before making a weird face.",
      dateOrLocation: "Candid archives",
      aspectRatio: "square",
    },
    {
      id: "m4",
      url: "/surprise_photos/photo-03.png",
      caption: "The radiant birthday girl in her natural element: being dramatic and fabulous.",
      dateOrLocation: "Iconic moments",
      aspectRatio: "portrait",
    },
    {
      id: "m5",
      url: "/surprise_photos/photo-04.png",
      caption: "I don't remember what we were laughing at, but it was definitely illegal or inappropriate.",
      dateOrLocation: "2:00 AM rants",
      aspectRatio: "landscape",
    },
    {
      id: "m6",
      url: "/surprise_photos/photo-05.png",
      caption: "One of my absolute favorite pictures of you. Your smile literally lights up the entire room.",
      dateOrLocation: "Pure sunshine",
      aspectRatio: "portrait",
    },
  ],

  // Section 5: Things Only We Understand ("Things Only We Understand 😂")
  insideJokes: [
    {
      id: "joke-1",
      teaser: "Remember this? 💀",
      punchline:
        "The time you swore with 100% confidence that you knew the shortcut, walked us 4 kilometers in the wrong direction, and then blamed Google Maps for 'not understanding your vibe'.",
      emoji: "🗺️",
      reactionCount: 42,
    },
    {
      id: "joke-2",
      teaser: "That one legendary day…",
      punchline:
        "When we ordered enough food for a family of six, promised we would 'pack the leftovers', and then proceeded to finish every single fry while staring in collective guilt.",
      emoji: "🍟",
      reactionCount: 89,
    },
    {
      id: "joke-3",
      teaser: "Our most stupid conversation…",
      punchline:
        "A 45-minute philosophical debate at 1:40 AM about whether cereal counts as soup, followed immediately by sending each other 12 TikTok reels without acknowledging the outcome.",
      emoji: "🥣",
      reactionCount: 67,
    },
    {
      id: "joke-4",
      teaser: "You still owe me an explanation for this…",
      punchline:
        "Why you screenshot my ugly mid-sneeze camera angles to use as emotional blackmail, but delete any slightly unflattering photo of yourself in 0.003 seconds.",
      emoji: "📸",
      reactionCount: 104,
    },
    {
      id: "joke-5",
      teaser: "The telepathic eye contact 👀",
      punchline:
        "When someone says something completely absurd in public and we look at each other for half a second, telepathically exchanging a 5-volume essay of judgment.",
      emoji: "👁️",
      reactionCount: 55,
    },
    {
      id: "joke-6",
      teaser: "The 'I'm 5 minutes away' lie ⏳",
      punchline:
        "Sending 'getting in the cab now!' while literally wrapped in a towel standing in the middle of your bedroom staring into the abyss.",
      emoji: "🏃‍♀️",
      reactionCount: 120,
    },
  ],

  // Section 6: What You Mean To Me ("Things I Don't Say Enough ❤️")
  appreciations: [
    {
      id: "a1",
      text: "You always know how to make me smile.",
      subtext: "Even on the days when everything feels heavy, your presence makes the world feel manageable again.",
      icon: "Sparkles",
    },
    {
      id: "a2",
      text: "Thank you for being there.",
      subtext: "No judgment, no unsolicited lectures, just showing up with your whole heart and listening when I needed it most.",
      icon: "Heart",
    },
    {
      id: "a3",
      text: "Some people become memories. You became a part of my life.",
      subtext: "I can't imagine any milestone, breakdown, or celebration in my future where you aren't right there with me.",
      icon: "Sun",
    },
    {
      id: "a4",
      text: "Your kindness is your real superpower.",
      subtext: "The genuine warmth you give people around you inspires me to be a better person every single day.",
      icon: "Shield",
    },
  ],

  // Section 7: The Letter ("A Letter For You 💌")
  letter: {
    title: "A Letter For You 💌",
    paragraphs: [
      "Dear Javvvuu,",
      "Happy 27th of September. I wanted to take a moment away from all the birthday spam, Instagram stories, and memes to tell you something real.",
      "Friendships like ours don't happen often. We've seen each other at our absolute best, our most chaotic, and the times when we could barely string two coherent sentences together. Yet somehow, through every phase, you’ve remained my safest place.",
      "You have this quiet ability to turn ordinary boring days into memories I’ll look back on decades from now. Thank you for answering my nonsensical calls, for checking in when I go quiet, and for loving me even when I’m being completely impossible.",
      "On this birthday, I don't just wish you happiness, success, and good health — I wish you the kind of peace and joy you give to everyone around you so effortlessly.",
      "I’m so lucky to walk through this life with you as my best friend.",
    ],
    closure: "And yes… I mean every single word. ❤️",
    signature: "— Your idiot bestie",
  },

  // Section 9: Food Donation Surprise
  donation: {
    date: "27 September 2026",
    mealsCount: 20,
    budgetEstimate: "₹2,000",
    recipientDescription:
      "Nutritious warm meal boxes and celebratory birthday cake distributed to local children and families at a community shelter.",
    personalNote:
      "A small gesture, for a day that means a lot to me.",
    badgeText: "BIRTHDAY FOOD DONATION",
  },

  // Section 11: Final Message
  finalMessage: {
    headline: "Whatever happens in the future, I hope we always have memories like these.",
    subheadline: "Thank you for being my bestie. ❤️",
    finalWish: "Happiest Birthday, Javvvuu 🎂",
    signoff: "— From your idiot bestie",
  },
};
