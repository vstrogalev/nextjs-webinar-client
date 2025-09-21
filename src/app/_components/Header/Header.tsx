import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>TENNIS STORE</h1>
      <HeaderNavigation />
    </header>
  )
}
