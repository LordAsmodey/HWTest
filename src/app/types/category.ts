export type Movie = {
  id: number;
  title: string;
  author: string;
  image: string;
  isAvailable: boolean;
  availabilityDate: string | null;
  streams: string[];
};

export type Category = {
  id: number;
  name: string;
  movies: Movie[];
};
