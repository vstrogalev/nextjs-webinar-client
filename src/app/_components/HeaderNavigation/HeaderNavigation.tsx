'use client';

import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import styles from './HeaderNavigation.module.css'

export const HeaderNavigation = () => {
  const path = usePathname();

  return (
    <nav className={styles.headerNavigationContainer}>
      <ul className={styles.links}>
        <li>
          <Link href={PATHS.ROOT} className={clsx(styles.link, { [styles.active]: path === PATHS.ROOT })} >Главная</Link>
        </li>
        <li>
          <Link href={PATHS.RACKETS} className={clsx(styles.link, { [styles.active]: path === PATHS.RACKETS })} >Ракетки</Link>
        </li>
      </ul>
    </nav>
  )
}
