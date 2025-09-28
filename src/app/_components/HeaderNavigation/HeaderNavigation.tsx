import { ROUTES } from '@/constants/routes'
import { LinkActiveByPath } from '@/components/LinkActiveByPath/LinkActiveByPath';
import styles from './HeaderNavigation.module.css'

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.links}>
        <li key={ROUTES.ROOT}>
          <LinkActiveByPath href={ROUTES.ROOT}>Главная</LinkActiveByPath>
        </li>
        <li key={ROUTES.RACKETS}>
          <LinkActiveByPath href={ROUTES.RACKETS}>Ракетки</LinkActiveByPath>
        </li>
        <li key={ROUTES.TOP_10}>
          <LinkActiveByPath href={ROUTES.TOP_10}>Топ 10</LinkActiveByPath>
        </li>
      </ul>
    </nav>
  )
}
