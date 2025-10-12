import { FavoriteContext } from '@/providers/FavoriteProvider';
import { Racket } from '@/types/racket';
import { use } from 'react';

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: Racket["id"];
  isFavoriteInitial?: boolean;
}): boolean => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id] ?? null;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};
