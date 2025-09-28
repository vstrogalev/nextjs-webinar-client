import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from './RacketsTitle.module.css'

interface RacketsTitleProps {
  title: string;
  href: string
}

export const RacketsTitle = ({ title, href }: RacketsTitleProps) => {

  return (
    <div className={styles.racketsTitleContainer}>
      <h2 className={styles.title}>{title}</h2>
      <Link href={href} className={styles.link} >
        Все
        <ArrowOutwardIcon className={styles.icon} fontSize='small' />
      </Link>
    </div>
  )
}
