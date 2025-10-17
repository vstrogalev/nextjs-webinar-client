import { useFavorites } from '@/providers/FavoriteProvider';
import { Racket } from '@/types/racket';
import { useEffect } from 'react';

export const useHydrateFavorites = (racketId: Racket['id'], isFavorite: boolean) => {
  const { setFavorite } = useFavorites();

  useEffect(() => {
    if (typeof isFavorite === 'boolean') {
      setFavorite({ racketId, isFavorite })
    }
  }, [racketId, isFavorite, setFavorite])
}
