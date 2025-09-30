import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { ROUTES } from '@/constants/routes';
import styles from './RacketsList.module.css'

interface RacketsListProps {
  title: string;
  rackets: Racket[];
}

export const RacketsList = ({ title, rackets }: RacketsListProps) => {

  return (
    <article className={styles.racketsListContainer}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {rackets.map(racket => (
          <li key={racket.id}>
            <RacketCard
              imageUrl={racket.imageUrl}
              href={`${ROUTES.RACKET}/${racket.id}`}
              name={racket.name}
            />
          </li>
        ))}
      </ul>
    </article>
  )
}
