import { userStorageService } from '@hwmobile/services/userStorageService.ts';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type WatchingMovie = {
  id: number;
  numberOfStreams: number;
};

interface IUserContextProvider {
  userData: {
    watchingMovie: WatchingMovie | null;
    setLastWatchingMovie: (movie: WatchingMovie | null) => void;
  };
}

const UserContextDefault = {
  userData: {
    watchingMovie: null,
    setLastWatchingMovie() {},
  },
};

const UserContext = createContext<IUserContextProvider>(UserContextDefault);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchingMovie, setWatchingMovie] = useState<WatchingMovie | null>(null);
  useEffect(() => {
    userStorageService.getData().then(data => {
      if (data) {
        setWatchingMovie(JSON.parse(data));
      }
    });
  }, []);

  const setLastWatchingMovie = useCallback(async (movie: WatchingMovie | null) => {
    if (movie) {
      setWatchingMovie(movie);
      await userStorageService.setData(JSON.stringify(movie));
    } else {
      await userStorageService.removeData();
    }
  }, []);

  const value = {
    userData: {
      watchingMovie,
      setLastWatchingMovie,
    },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
