import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from './RacketsTitle.module.css'

export const RacketsTitle = () => {

  return (
    <div className={styles.racketsTitleContainer}>
      <h2 className={styles.title}>Ракетки</h2>
      <Link href={PATHS.RACKETS} className={styles.link} >
        Все
        <ArrowOutwardIcon className={styles.icon} fontSize='small' />
      </Link>
    </div>
  )
}
