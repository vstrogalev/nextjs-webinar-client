import { PATHS } from '@/constants/paths'
import { LinkActiveByPath } from '@/components/LinkActiveByPath/LinkActiveByPath';
import styles from './HeaderNavigation.module.css'

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.links}>
        <li key={PATHS.ROOT}>
          <LinkActiveByPath href={PATHS.ROOT} label='Главная' />
        </li>
        <li key={PATHS.RACKETS}>
          <LinkActiveByPath href={PATHS.RACKETS} label='Ракетки' />
        </li>
      </ul>
    </nav>
  )
}
