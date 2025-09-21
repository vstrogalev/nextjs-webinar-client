import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from './TitlePanel.module.css'

export const TitlePanel = () => {

  return (
    <div className={styles.titlePanelContainer}>
      <h2 className={styles.title}>Ракетки</h2>
      <Link href={PATHS.RACKETS} className={styles.link} >
        Все
        <ArrowOutwardIcon className={styles.icon} fontSize='small' />
      </Link>
    </div>
  )
}
