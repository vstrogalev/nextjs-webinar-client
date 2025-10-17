'use client';

import { RacketFavoriteButton } from '../RacketFavoriteButton/RacketFavoriteButton';
import { Racket } from '@/types/racket';
import { useUserInfo } from '@/hooks/useUserInfo';
import styles from './RacketDescription.module.css'

interface RacketDescriptionProps {
  racketId: Racket['id'];
  brand: string;
  name: string;
  description: string;
  isFavorite?: boolean;
}

export const RacketDescription = ({ brand, name, description, racketId, isFavorite = false }: RacketDescriptionProps) => {

  const { isLoggedIn } = useUserInfo();

  return (
    <div className={styles.racketDescriptionContainer}>
      <div className={styles.brand}>{brand}</div>
      <div className={styles.title}>
        <h2 className={styles.name}>{name}</h2>
        {isLoggedIn && <RacketFavoriteButton racketId={racketId} isFavorite={isFavorite} />}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
