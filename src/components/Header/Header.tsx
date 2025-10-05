import { AuthPanel } from '../AuthPanel/AuthPanel';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';

export const Header = async () => {
  return (
    <header className={styles.headerContainer}>
      <AuthPanel />
      <h1 className={styles.title}>TENNIS STORE</h1>
      <HeaderNavigation />
    </header>
  )
}
