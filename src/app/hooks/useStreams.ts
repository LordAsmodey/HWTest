import { fetchRemoteConfig } from '@hwmobile/utils/remoteConfig.ts';
import { useQuery } from '@tanstack/react-query';
import { Category } from '../types/category.ts';

// TODO: Rework hook
// This may be a temporary solution until we initialize the application according to react-native best practices.
//At the moment, it is not always possible to obtain data from the cache because at the time of receiving it it may not yet exist.

export const useStreams = (movieId: number) => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      return fetchRemoteConfig('categories');
    },
  });
  if (categories) {
    const category = categories.find(category => category.movies.some(movie => +movie.id === +movieId));
    if (category) {
      const foundedMovie = category.movies.find(movie => +movie.id === +movieId);
      return foundedMovie;
    }
  }
  return null;
};
