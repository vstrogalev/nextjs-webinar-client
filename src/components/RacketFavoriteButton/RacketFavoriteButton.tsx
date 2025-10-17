'use client';

import clsx from 'clsx';
import { SyntheticEvent, useCallback, useTransition } from 'react';
// import { handleFavoriteServer } from '@/services/handleFavoriteServer'; // server-action to demonstrate revalidateTag
import { SetFavoriteParams } from '@/types/favorite';
import { useFavorites } from '@/providers/FavoriteProvider';
import { handleFavoriteClient } from '@/services/handleFavoriteClient';
import { useHydrateFavorites } from '@/hooks/useHydrateFavorites';
import { useIsFavoriteById } from '@/hooks/useIsFavoriteById';
import styles from './RacketFavoriteButton.module.css'

export const RacketFavoriteButton = ({ racketId, isFavorite: isFavoriteInitial }: SetFavoriteParams) => {
  const [isPending, startTransition] = useTransition();
  useHydrateFavorites(racketId, isFavoriteInitial);
  const { setFavorite } = useFavorites();

  const isFavorite = useIsFavoriteById({ id: racketId, isFavoriteInitial });

  const handleFavoriteClick = useCallback(async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setFavorite({ racketId, isFavorite: !isFavorite });

    startTransition(async () => {
      // await handleFavoriteServer({ racketId, isFavorite }) // server-action to demonstrate revalidateTag
      await handleFavoriteClient({ racketId, isFavorite });
    })
  }, [racketId, isFavorite, setFavorite])

  return (
    <button
      className={clsx(styles.racketFavoriteButtonContainer, { [styles.active]: isFavorite })}
      onClick={handleFavoriteClick}
      disabled={isPending}
    >
      &hearts;
    </button>
  )
}
