'use client';

import { SetFavoriteParams } from '@/types/favorite';
import { Racket } from '@/types/racket';
import { createContext, FC, PropsWithChildren, use, useCallback, useState } from 'react';

export type Favorites = Record<Racket['id'], boolean>;

export interface FavoriteContextProps {
  favorites: Favorites;
  setFavorite: (params: SetFavoriteParams) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps>({ favorites: {}, setFavorite: () => { } });

export const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteContextProps['favorites']>({});

  const setFavorite = useCallback(({ racketId, isFavorite }: SetFavoriteParams) => {
    setFavorites((prev) => {
      if (prev[racketId] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [racketId]: isFavorite,
      }
    })
  }, []);

  return (
    <FavoriteContext value={{ favorites, setFavorite }}>
      {children}
    </FavoriteContext>
  )
}

export function useFavorites() {
  const context = use(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }

  return context;
}
