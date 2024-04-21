import { useQueryClient } from '@tanstack/react-query';
import { Category } from '../types/category.ts';

export const useStreams = (movieId: number) => {
  const queryClient = useQueryClient();

  const categories = queryClient.getQueryData<Category[]>(['categories']);
  if (categories) {
    const category = categories.find(category => category.movies.some(movie => +movie.id === +movieId));
    if (category) {
      console.log(1);
      return category.movies.find(movie => +movie.id === +movieId);
    }
  }
  return null;
};
