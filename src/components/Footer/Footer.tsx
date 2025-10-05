import Link from 'next/link';
import styles from './Footer.module.css';
import { ROUTES } from '@/constants/routes';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link href={ROUTES.ROOT}>TENNIS STORE</Link>
    </footer>
  )
}
