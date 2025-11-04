export interface Movie {
  id: number;
  title: string;
  type: "MOVIE" | "TV_SHOW" | "OTHER";
  director: string;
  budget?: string;
  location?: string;
  duration?: string;
  yearTime?: string;
  description?: string;
  posterUrl?: string;
}
