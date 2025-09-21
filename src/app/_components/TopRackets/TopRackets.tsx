import { Racket } from '@/types/racket'
import { mockRackets } from '@/constants/mockRackets'
import { RacketCard } from '@/app/components/RacketCard';
import { PATHS } from '@/constants/paths';
import styles from './TopRackets.module.css'

export const TopRackets = () => {
  const rackets: Racket[] = mockRackets.slice(0, 3);

  return (
    <div className={styles.topRacketsContainer}>
      {rackets.map(racket => (
        <RacketCard key={`racket-card-${racket.id}`} imageUrl={racket.imageUrl} href={`${PATHS.RACKET}/${racket.id}`} name={racket.name} />
      ))}
    </div>
  )
}
