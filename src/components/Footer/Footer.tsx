import Link from 'next/link';
import styles from './Footer.module.css';
import { PATHS } from '@/constants/paths';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link href={PATHS.ROOT}>TENNIS STORE</Link>
    </footer>
  )
}
