import { fetchRemoteConfig } from '@hwmobile/utils/remoteConfig.ts';
import { useQuery } from '@tanstack/react-query';
import { Category } from '../types/category.ts';

const categoryContentUpdateTimeout = 300000; // 5 minutes

export const useCategoryContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      return fetchRemoteConfig('categories');
    },
    staleTime: categoryContentUpdateTimeout,
  });
  return { data, isLoading, error };
};
