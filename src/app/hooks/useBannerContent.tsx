import { fetchRemoteConfig } from '@hwmobile/utils/remoteConfig.ts';
import { useQuery } from '@tanstack/react-query';
import { Banner } from '../types/baner.ts';

const bannersUpdateTimeout = 300000; // 5 minutes

export const useBannerContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['banners'],
    queryFn: async (): Promise<Banner[]> => {
      return fetchRemoteConfig('banners');
    },
    staleTime: bannersUpdateTimeout,
  });

  return { data, isLoading, error };
};
