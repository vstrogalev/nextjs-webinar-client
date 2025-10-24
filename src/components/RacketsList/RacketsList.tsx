'use client';

import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { ROUTES } from '@/constants/routes';
import { RacketCardFooter } from '../RacketCard/RacketCardFooter/RacketCardFooter';
import { useUserInfo } from '@/hooks/useUserInfo';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import styles from './RacketsList.module.css'

interface RacketsListProps {
  title: string;
  rackets: Racket[];
  pagination?: {
    isReachingEnd: boolean;
    isLoadingMore: boolean;
    onLoadMoreClick: () => void;
  }
}

export const RacketsList = ({ title, rackets, pagination }: RacketsListProps) => {
  const { isLoggedIn } = useUserInfo();

  return (
    <article className={styles.racketsListContainer}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {rackets.map(racket => (
          <li key={racket.id}>
            <RacketCard
              imageUrl={racket.imageUrl}
              href={`${ROUTES.RACKET}/${racket.id}`}
            >
              <RacketCardFooter id={racket.id} name={racket.name} isFavorite={racket.userData?.isFavorite} isLoggedIn={isLoggedIn} />
            </RacketCard>
          </li>
        ))}
      </ul>

      {(pagination && !pagination?.isReachingEnd) && <LoadMoreButton isLoadingMore={pagination?.isLoadingMore} onClick={pagination?.onLoadMoreClick} />}
    </article>
  )
}
