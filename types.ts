
export interface LifestyleGuide {
  title: string;
  category: string;
  tips: string[];
  animeReference: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum HobbyCategory {
  DRAWING = 'Drawing',
  ANIME = 'Anime',
  GAMING = 'Gaming',
  MOVIES = 'Movies',
  MANGA = 'Manga'
}
