export type Movie = {
  id: number;
  title: string;
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
