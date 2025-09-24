import { Racket } from '@/types/racket'
import { mockRackets } from '@/constants/mockRackets'
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { PATHS } from '@/constants/paths';
import styles from './TopRackets.module.css'

export const TopRackets = () => {
  const rackets: Racket[] = mockRackets;

  return (
    <div className={styles.topRacketsContainer}>
      {rackets.map(racket => (
        <RacketCard key={racket.id} imageUrl={racket.imageUrl} href={`${PATHS.RACKET}/${racket.id}`} name={racket.name} />
      ))}
    </div>
  )
}
