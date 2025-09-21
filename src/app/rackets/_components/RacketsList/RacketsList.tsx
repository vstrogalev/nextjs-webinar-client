import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { PATHS } from '@/constants/paths';
import styles from './RacketsList.module.css'

interface RacketsListProps {
  rackets: Racket[];
}

export const RacketsList = ({ rackets }: RacketsListProps) => {

  return (
    <article className={styles.racketsListContainer}>
      <h2>Ракетки</h2>
      <ul className={styles.list}>
        {rackets.map(racket => (
          <li key={racket.id} className={styles.item}>
            <RacketCard
              imageUrl={racket.imageUrl}
              href={`${PATHS.RACKET}/${racket.id}`}
              name={racket.name}
            />
          </li>
        ))}
      </ul>
    </article>
  )
}
