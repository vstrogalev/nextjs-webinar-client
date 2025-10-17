import { Racket } from '@/types/racket'
import { RacketFavoriteButton } from '@/components/RacketFavoriteButton/RacketFavoriteButton';
import styles from './RacketCardFooter.module.css'

interface RacketCardFooterProps {
  id: Racket['id'];
  name: string;
  isLoggedIn: boolean;
  isFavorite?: boolean;
}

export const RacketCardFooter = ({ id, name, isFavorite = false, isLoggedIn }: RacketCardFooterProps) => {
  return (
    <div className={styles.racketCardFooter}>
      <p className={styles.name}>{name}</p>
      {isLoggedIn && <RacketFavoriteButton racketId={id} isFavorite={isFavorite} />}
    </div>
  )
}
