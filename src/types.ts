export interface FriendshipMilestone {
  id: string;
  yearOrDate: string;
  title: string;
  description: string;
  photoUrl?: string;
  emoji?: string;
}

export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  dateOrLocation?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface InsideJoke {
  id: string;
  teaser: string;
  punchline: string;
  emoji: string;
  reactionCount?: number;
}

export interface AppreciationCard {
  id: string;
  text: string;
  subtext?: string;
  icon?: string;
}

export interface DonationDetails {
  date: string;
  mealsCount: number;
  budgetEstimate: string;
  recipientDescription: string;
  personalNote: string;
  badgeText: string;
}

export interface BirthdayLetter {
  title: string;
  paragraphs: string[];
  closure: string;
  signature: string;
}

export interface BirthdayConfig {
  herName: string;
  nickname: string;
  birthdayDateString: string; // ISO string or YYYY-MM-DD
  openingTeaser: string;
  openingSubtext: string;
  timeline: FriendshipMilestone[];
  memories: MemoryPhoto[];
  insideJokes: InsideJoke[];
  appreciations: AppreciationCard[];
  letter: BirthdayLetter;
  donation: DonationDetails;
  finalMessage: {
    headline: string;
    subheadline: string;
    finalWish: string;
    signoff: string;
  };
}
