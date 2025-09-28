import { Racket } from '@/types/racket'
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { ROUTES } from '@/constants/routes';
import styles from './Rackets.module.css'

interface RacketsProps {
  rackets: Racket[];
}


export const Rackets = ({ rackets }: RacketsProps) => {
  return (
    <div className={styles.racketsContainer}>
      {rackets.map(racket => (
        <RacketCard key={racket.id} imageUrl={racket.imageUrl} href={`${ROUTES.RACKET}/${racket.id}`} name={racket.name} />
      ))}
    </div>
  )
}
