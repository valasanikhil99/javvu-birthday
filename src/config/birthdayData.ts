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
      text: "You are the first female friend God ever gave me, and I’ll always be grateful to Him for bringing you into my life. ❤️",
      subtext: "You were the first person who showed me what this kind of friendship could feel like — the care, the support, the love, the craziness and all those little moments. I never knew I could become this attached to a friendship, but somehow, you became one of the most precious people in my life. 🥹❤️",
      icon: "Sparkles",
    },
    {
      id: "a2",
      text: "You always understand me, support me, encourage me, and believe in me. ❤️",
      subtext: "No matter what I’m going through, you somehow understand me even when I don’t explain everything. You always push me forward, remind me that I can do better, and believe in me even when I sometimes doubt myself. 🥹\n\nSometimes I genuinely think about it and feel like I’m lucky enough to have you, my sweet buddyyy. ❤️♾️\n\nYou’re not just someone who listens to me — you’re someone who makes me believe in myself a little more. 🫶🏻",
      icon: "Heart",
    },
    {
      id: "a3",
      text: "You know you are one of the biggest reasons I’m able to stay consistent at the gym. ❤️🏋️",
      subtext: "You always encourage me, buddyyy. Whenever I hit a new PR, you get excited for me like it’s your own achievement. 🥹❤️ And even when I don’t hit it, you never make me feel bad — you just say, “You can try next time, buddyyy.”\n\nThose little words mean more to me than you probably realize. You always make me believe in myself and keep pushing forward.\n\nHonestly, you are one of the reasons behind the transformation I’m having right now. You motivate me to stay consistent, keep improving, and believe that I can become better than who I was yesterday.\n\nThank you for always believing in me, buddyyy. ❤️♾️",
      icon: "Sun",
    },
    {
      id: "a4",
      text: "Buddyyy, you are genuinely one of the purest souls I have ever met. ❤️",
      subtext: "It’s not just about the way you look or the way you carry yourself — it’s about the person you are inside. The way you care, your kindness, your innocence, and the way you treat people make you truly special.\n\nYou have such a charming face, gorgeous eyes, beautiful hair… honestly, you’re beautiful in every way. 🥹❤️ But what makes you even more beautiful is that your heart is just as beautiful as you are on the outside.\n\nAnd sometimes, buddyyy, I genuinely feel like “Maula Mere Maula” was written just to admire someone like you. 😭❤️ The feeling, the beauty, the admiration in that song somehow reminds me of you.\n\nYou’re beautiful outside, but your pure heart is what makes you unforgettable. ❤️♾️",
      icon: "Shield",
    },
  ],

  // Section 7: The Letter ("A Letter For You 💌")
  letter: {
    title: "A Letter For You 💌",
    paragraphs: [
      "Yappieee Birthdayyy 🎂❤️ to myyy beautiful and chweet buddyyy! 🐾",
      "Today is the day God created one of the most beautiful and charming souls and blessed this world with you, buddyyy. ❤️",
      "Buddyyy, you are one of the most amazing people in my life. You came a little bit late, but now you’re literally dominating everythinggg 😭😂❤️. You are genuinely one of the most beautiful souls I have ever met in my life.",
      "Sometimes, your happiness makes me even happier, your sadness makes me upset, and your childish behaviour brings out the inner kid in meee. 😭❤️ Yeahhh, you know it too — you are one of the biggest and most important people in my life.",
      "I admire this friendship a lot, buddyyy. You make me genuinely happy every day, and I enjoy your presence, your talks, your craziness, and honestly… everything about our friendship. 🫶🏻",
      "Come onnn buddyyy, it’s your dayyy! 🎂🎉 Cheersss 🥂 Let’s make some beautiful memories and add another amazing chapter to your life.",
      "And one important thing — I’ll always be there for you, buddyyy. Whenever you want me, anytime, any second, any millisecond 😭❤️. That’s my promise to you on your birthday. 🎂♾️",
      "One thing I want you to know for real, buddyyy — I have shown you a side of me that everyone doesn’t get to see. The amount of love, care, support, and respect I have for you is something I’ll always hold onto, no matter how far life takes us.",
      "By God’s grace, I want to spend some more beautiful time with you and take care of you in a way I’ve never done for anyone before. ❤️",
      "I still hold the same feeling I had from Day 1. You showed me what a real female friendship can be, and for that, I’ll always be grateful to you. 🥹❤️",
      "You care about me, you take care of me, you love me, you support me, and most importantly… like you are baaristunnav nannuu antheee 😂❤️.",
      "Enni cheppina, inka cheppalani untundhiii… but remember one thing, buddyyy:",
      "You will be forever loved, cared for, and remembered by me. ♾️❤️",
    ],
    closure: "Once again… Happiest Birthdayyyy, buddyyy! 🎂🎈🐾❤️",
    signature: "— Your bestie",
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
