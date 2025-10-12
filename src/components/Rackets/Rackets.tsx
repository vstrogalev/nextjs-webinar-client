'use client';

import { Racket } from '@/types/racket'
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { ROUTES } from '@/constants/routes';
import { useUserInfo } from '@/hooks/useUserInfo';
import { RacketCardFooter } from '../RacketCard/RacketCardFooter/RacketCardFooter';
import styles from './Rackets.module.css'

interface RacketsProps {
  rackets: Racket[];
}

export const Rackets = ({ rackets }: RacketsProps) => {
  const { isLoggedIn } = useUserInfo();

  return (
    <div className={styles.racketsContainer}>
      {rackets.map(racket => {
        const { id, imageUrl, name, userData } = racket;

        return (
          <RacketCard key={id} imageUrl={imageUrl} href={`${ROUTES.RACKET}/${id}`} >
            <RacketCardFooter id={id} name={name} isFavorite={Boolean(userData?.isFavorite)} isLoggedIn={isLoggedIn} />
          </RacketCard>
        )
      })}
    </div>
  )
}
