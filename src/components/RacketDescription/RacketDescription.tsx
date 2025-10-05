'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useUser } from '@/providers/UserProvider';
import styles from './RacketDescription.module.css'

interface RacketDescriptionProps {
  brand: string;
  name: string;
  description: string;
  isFavorite?: boolean;
}

export const RacketDescription = ({ brand, name, description, isFavorite: initialFavorite }: RacketDescriptionProps) => {
  const [isFavorite, setFavorite] = useState(initialFavorite);
  const { user } = useUser();
  const isLoggedIn = useMemo(() => Boolean(user?.name), [user?.name])

  const handleFavoriteClick = () => {
    setFavorite(prev => !prev)
  }

  return (
    <div className={styles.racketDescriptionContainer}>
      <div className={styles.brand}>{brand}</div>
      <div className={styles.title}>
        <h2 className={styles.name}>{name}</h2>
        {isLoggedIn && (
          <button
            className={clsx(styles.button, { [styles.active]: isFavorite })}
            onClick={handleFavoriteClick}
          >
            &hearts;
          </button>
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
