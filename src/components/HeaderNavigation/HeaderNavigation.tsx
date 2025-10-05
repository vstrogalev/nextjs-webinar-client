import { ROUTES } from '@/constants/routes'
import { LinkActiveByPath } from '@/components/LinkActiveByPath/LinkActiveByPath';
import styles from './HeaderNavigation.module.css'

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <LinkActiveByPath href={ROUTES.ROOT}>Главная</LinkActiveByPath>
        </li>
        <li>
          <LinkActiveByPath href={ROUTES.RACKETS}>Ракетки</LinkActiveByPath>
        </li>
        <li>
          <LinkActiveByPath href={ROUTES.TOP_10}>Топ 10</LinkActiveByPath>
        </li>
      </ul>
    </nav>
  )
}
